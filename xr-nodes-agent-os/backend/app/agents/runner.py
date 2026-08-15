"""AgentRunner — Executes a single agent's reasoning-and-tool loop.

Loop shape:

1. Build a system message from the agent's spec.
2. Call :func:`model_router.generate` with the agent's allowed tool specs.
3. If the response contains ``tool_calls``:
    a. For each tool call, request permission via :class:`PermissionManager`.
    b. If permitted, run :meth:`ToolExecutor.execute_tool` and append a
       ``role="tool"`` message with the result.
    c. If approval is required, persist an :class:`Approval` row, mark the
       step ``needs_approval``, and stop the loop (the caller can resume
       after the human decides).
    d. If denied, append an error message and continue the loop so the
       model can recover.
4. Re-prompt the model with the updated message list until it returns a
   final answer, hits :attr:`Settings.AGENT_MAX_STEPS`, or raises.

Token usage, tool-call records, and any transient failures are accumulated
into the returned :class:`AgentResult`.
"""
from __future__ import annotations

import json
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from uuid import uuid4

from app.agents.base import AgentResult, BaseAgent
from app.core.config import settings
from app.core.events import Event, event_bus
from app.core.logging import get_logger
from app.models.base import ModelMessage
from app.models.router import model_router
from app.tools.executor import tool_executor
from app.tools.permissions import permission_manager
from app.tools.registry import ensure_default_tools_loaded, tool_registry

logger = get_logger(__name__)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _safe_json_loads(value: Any) -> Dict[str, Any]:
    """Best-effort JSON decode for tool-call argument strings."""
    if isinstance(value, dict):
        return value
    if not isinstance(value, str):
        return {}
    try:
        return json.loads(value)
    except Exception:
        # Some models return pseudo-JSON; return a raw-string fallback.
        return {"_raw": value}


def _truncate(text: str, limit: int = 4000) -> str:
    if text is None:
        return ""
    if len(text) <= limit:
        return text
    return text[:limit] + f"\n... [truncated {len(text) - limit} chars]"


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

class AgentRunner:
    """Runs a single agent's reasoning + tool loop."""

    def __init__(self, agent: BaseAgent) -> None:
        self.agent = agent
        ensure_default_tools_loaded()

    async def run(
        self,
        prompt: str,
        task_id: Optional[str] = None,
        context: Optional[Dict[str, Any]] = None,
        max_steps: Optional[int] = None,
        max_retries: Optional[int] = None,
    ) -> AgentResult:
        logger.info("Executing agent '%s' [task_id=%s]", self.agent.name, task_id)

        _max_steps = max_steps or settings.AGENT_MAX_STEPS
        _max_retries = max_retries or settings.AGENT_MAX_RETRIES

        system_message = (
            f"You are {self.agent.name}.\n"
            f"Description: {self.agent.description}\n"
            f"Instructions:\n{self.agent.instructions}\n"
            "When you need information or an action, call one of the provided "
            "tools. Only call a tool if its name is in your allowed tool list. "
            "If you have enough information to answer, respond directly without "
            "any tool calls."
        )

        messages: List[ModelMessage] = [
            ModelMessage(role="system", content=system_message),
            ModelMessage(role="user", content=prompt),
        ]

        tool_calls_log: List[Dict[str, Any]] = []
        total_usage = {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}
        steps_taken = 0

        await event_bus.emit(Event(
            type="agent.started",
            source=self.agent.name,
            payload={"agent": self.agent.name, "task_id": task_id, "prompt": prompt},
        ))

        allowed_tools = tool_registry.filter_for_agent(self.agent.tools)
        tool_specs = [t.to_provider_spec(provider="openai") for t in allowed_tools]

        try:
            while steps_taken < _max_steps:
                steps_taken += 1

                # ----- Retry on transient provider failures
                response = None
                last_err: Optional[Exception] = None
                for attempt in range(_max_retries + 1):
                    try:
                        response = await model_router.generate(
                            messages=messages,
                            task_type=self.agent.type,
                            tools=tool_specs or None,
                        )
                        last_err = None
                        break
                    except Exception as exc:  # transient
                        last_err = exc
                        logger.warning(
                            "Provider call failed (attempt %d/%d): %s",
                            attempt + 1, _max_retries + 1, exc,
                        )
                if response is None:
                    raise last_err or RuntimeError("Model call failed with no response")

                # ----- Accumulate usage
                for k in total_usage:
                    total_usage[k] += response.usage.get(k, 0)

                # ----- No tool calls → final answer
                if not response.tool_calls:
                    await event_bus.emit(Event(
                        type="agent.completed",
                        source=self.agent.name,
                        payload={
                            "agent": self.agent.name,
                            "task_id": task_id,
                            "steps": steps_taken,
                            "output": response.content,
                            "usage": total_usage,
                        },
                    ))
                    return AgentResult(
                        agent_name=self.agent.name,
                        task_id=task_id,
                        status="completed",
                        output=response.content,
                        steps_taken=steps_taken,
                        token_usage=total_usage,
                        tool_calls=tool_calls_log,
                    )

                # ----- Append the assistant turn so the next call sees it
                messages.append(ModelMessage(
                    role="assistant",
                    content=response.content or "",
                    tool_calls=response.tool_calls,
                ))

                approval_needed: List[str] = []

                for tc in response.tool_calls:
                    # OpenAI / Anthropic-compatible tool-call shapes share these keys.
                    call_id = (
                        tc.get("id")
                        or tc.get("tool_call_id")
                        or f"call_{uuid4().hex[:12]}"
                    )
                    fn = tc.get("function") or {}
                    tool_name = fn.get("name") or tc.get("name") or ""
                    raw_args = fn.get("arguments") if fn else tc.get("arguments")
                    args = _safe_json_loads(raw_args)

                    if not tool_name:
                        messages.append(ModelMessage(
                            role="tool",
                            content=json.dumps({"error": "Tool call missing 'name'."}),
                            tool_call_id=call_id,
                        ))
                        continue

                    if tool_name not in {t.name for t in allowed_tools}:
                        # Agent tried to call a tool it isn't allowed to use.
                        messages.append(ModelMessage(
                            role="tool",
                            content=json.dumps({
                                "error": f"Tool '{tool_name}' is not in this agent's tool list.",
                            }),
                            tool_call_id=call_id,
                        ))
                        continue

                    tool_obj = tool_registry.get(tool_name)
                    if not tool_obj:
                        messages.append(ModelMessage(
                            role="tool",
                            content=json.dumps({"error": f"Tool '{tool_name}' not registered."}),
                            tool_call_id=call_id,
                        ))
                        continue

                    allowed, reason = permission_manager.check_permission(
                        tool_obj, args, agent_name=self.agent.name,
                    )

                    if not allowed and permission_manager.requires_approval(tool_obj):
                        from app.security.approval import approval_queue

                        approval_id = await approval_queue.request_approval(
                            action=f"tool:{tool_name}",
                            risk_level=tool_obj.risk_level.value,
                            task_id=task_id,
                            details={"tool": tool_name, "args": args, "reason": reason},
                        )
                        approval_needed.append(approval_id)
                        tool_calls_log.append({
                            "tool": tool_name,
                            "args": args,
                            "status": "needs_approval",
                            "approval_id": approval_id,
                            "timestamp": datetime.now(timezone.utc).isoformat(),
                        })
                        # Surface a synthetic tool result so the loop is well-formed.
                        messages.append(ModelMessage(
                            role="tool",
                            content=json.dumps({
                                "status": "needs_approval",
                                "approval_id": approval_id,
                                "reason": reason,
                            }),
                            tool_call_id=call_id,
                        ))
                        continue

                    if not allowed:
                        tool_calls_log.append({
                            "tool": tool_name,
                            "args": args,
                            "status": "denied",
                            "reason": reason,
                            "timestamp": datetime.now(timezone.utc).isoformat(),
                        })
                        messages.append(ModelMessage(
                            role="tool",
                            content=json.dumps({"status": "denied", "reason": reason}),
                            tool_call_id=call_id,
                        ))
                        continue

                    result = await tool_executor.execute_tool(
                        tool_name=tool_name,
                        kwargs=args,
                        agent_name=self.agent.name,
                    )
                    tool_calls_log.append({
                        "tool": tool_name,
                        "args": args,
                        "status": "completed" if result.success else "failed",
                        "output": _truncate(str(result.output)) if result.success else None,
                        "error": result.error,
                        "duration_ms": result.duration_ms,
                        "timestamp": datetime.now(timezone.utc).isoformat(),
                    })
                    payload = {
                        "success": result.success,
                        "output": (
                            result.output
                            if result.success
                            else (result.error or "Tool execution failed")
                        ),
                    }
                    messages.append(ModelMessage(
                        role="tool",
                        content=_truncate(json.dumps(payload, default=str)),
                        tool_call_id=call_id,
                    ))

                # If any tool call is awaiting human approval, pause the loop.
                if approval_needed:
                    await event_bus.emit(Event(
                        type="agent.awaiting_approval",
                        source=self.agent.name,
                        payload={"task_id": task_id, "approval_ids": approval_needed},
                    ))
                    return AgentResult(
                        agent_name=self.agent.name,
                        task_id=task_id,
                        status="needs_approval",
                        output="",
                        steps_taken=steps_taken,
                        token_usage=total_usage,
                        tool_calls=tool_calls_log,
                        error=f"Pending approval ids: {','.join(approval_needed)}",
                    )

            # Hit max steps
            logger.warning("Agent '%s' hit max_steps=%d", self.agent.name, _max_steps)
            return AgentResult(
                agent_name=self.agent.name,
                task_id=task_id,
                status="failed",
                output="",
                steps_taken=steps_taken,
                token_usage=total_usage,
                tool_calls=tool_calls_log,
                error=f"Agent exceeded max_steps={_max_steps}",
            )

        except Exception as e:
            logger.exception("Agent '%s' execution failed: %s", self.agent.name, e)
            await event_bus.emit(Event(
                type="agent.failed",
                source=self.agent.name,
                payload={"task_id": task_id, "error": str(e)},
            ))
            return AgentResult(
                agent_name=self.agent.name,
                task_id=task_id,
                status="failed",
                output="",
                steps_taken=steps_taken,
                token_usage=total_usage,
                tool_calls=tool_calls_log,
                error=str(e),
            )

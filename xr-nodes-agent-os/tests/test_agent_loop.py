"""Tests for the agent tool-calling loop (Phase A3).

We monkey-patch the model router so the runner drives a deterministic script
of responses — verifying it can:

1. finish cleanly when no tool call is requested;
2. invoke a permitted tool, capture the result, and continue the loop;
3. refuse a tool that isn't in the agent's allowed list;
4. pause on a tool that requires human approval.
"""
from __future__ import annotations

from typing import Any, Dict, List

import pytest

from app.agents.base import AgentSpec, BaseAgent
from app.agents.runner import AgentRunner
from app.models.base import ModelMessage, ModelResponse
from app.models.router import model_router


class _ScriptedProvider:
    """Stand-in for the model router that replays a sequence of ModelResponses."""

    def __init__(self, script: List[ModelResponse]):
        self._script = list(script)
        self.provider_name = "openai"
        self.default_model = "gpt-4o-mini"
        self.calls: List[List[ModelMessage]] = []

    def is_available(self) -> bool:
        return True

    async def generate(self, messages, **_kwargs) -> ModelResponse:
        self.calls.append(list(messages))
        if not self._script:
            raise AssertionError("ScriptedProvider ran out of responses")
        return self._script.pop(0)


def _agent(tools: List[str]) -> BaseAgent:
    return BaseAgent(AgentSpec(
        name="test-agent",
        description="Loop test agent.",
        type="general",
        instructions="Test instructions.",
        capabilities=["test"],
        tools=tools,
    ))


@pytest.mark.asyncio
async def test_agent_finishes_without_tool_call(monkeypatch):
    scripted = _ScriptedProvider([ModelResponse(
        content="hello world",
        model="m", provider="openai",
        usage={"prompt_tokens": 1, "completion_tokens": 2, "total_tokens": 3},
        tool_calls=None,
    )])
    monkeypatch.setattr(model_router, "generate", scripted.generate)

    runner = AgentRunner(_agent(tools=[]))
    result = await runner.run("say hi")

    assert result.status == "completed"
    assert result.output == "hello world"
    assert result.steps_taken == 1
    assert result.tool_calls == []


@pytest.mark.asyncio
async def test_agent_calls_permitted_tool_then_finishes(monkeypatch):
    """Model asks for a tool, runner executes it, then model returns final."""
    scripted = _ScriptedProvider([
        # Step 1: model requests a tool call
        ModelResponse(
            content="",
            model="m", provider="openai",
            usage={"prompt_tokens": 1, "completion_tokens": 1, "total_tokens": 2},
            tool_calls=[{
                "id": "call_1",
                "type": "function",
                "function": {
                    "name": "directory.list",
                    "arguments": '{"path": "."}',
                },
            }],
        ),
        # Step 2: model returns final answer
        ModelResponse(
            content="Listed 3 entries.",
            model="m", provider="openai",
            usage={"prompt_tokens": 2, "completion_tokens": 2, "total_tokens": 4},
            tool_calls=None,
        ),
    ])
    monkeypatch.setattr(model_router, "generate", scripted.generate)

    runner = AgentRunner(_agent(tools=["directory.list"]))
    result = await runner.run("list files")

    assert result.status == "completed"
    assert result.output == "Listed 3 entries."
    assert result.steps_taken == 2
    assert len(result.tool_calls) == 1
    assert result.tool_calls[0]["tool"] == "directory.list"
    assert result.tool_calls[0]["status"] == "completed"

    # Step-2 call must have at least 4 messages: system, user, assistant(tool_call), tool
    assert len(scripted.calls[1]) >= 4
    assert scripted.calls[1][2].role == "assistant"
    assert scripted.calls[1][3].role == "tool"


@pytest.mark.asyncio
async def test_agent_refuses_tool_not_in_allowed_list(monkeypatch):
    scripted = _ScriptedProvider([
        ModelResponse(
            content="",
            model="m", provider="openai",
            usage={"prompt_tokens": 1, "completion_tokens": 1, "total_tokens": 2},
            tool_calls=[{
                "id": "call_x",
                "type": "function",
                "function": {
                    "name": "shell.execute",  # not in agent.tools
                    "arguments": '{"command": "echo hi"}',
                },
            }],
        ),
        ModelResponse(
            content="Sorry, can't do that.",
            model="m", provider="openai",
            usage={"prompt_tokens": 1, "completion_tokens": 2, "total_tokens": 3},
        ),
    ])
    monkeypatch.setattr(model_router, "generate", scripted.generate)

    runner = AgentRunner(_agent(tools=["file.read"]))
    result = await runner.run("run a shell command")

    assert result.status == "completed"
    # The refused tool was appended to history, then the model gave up.
    final_messages = scripted.calls[1]
    tool_msgs = [m for m in final_messages if m.role == "tool"]
    assert tool_msgs
    assert "not in this agent" in tool_msgs[-1].content


@pytest.mark.asyncio
async def test_agent_pauses_on_approval_required(monkeypatch):
    """High-risk tool (shell.execute) without approval must surface needs_approval."""
    scripted = _ScriptedProvider([
        ModelResponse(
            content="",
            model="m", provider="openai",
            usage={"prompt_tokens": 1, "completion_tokens": 1, "total_tokens": 2},
            tool_calls=[{
                "id": "call_sh",
                "type": "function",
                "function": {
                    "name": "shell.execute",
                    "arguments": '{"command": "echo hi"}',
                },
            }],
        ),
    ])
    monkeypatch.setattr(model_router, "generate", scripted.generate)

    runner = AgentRunner(_agent(tools=["shell.execute"]))
    result = await runner.run("run echo")

    assert result.status == "needs_approval"
    assert result.tool_calls[0]["status"] == "needs_approval"
    assert "approval_id" in result.tool_calls[0]
    assert result.tool_calls[0]["approval_id"]


@pytest.mark.asyncio
async def test_agent_recovers_after_transient_provider_failure(monkeypatch):
    """If generate() raises once, the runner retries and eventually succeeds."""

    class FlakyProvider(_ScriptedProvider):
        def __init__(self):
            super().__init__([
                ModelResponse(
                    content="ok after retry",
                    model="m", provider="openai",
                    usage={"prompt_tokens": 1, "completion_tokens": 2, "total_tokens": 3},
                ),
            ])
            self.failures = 0

        async def generate(self, messages, **_):
            if self.failures < 1:
                self.failures += 1
                raise RuntimeError("transient network error")
            return await super().generate(messages)

    scripted = FlakyProvider()
    monkeypatch.setattr(model_router, "generate", scripted.generate)

    runner = AgentRunner(_agent(tools=[]))
    result = await runner.run("hello", max_retries=2)

    assert result.status == "completed"
    assert result.output == "ok after retry"
    assert scripted.failures == 1

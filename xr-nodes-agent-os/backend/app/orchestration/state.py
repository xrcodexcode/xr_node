"""Task State Machine transitions and validations."""
from __future__ import annotations

from enum import Enum
from typing import Set


class TaskStatus(str, Enum):
    CREATED = "created"
    PLANNING = "planning"
    READY = "ready"
    RUNNING = "running"
    WAITING = "waiting"
    VERIFYING = "verifying"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


VALID_TRANSITIONS: dict[TaskStatus, Set[TaskStatus]] = {
    TaskStatus.CREATED: {TaskStatus.PLANNING, TaskStatus.CANCELLED},
    TaskStatus.PLANNING: {TaskStatus.READY, TaskStatus.FAILED, TaskStatus.CANCELLED},
    TaskStatus.READY: {TaskStatus.RUNNING, TaskStatus.CANCELLED},
    TaskStatus.RUNNING: {TaskStatus.WAITING, TaskStatus.VERIFYING, TaskStatus.FAILED, TaskStatus.CANCELLED},
    TaskStatus.WAITING: {TaskStatus.RUNNING, TaskStatus.FAILED, TaskStatus.CANCELLED},
    TaskStatus.VERIFYING: {TaskStatus.COMPLETED, TaskStatus.RUNNING, TaskStatus.FAILED, TaskStatus.CANCELLED},
    TaskStatus.COMPLETED: set(),
    TaskStatus.FAILED: {TaskStatus.RUNNING, TaskStatus.CANCELLED},  # Allow retry
    TaskStatus.CANCELLED: set(),
}


def can_transition(current: TaskStatus, target: TaskStatus) -> bool:
    """Validate whether state transition is allowed."""
    return target in VALID_TRANSITIONS.get(current, set())

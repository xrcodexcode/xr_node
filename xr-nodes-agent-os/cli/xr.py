"""XR-NODES Agent OS CLI — Command-line interface.

Usage:
    xr status       Show system status
    xr serve        Start the API server
    xr init         Initialize the database
    xr agents       List registered agents
    xr doctor       Run system diagnostics
"""
from __future__ import annotations

import asyncio
import sys
from pathlib import Path

import click
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

# Ensure backend is on sys.path
_project_root = Path(__file__).resolve().parents[1]
_backend_dir = _project_root / "backend"
if str(_backend_dir) not in sys.path:
    sys.path.insert(0, str(_backend_dir))

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

console = Console()



def _run_async(coro):
    """Run an async function from sync context."""
    return asyncio.run(coro)


@click.group()
@click.version_option(version="0.1.0", prog_name="xr")
def cli():
    """XR-NODES Agent OS — AI-native operating layer for personal knowledge management."""
    pass


@cli.group()
def task():
    """Task management and orchestration commands."""
    pass


@task.command("create")
@click.argument("title")
@click.option("--description", "-d", default=None, help="Task description")
def task_create(title, description):
    """Create a new task."""
    async def _create():
        from app.core.logging import setup_logging
        from app.orchestration.orchestrator import orchestrator
        setup_logging(level="WARNING")
        res = await orchestrator.create_task(title=title, description=description)
        console.print(f"\n[green]✅ Created task:[/green] [bold]{res['title']}[/bold] (ID: {res['task_id']})\n")

    _run_async(_create())


@task.command("list")
def task_list():
    """List all tasks."""
    async def _list():
        from app.core.logging import setup_logging
        from app.database.engine import async_session_factory, engine
        from app.database.models import Base, Task
        from sqlalchemy import select

        setup_logging(level="WARNING")
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

        async with async_session_factory() as session:
            result = await session.execute(select(Task).order_by(Task.created_at.desc()))
            tasks = result.scalars().all()

        if not tasks:
            console.print("\n[yellow]No tasks found.[/yellow]\n")
            return

        table = Table(title="\n📋 Tasks", border_style="cyan")
        table.add_column("Task ID", style="dim")
        table.add_column("Title", style="bold cyan")
        table.add_column("Status")
        table.add_column("Created At", style="dim")

        for t in tasks:
            table.add_row(t.id[:8] + "...", t.title, t.status, str(t.created_at)[:19] if t.created_at else "")

        console.print(table)
        console.print()

    _run_async(_list())


@task.command("run")
@click.argument("task_id")
def task_run(task_id):
    """Execute a task end-to-end via orchestrator."""
    async def _run():
        from app.core.logging import setup_logging
        from app.orchestration.orchestrator import orchestrator
        setup_logging(level="INFO")
        console.print(f"\n[bold cyan]Executing Task ID: {task_id}[/bold cyan]\n")
        res = await orchestrator.run_task(task_id)
        if "error" in res:
            console.print(f"\n[red]❌ Execution failed:[/red] {res['error']}\n")
        else:
            console.print(f"\n[green]✅ Task Completed![/green] Status: {res['status']}, Steps: {res['steps_completed']}\n")

    _run_async(_run())



@cli.command()
def status():
    """Show system status."""
    async def _status():
        from app.core.config import settings
        from app.core.logging import setup_logging
        from app.database.engine import async_session_factory, engine
        from app.database.models import Base, Agent, Task, EventLog
        from sqlalchemy import select, func, text

        setup_logging(level="WARNING")  # Quiet for CLI

        console.print()
        console.print(
            Panel.fit(
                f"[bold cyan]XR-NODES Agent OS[/bold cyan]  v{settings.VERSION}",
                border_style="cyan",
            )
        )
        console.print()

        # Vault info
        vault_table = Table(title="📁 Vault", show_header=False, border_style="dim")
        vault_table.add_column("Key", style="bold")
        vault_table.add_column("Value")

        vault_ok = settings.VAULT_PATH.exists()
        vault_table.add_row("Path", str(settings.VAULT_PATH))
        vault_table.add_row("Connected", "✅ Yes" if vault_ok else "❌ No")

        if vault_ok:
            nodes_count = len(list(settings.vault_nodes.glob("*.md"))) if settings.vault_nodes.exists() else 0
            mocs_count = len(list(settings.vault_mocs.glob("*.md"))) if settings.vault_mocs.exists() else 0
            notes_count = len(list(settings.vault_notes.glob("*.md"))) if settings.vault_notes.exists() else 0
            vault_table.add_row("Nodes", str(nodes_count))
            vault_table.add_row("MOCs", str(mocs_count))
            vault_table.add_row("Notes", str(notes_count))

        console.print(vault_table)
        console.print()

        # Database info
        db_table = Table(title="🗄️  Database", show_header=False, border_style="dim")
        db_table.add_column("Key", style="bold")
        db_table.add_column("Value")

        db_ok = False
        agents_count = 0
        tasks_count = 0
        events_count = 0

        try:
            # Ensure tables exist
            async with engine.begin() as conn:
                await conn.run_sync(Base.metadata.create_all)

            async with async_session_factory() as session:
                await session.execute(text("SELECT 1"))
                db_ok = True

                result = await session.execute(select(func.count()).select_from(Agent))
                agents_count = result.scalar_one()

                result = await session.execute(select(func.count()).select_from(Task))
                tasks_count = result.scalar_one()

                result = await session.execute(select(func.count()).select_from(EventLog))
                events_count = result.scalar_one()
        except Exception as e:
            db_table.add_row("Error", str(e))

        db_table.add_row("Connected", "✅ Yes" if db_ok else "❌ No")
        db_table.add_row("Agents", str(agents_count))
        db_table.add_row("Tasks", str(tasks_count))
        db_table.add_row("Events", str(events_count))

        console.print(db_table)
        console.print()

        # Server info
        srv_table = Table(title="🌐 Server", show_header=False, border_style="dim")
        srv_table.add_column("Key", style="bold")
        srv_table.add_column("Value")
        srv_table.add_row("Host", settings.HOST)
        srv_table.add_row("Port", str(settings.PORT))
        srv_table.add_row("Environment", settings.ENVIRONMENT)
        srv_table.add_row("API Docs", f"http://{settings.HOST}:{settings.PORT}/docs")
        console.print(srv_table)
        console.print()

    _run_async(_status())


@cli.command()
@click.option("--host", default=None, help="Bind host")
@click.option("--port", default=None, type=int, help="Bind port")
@click.option("--reload", is_flag=True, help="Enable auto-reload")
def serve(host, port, reload):
    """Start the API server."""
    import uvicorn
    from app.core.config import settings

    _host = host or settings.HOST
    _port = port or settings.PORT

    console.print(
        f"\n[bold cyan]Starting XR-NODES Agent OS[/bold cyan] on http://{_host}:{_port}\n"
    )

    uvicorn.run(
        "app.main:app",
        host=_host,
        port=_port,
        reload=reload,
        log_level="info",
        app_dir=str(_backend_dir),
    )


@cli.command()
def init():
    """Initialize the database."""
    async def _init():
        from app.core.logging import setup_logging
        setup_logging(level="INFO")

        from app.database.migrations import initialize_database
        console.print("\n[bold]Initializing XR-NODES Agent OS database...[/bold]\n")
        await initialize_database()
        console.print("[green]✅ Database initialized successfully.[/green]\n")

    _run_async(_init())


@cli.command()
def agents():
    """List registered agents."""
    async def _agents():
        from app.core.logging import setup_logging
        from app.database.engine import async_session_factory, engine
        from app.database.models import Base, Agent
        from sqlalchemy import select

        setup_logging(level="WARNING")

        # Ensure tables exist
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)

        async with async_session_factory() as session:
            result = await session.execute(select(Agent).order_by(Agent.name))
            agents_list = result.scalars().all()

        if not agents_list:
            console.print("\n[yellow]No agents registered. Run 'xr init' first.[/yellow]\n")
            return

        table = Table(title="\n🤖 Registered Agents", border_style="cyan")
        table.add_column("Name", style="bold cyan")
        table.add_column("Type", style="dim")
        table.add_column("Status")
        table.add_column("Description", max_width=60)

        for agent in agents_list:
            status_icon = "✅" if agent.status == "active" else "⏸️"
            table.add_row(
                agent.name,
                agent.type,
                f"{status_icon} {agent.status}",
                (agent.description or "")[:60],
            )

        console.print(table)
        console.print()

    _run_async(_agents())


@cli.command()
def doctor():
    """Run system diagnostics."""
    console.print("\n[bold]XR-NODES Agent OS — System Diagnostics[/bold]\n")

    checks = []

    # Python version
    import platform
    py_ver = platform.python_version()
    py_ok = sys.version_info >= (3, 11)
    checks.append(("Python >= 3.11", py_ok, py_ver))

    # Vault path
    from app.core.config import settings
    vault_ok = settings.VAULT_PATH.exists()
    checks.append(("Vault path exists", vault_ok, str(settings.VAULT_PATH)))

    # NODES directory
    nodes_ok = settings.vault_nodes.exists()
    checks.append(("NODES/ directory", nodes_ok, str(settings.vault_nodes)))

    # MOCs directory
    mocs_ok = settings.vault_mocs.exists()
    checks.append(("03_MOC/ directory", mocs_ok, str(settings.vault_mocs)))

    # Database file
    db_path = settings.DATABASE_URL.replace("sqlite+aiosqlite:///", "")
    db_dir_ok = Path(db_path).parent.exists()
    checks.append(("Database directory", db_dir_ok, str(Path(db_path).parent)))

    # Config file
    config_ok = (settings.project_root / "config" / "default.yaml").exists()
    checks.append(("Config file", config_ok, "config/default.yaml"))

    # Dependencies
    dep_checks = [
        ("fastapi", "fastapi"),
        ("uvicorn", "uvicorn"),
        ("sqlalchemy", "sqlalchemy"),
        ("pydantic", "pydantic"),
        ("click", "click"),
        ("rich", "rich"),
        ("yaml", "yaml"),
        ("aiosqlite", "aiosqlite"),
    ]
    for display_name, module_name in dep_checks:
        try:
            __import__(module_name)
            checks.append((f"Package: {display_name}", True, "✅"))
        except ImportError:
            checks.append((f"Package: {display_name}", False, "❌ Missing"))

    # Print results
    table = Table(border_style="dim")
    table.add_column("Check", style="bold")
    table.add_column("Status")
    table.add_column("Details", style="dim")

    passed = 0
    failed = 0
    for name, ok, detail in checks:
        if ok:
            table.add_row(name, "[green]✅ PASS[/green]", detail)
            passed += 1
        else:
            table.add_row(name, "[red]❌ FAIL[/red]", detail)
            failed += 1

    console.print(table)
    console.print(f"\n[bold]Results:[/bold] {passed} passed, {failed} failed\n")

    if failed > 0:
        console.print("[yellow]Run 'pip install -e .[dev]' to install missing dependencies.[/yellow]\n")


if __name__ == "__main__":
    cli()

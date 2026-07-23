---
description: "Install and use the Canoryn CLI and MCP server — workflows, chat, actions, workers, and coding-agent setup."
---

# CLI & MCP

[[appName]] is not only a canvas app. The same workflows, chats, and actions are available from the **command line** and from other AI tools (Codex, Claude, Cursor, and similar) through **MCP**.

The Mac app still owns permissions, consent, and the engine. The `canoryn` helper talks to the running app securely on your user account (and can launch the app when needed).

> [!TIP]
> After installing, run `canoryn --help` anytime. Subcommand detail (`canoryn help workflow`, etc.) needs [[appName]] available so the helper can talk to the app.

## Install from Settings

1. Open [[appName]] **Settings**.
2. Open the **CLI & MCP** section.
3. Install the `canoryn` command-line tool when prompted.
4. Open a **new** Terminal window and verify:

```bash
canoryn --version
canoryn --help
```

[[appName]] places `canoryn` on your PATH (typically `/opt/homebrew/bin` or `/usr/local/bin`). If macOS asks for administrator permission, follow the exact Terminal command shown in Settings.

Use the diagnostics in the same Settings section to confirm the local connection looks healthy.

## What `canoryn --help` covers

From the installed helper:

```text
ask <prompt>                         Run the Canoryn agent loop
workflow list|inspect|validate|run  Discover and execute workflows
workflow runs [reference]           List recent runs
run status|logs|cancel <run-id>      Manage a run
action list|inspect|run              Discover and execute actions
chat list|new|inspect|history          Discover and manage persistent chats
chat send|cancel|rename|delete         Continue persistent chats from the shell
events --follow [--topic topic]      Follow the local event bus
worker list|prune|deliver            Inspect, prune, or message workers
open [reference]                     Open Canoryn or a workflow canvas
repl                                 Start an interactive session
mcp serve                            Serve Canoryn tools over MCP stdio
completion zsh|bash|fish             Print static shell completion
```

Globals you’ll see often:

| Flag | Meaning |
| :--- | :------ |
| `--json` | Machine-readable result on stdout (good for scripts and agents) |
| `--input key=value` | Canonical inputs (bare `key=value` also accepted) |
| `--launch auto\|never` | Whether the helper may start the app if it isn’t running |
| bare `--launch` | Open the in-app approval surface when consent is required — never auto-approves |

## Workflows

Everyday loop:

```bash
canoryn workflow list
canoryn workflow inspect "My Workflow"
canoryn workflow validate "My Workflow"
canoryn workflow enable "My Workflow"
canoryn workflow run "My Workflow"
canoryn workflow runs
```

After `workflow list`, you can usually use a **name** or a **short ID** when it’s unambiguous (not only the full UUID).

Full workflow surface (also in shell completion):

| Command | Use it to |
| :------ | :-------- |
| `workflow list` | See workflows and whether they’re enabled / runnable |
| `workflow inspect <ref>` | Triggers, inputs, outputs, lifecycle |
| `workflow validate <ref>` | Check the graph before enabling or sharing |
| `workflow capabilities [keyword]` | What steps you can drop on a graph |
| `workflow compile …` | Build a `.cryn` from a source file / stdin (DSL or YAML) |
| `workflow doctor <file>` | Check a `.cryn` / `.crynpack` before import |
| `workflow import` / `pack` | Bring packages in or package a workflow out |
| `workflow enable` / `disable` | Publish or pull back for CLI / schedule / MCP runs |
| `workflow run <ref>` | Execute (needs **enabled** + active for external runs) |
| `workflow runs [ref]` | Recent run history |

Run options you’ll use often:

```bash
canoryn workflow run "My Workflow" --trigger start --input key=value --json
canoryn workflow run "My Workflow" --dry-run
canoryn workflow run "My Workflow" --timeout 120
```

Then follow a run:

```bash
canoryn run status <run-id>
canoryn run logs <run-id> --follow
canoryn run cancel <run-id>
```

> [!IMPORTANT]
> **Enable** the workflow in the Architect (or via `workflow enable`) before expecting schedule / CLI / MCP runs to succeed. **Play** on the canvas still works while drafting. See [Architect Copilot → Enable vs Play](/guide/architect-copilot#enable-vs-play).

## Ask, chat, and actions

One-shot agent loop (like chatting for a quick task):

```bash
canoryn ask "summarize what's on my calendar today"
```

Persistent chat (same sessions you see in the app):

```bash
canoryn chat list
canoryn chat new --title "Release review"
canoryn chat send <session-ref> "Review this plan"
canoryn chat send <session-ref> --stdin --file ./notes.md
canoryn chat history <session-ref>
canoryn chat cancel <session-ref>
canoryn chat rename <session-ref> "New title"
canoryn chat delete <session-ref> --yes
```

Discover and run individual actions (gated by consent when required) — including **canvas / architect** verbs such as `canvas.inspect`, `canvas.patch`, `canvas.add_node`, `workflow.create_draft`, and `workflow.compile`:

```bash
canoryn action list
canoryn action list --domain architect
canoryn action inspect canvas.patch
canoryn action run canvas.inspect --input graph_id=<ref> --json
canoryn action run system.get_time --json
```

External agents use this CLI path **or** MCP (below). Both hit the same actions in the running app — so they can inspect and edit the live canvas, not only run finished workflows.

## Workers, events, open, REPL

Hand an exact message to a desktop coding worker (Codex, Claude, Cursor, Antigravity, … when configured):

```bash
canoryn worker list
canoryn worker deliver --target codex --message "Implement the failing test" --submit
```

Watch the local event bus:

```bash
canoryn events --follow
canoryn events --follow --topic runs
```

Open the app or a workflow canvas, or drop into an interactive shell:

```bash
canoryn open
canoryn open "My Workflow"
canoryn repl
```

Shell completion (static command names only — never session titles):

```bash
canoryn completion zsh   # or bash | fish
```

## MCP — use [[appName]] from other agents

```bash
canoryn mcp serve
```

Point your MCP client at that stdio command. Prefer the **absolute path** to `canoryn` if the client does not inherit your shell PATH. For clients that should not relaunch the app themselves:

```bash
canoryn mcp serve --launch never
```

### Example client config

```json
{
  "mcpServers": {
    "canoryn": {
      "command": "/opt/homebrew/bin/canoryn",
      "args": ["mcp", "serve", "--launch", "never"]
    }
  }
}
```

Codex (when using its CLI):

```bash
codex mcp add canoryn -- "$(command -v canoryn)" mcp serve --launch never
codex mcp get canoryn
```

Keep [[appName]] running, start a **new** agent task so it discovers tools, and use Settings → **CLI & MCP** diagnostics if the connection looks stale.

### What MCP exposes

**Always available curated tools:**

| Tool | Purpose |
| :--- | :------ |
| `list_workflows` | List workflows (id, shortId, enabled, lifecycle) |
| `inspect_workflow` | Run contract + lifecycle for a reference |
| `run_workflow` | Run an **enabled** workflow (Play on canvas does not need this gate) |
| `deliver_to_worker` | Send an exact message to a desktop worker |

**Plus dynamic tools:** every live [[appName]] **action** is reflected as an MCP tool (names use underscores, e.g. `canvas_patch` for `canvas.patch`). That is the same canvas / architect / system / browser surface as `canoryn action run …` — so MCP clients can author and edit graphs the same way the CLI does, without hand-editing project files.

Consent still applies. Routine auto-allow in Settings never silently bypasses **Enable**, and irreversible actions still ask in the app.

## Canvas steps that dispatch coding agents

Workflows can include a step that **hands work to** Codex, Claude, Cursor, or Antigravity on a repo, then continues from the result. Build that on the canvas, in **Chat**, or via the [Architect Copilot](/guide/architect-copilot); run it with **Play** or via CLI/MCP once **Enabled**.

## Consent and exit codes

- There is **no force flag** in the CLI.
- If approval is required, [[appName]] shows Allow / Deny in the app. Use bare `--launch` to jump to that surface, or `--wait-consent <seconds>` when you want the command to wait for a decision.
- Prefer **enabled workflows** for unattended automation; raw one-off `action run` stays gated.

Useful exit codes (`canoryn help exit-codes` when the app can answer):

| Code | Meaning |
| :--- | :------ |
| `0` | Success |
| `1` | Workflow / node failure |
| `2` | Invalid command or input |
| `3` | Consent required |
| `4` | Workflow / run not found |
| `5` | Workflow disabled / inactive |
| `6` | Validation failure |
| `7` | App not running (`--launch never`) |
| `124` | Timeout |
| `130` | Cancelled (Ctrl-C) |

## Related

- [Architect Copilot](/guide/architect-copilot)
- [Research boards](/guide/research-boards)
- [Permissions](/guide/permissions)

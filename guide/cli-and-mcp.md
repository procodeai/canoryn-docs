---
description: "Install the Canoryn CLI and MCP connection so terminals and coding agents can list, edit, enable, and run your workflows."
---

# CLI & MCP

[[appName]] is not only a canvas app. The same workflows can be listed, inspected, enabled, and run from the **command line** or from other AI tools (Codex, Claude, Cursor, and similar) through **MCP**.

The Mac app still owns permissions, consent, and the engine. The CLI/MCP helpers talk to the running app securely on your user account.

## Install from Settings

1. Open [[appName]] **Settings**.
2. Open the **CLI & MCP** section (install / diagnose the command-line connection).
3. Install the `canoryn` command-line tool when prompted.

[[appName]] places a `canoryn` command on your PATH (typically under `/opt/homebrew/bin` or `/usr/local/bin`). If macOS asks for administrator permission, follow the exact Terminal command shown in Settings.

Keep [[appName]] installed and available — the helper launches the app when needed.

## Everyday CLI commands

With the app able to run:

```bash
canoryn workflow list
canoryn workflow inspect "My Workflow"
canoryn workflow run "My Workflow"
```

Workflows also have **short readable IDs** (not only full UUIDs). After `workflow list`, you can use a short handle when it’s unambiguous.

Useful companions:

```bash
canoryn workflow validate "My Workflow"
canoryn action list
canoryn help
```

> [!IMPORTANT]
> **Enable** the workflow in the Architect before expecting schedule / CLI / agent runs to succeed. **Play** on the canvas still works while drafting. See [Architect Copilot](/guide/architect-copilot#enable-vs-play).

## MCP — other agents author and run workflows

```bash
canoryn mcp serve
```

Point your MCP-capable client at that command (stdio). Typical capabilities include listing, inspecting, and running workflows, plus delivering work to coding agents when configured.

Example client shape:

```json
{
  "mcpServers": {
    "canoryn": {
      "command": "canoryn",
      "args": ["mcp", "serve"]
    }
  }
}
```

Use the absolute path to `canoryn` if your client does not inherit your shell PATH.

External agents can **create, inspect, edit, enable, and run** workflows through this connection — without hand-editing project files. Consent still applies: routine auto-allow (if you enable it in Settings) never silently bypasses **Enable**, and irreversible actions still ask.

## Canvas steps that dispatch coding agents

Workflows can include a step that **hands work to** Codex, Claude, Cursor, or Antigravity on a repo, then continues from the result. Build that on the canvas (or ask the [Architect Copilot](/guide/architect-copilot)); run it with **Play** or via CLI/MCP once **Enabled**.

## Consent and safety (short)

- There is no “force” flag in the CLI.
- If approval is required, [[appName]] surfaces it in the app — complete Allow / Deny there.
- Prefer **enabled workflows** for unattended automation; raw one-off actions stay gated.

## Related

- [Architect Copilot](/guide/architect-copilot)
- [Research boards](/guide/research-boards)
- [Permissions](/guide/permissions)

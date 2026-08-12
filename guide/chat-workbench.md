---
description: "Attach a project to Chat, review files and diffs beside the conversation, and keep terminal or browser tabs open while the agent works."
---

# Chat workbench

From **0.3.0**, main **Chat** can become a project-aware workbench: attach folders to the session, open files and reviews in a typed right pane, and keep terminal or browser tabs alive while you talk to the agent.

This is **review-first**. It sits beside chat — it is not meant to replace Xcode, Cursor, or VS Code as a full editor.

## Attach a project

1. Open **Chat**.
2. Attach one or more project folders to the session (the project picker on that chat).
3. The agent and the right pane share that project context — paths and reviews resolve against the folders you chose.

Without a project, chat still works for general tasks; coding review and file tabs expect a project.

## Right-pane tabs

Use **+** (or the strip) to open typed tabs:

| Tab | What it’s for |
| :-- | :------------ |
| **File** | Read project files with a tree, git badges, and syntax highlighting |
| **Review** | Whole-root or per-file diffs; staged/unstaged; guarded Source Control actions |
| **Terminal** | A live shell tied to the session (switching tabs keeps it running) |
| **Browser** | A browser session in the pane (cookies can share a profile; the view does not share a page with canvas nodes) |
| **Console** / **Artifacts** | Run output and durable artifacts from the turn |

Closing a tab cleans it up. Switching away should keep terminal and browser sessions mounted.

## Working with the agent

- When the agent touches a project file, it can open as a **preview tab** so you can inspect the change without leaving chat.
- Select lines in the code view and send them into chat as a **citation** (root-qualified path + snippet).
- Reviewed patches can be applied atomically after you approve them — the agent should not silently rewrite the tree.

## Same surfaces on the canvas

Code and diff views can also appear as **Architect** canvas nodes. The idea is one surface, two hosts: pane and canvas show the same kind of review UI.

## Related

- [Build with chat](/guide/build-with-chat) — chat docked beside a live workflow canvas
- [Workflows](/guide/workflows) — reusable `.cryn` automations
- [CLI & MCP](/guide/cli-and-mcp) — drive workflows from other tools
- [Permissions](/guide/permissions) — consent and what the agent may touch

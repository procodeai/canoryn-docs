---
description: "The agent core (preview): a newer agent loop for coding sessions that checks every edit, shares one language server with the editor, reviews plans with you first, and needs evidence to close a to-do. Off by default."
---

# Agent core (preview)

The agent core is a newer loop for coding sessions in chat. It is a **preview in 0.6.0** and off by default; chat keeps the current loop unless you turn it on.

```bash
canoryn agent core on      # route chat turns through the agent core
canoryn agent core status
canoryn agent core off
```

## What it does differently

- **It checks its own edits.** Every file it writes is parsed before its turn ends; if the edit broke the file, the agent sees the error and fixes it rather than reporting "done".
- **One language server.** The agent uses the same language servers as the [code editor](/guide/language-servers), so you and the agent see the same diagnostics.
- **Plans first.** For larger work it writes a plan you review and approve before it changes anything.
- **To-dos that need evidence.** It cannot mark a step done without showing what proves it.
- **Skills.** It loads instructions from `SKILL.md` packages in `.agent/skills` or `.claude/skills` of your project, and ships with a `documents` skill that teaches it the Markdown Canoryn renders — callouts, diagrams, properties, toggles, columns, templates.

It uses your selected model and the same permissions as chat: anything that needs consent still asks.

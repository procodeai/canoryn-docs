---
description: "Build and edit Canoryn workflows by chatting next to the Architect canvas — clarifications, surgical edits, and enable vs Play."
---

# Architect Copilot

The **Architect Copilot** lets you describe a workflow in chat next to the canvas. [[appName]] builds and edits the graph for you — instead of running the underlying task immediately.

Use it when you want to **design** automation (“build a workflow that…”), not when you want a one-off action right now.

## Open the Copilot

1. Open the **Architect** (Window → Architect, or your usual shortcut).
2. Open or create the workflow you want to work on.
3. Use the **Copilot / chat** panel next to the canvas.
4. Describe what the workflow should do.

Example prompts:

```text
Build a workflow that, every weekday at 9am, summarizes my calendar and speaks a short brief.
```

```text
Add a step that opens Safari to the project board after the AI finishes.
```

```text
Change the voice trigger phrase to "start focus mode" without rebuilding the rest.
```

Press **⌘↩** to submit (see [Controls & Shortcuts](/architect/controls)).

## What you’ll see

- **Nodes appear on the canvas** as the Copilot works — incrementally, so you can watch and steer.
- **Clarification cards** when something is unclear (location, schedule, missing tool). Pick a choice; don’t leave the Copilot guessing.
- **Surgical edits** — change one setting, swap a step, add or remove a node, or reconnect wires while keeping the rest of the workflow intact.
- **Browse available steps** — ask what’s possible, or explore the live list of steps (with inputs/outputs) before inventing something new.

> [!TIP]
> Phrasing matters. “**Build a workflow** that plays focus music when I open Xcode” designs a graph. “Play focus music” may run music now. Everyday shortcuts no longer fire the underlying action when you asked to design.

## Enable vs Play

| Control | Meaning |
| :------ | :------ |
| **Play** | Run this workflow **now** on the canvas while drafting. Works even for schedule / app-event triggers so you can test. |
| **Enable** | Publish the workflow so **scheduled runs, CLI, and external agents** can use it. Enable still asks for consent when required. |

Drafting on the canvas does not require Enable. Turning a workflow **on** is what makes it available outside the Architect.

## Custom tools

If the Copilot needs a capability that isn’t built in yet, [[appName]] may propose a **custom script tool**:

1. You see the **full source** before approving.
2. After you approve, it appears as a **normal canvas step**.
3. The source stays visible in the inspector so you’re never trusting a black box.

## Tips

- Prefer short, concrete goals (“when X happens, do Y, then Z”).
- If the Copilot asks a question, answer it in the card — that keeps the graph honest.
- After a build, use **Play** once, then **Enable** when you’re ready for schedules or external agents.
- You can still wire nodes by hand — Copilot and the palette work together. See [Quick Start](/guide/quickstart) for a manual walkthrough.

## Related

- [Research boards](/guide/research-boards) — live comparison workspaces that run as real workflows
- [CLI & MCP](/guide/cli-and-mcp) — let other AI tools author and run the same workflows
- [Architect Overview](/architect/overview)

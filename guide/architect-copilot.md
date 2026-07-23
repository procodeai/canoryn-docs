---
description: "Docked Architect chat linked to the live canvas — also covered: main Chat can build workflows too, clarifications, enable vs Play."
---

# Architect Copilot

The **Architect Copilot** is the chat docked in the Architect — always linked to the open canvas. You describe what to build or edit; [[appName]] changes the graph.

**Chat** (the main chat elsewhere in the app) can also build workflows, open boards, and work with the canvas. Use Copilot when you want that conversation **beside the live graph** you’re editing. Use Chat when you’re already chatting and want a workflow or board without switching sidebars first.

Prefer design phrasing (“build a workflow that…”) when you want a graph — not a one-off action right now.


## Where it is

In the Architect window toolbar (top left, next to Home), use the **two-button switch**:

| Control | Icon | Opens |
| :------ | :--- | :---- |
| Projects / files | Grid | **Projects sidebar** — your workflow file tree |
| **Architect Copilot** | Sparkles | Copilot chat — header reads *Linked persistent Chat · live canvas* |

The Copilot replaces the left sidebar content while that mode is selected. The canvas stays in the center; the **Inspector** stays on the right for the selected node.

## Open the Copilot

1. Open the **Architect** (Window → Architect, or your usual shortcut).
2. Open or create the workflow you want to work on.
3. In the top toolbar, click the **sparkles** control (**Architect Copilot**).
4. Describe what the workflow should do in the chat.

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
- You can still wire nodes by hand — Copilot, Chat, and the palette work together. See [Quick Start](/guide/quickstart) for a manual walkthrough.

## Related

- [Research boards](/guide/research-boards) — live comparison workspaces that run as real workflows
- [CLI & MCP](/guide/cli-and-mcp) — let other AI tools author and run the same workflows
- [Architect Overview](/architect/overview)

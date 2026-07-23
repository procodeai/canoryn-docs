---
description: "Canoryn Architect — a visual builder for composing your own AI agent workflows from trigger, intelligence, and native app nodes."
---

# Architect Overview

The **Architect** is [[appName]]'s visual programming environment — an infinite canvas where you design agent behaviors by connecting nodes with wires.

Think of it as a visual script: instead of writing code line by line, you connect building blocks together to describe _what_ your agent should do and _when_.

You can also **describe the workflow in chat** — from the [Architect Copilot](/guide/architect-copilot) (sparkles in the top toolbar) or from main **Chat**. Both can build and edit the graph. Copilot keeps the conversation beside the canvas you’re on. Manual wiring and chat authoring work together.

## The Workspace

The Architect is split into main panels:

| Panel | Location | Purpose |
| :---- | :------- | :------ |
| **Projects sidebar** | Left (grid mode) | Open and organize workflows (`.cryn`) in your workspace |
| **Architect Copilot** | Left (sparkles mode) | Chat linked to this canvas — build and edit the graph |
| **Canvas** | Center | Build the graph: nodes, wires, live surfaces |
| **Inspector** | Right | Configure the selected node |

Switch **Projects** ↔ **Copilot** with the grid / sparkles control in the Architect toolbar (top left). Details: [Architect Copilot](/guide/architect-copilot#where-it-is).


> [!TIP]
> Press `Cmd + .` to toggle **Focus Mode**, which hides both sidebars for a distraction-free canvas.

## Core Building Blocks

### Nodes

Nodes are Visual blocks that represent a single action or decision. Every node has:

- **Input Ports** (left side): Receive execution flow or data.
- **Output Ports** (right side): Send execution flow or data.
- **Properties**: Configurable settings edited in the **Inspector** (right).

There are **5 categories** of nodes:

| Category    | Color     | Purpose                 | Examples                                   |
| :---------- | :-------- | :---------------------- | :----------------------------------------- |
| **Trigger** | 🟡 Yellow | Start execution         | On Start, Voice Command, Schedule, Webhook |
| **Logic**   | 🟣 Purple | AI and control flow     | Simple AI, OpenAI, If/Else, For Each       |
| **Action**  | Various   | Interact with the world | Speak, Play Music, Open URL                |
| **Memory**  | 🟢 Green  | Store and recall data   | Recall Memories, Set Variable              |
| **Utility** | 🔘 Gray   | Transform and inspect   | Prompt Builder, JSON Parser, Result Viewer |

### Wires

Wires are the connections between nodes. There are two fundamental types:

- **Flow Wires** (White): Control the _order_ of execution. "Do this, _then_ do that."
- **Data Wires** (Colored): Pass _values_ between nodes. "Use this text as the prompt."

### Groups

Groups are visual containers that help organize related nodes. Select nodes and press `Cmd + G` to group them.

## How Execution Works

1.  Every agent starts from a **Trigger** node (e.g., "On Start").
2.  Execution follows **Flow Wires** (white) from output to input.
3.  When a node executes, it reads its **Data Wires** for input values.
4.  The node processes and passes its results downstream.

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│ On Start │────▶│ Simple AI│────▶│  Speak   │
│ (Trigger)│flow │ (Logic)  │flow │ (Action) │
└──────────┘     └──────────┘     └──────────┘
                      │ data
                 "Summarize the
                  latest news"
```

---

## Enable vs Play

- **Play** — run the graph now while drafting (including scheduled / event-triggered graphs for testing).
- **Enable** — publish so schedules, CLI, and external agents can run it.

Details: [Architect Copilot → Enable vs Play](/guide/architect-copilot#enable-vs-play).

---

**Next**: [Projects Sidebar & Inspector](/architect/sidebar_inspector) · [Architect Copilot](/guide/architect-copilot) · [Browser Nodes](/guide/browser-nodes) · [Canvas & Interactions](/architect/canvas_details) · [Node Reference](/architect/reference/core_nodes).

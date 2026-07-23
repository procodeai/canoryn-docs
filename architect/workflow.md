---
description: "Build an end-to-end workflow in Canoryn Architect, from trigger to action."
---

# Workflow & Agent Management

Learn how to create, organize, and manage your agents in [[appName]].

## Creating workflows

1.  **Projects sidebar**: Click the **`+` (New)** button in the header.
2.  **Context Menu**: Right-click on any folder and select **New Agent** / new workflow.
3.  **From Library**: Drag an item from **My Library** into **My Projects** to create an editable copy.

## Organization

### Folders & Hierarchy

Keep your workspace clean with nested folders:

1.  Click the **New Folder** icon in the Projects sidebar header to create a root folder.
2.  **Drag and Drop** workflows into folders to organize them.
3.  **Rename**: Select a folder or item and press `Return` to rename it.

### Window Management

[[appName]] supports a multi-window workflow:

- **Open in New Window**: Right-click an item in the Projects sidebar and select "Open in New Window".
- **Focus Mode**: Press `⌘.` (or `Cmd + Shift + F` where available) to hide the Projects sidebar and Inspector for a distraction-free canvas.

## Saving & Versioning

### Auto-Save

[[appName]] saves your work automatically.

- The system monitors the graph state and saves to disk whenever changes are detected.
- You can press `Cmd + S` to force a save checkpoint.

### History (Undo/Redo)

[[appName]] maintains a robust undo stack for the current session:

- **Undo**: `Cmd + Z`
- **Redo**: `Cmd + Shift + Z`
- **Scope**: Covers all canvas actions including moving nodes, wiring, property changes, and grouping.

## Agent Lifecycle

1.  **Designing**: Use the Canvas to wire together nodes.
2.  **Debugging**: Use the Console and Debug Mode to test behavior in real-time.
3.  **Deploying**: (Future) Package your agent for standalone execution.
    > _Note: You can always run and use your agents locally within [[appName]] directly from the canvas or sidebar._

### Deleting Agents

- **Right-Click > Delete**: Removes the agent from your workspace.
- **Warning**: Deleting a folder removes **all** agents inside it. This action cannot be undone via `Cmd + Z`.

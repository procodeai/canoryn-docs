# Workflow & Agent Management

Learn how to create, organize, and manage your agents in [[appName]].

## Creating Agents

1.  **Sidebar**: Click the **`+` (New Agent)** button in the header.
2.  **Context Menu**: Right-click on any folder and select **New Agent**.
3.  **From Library**: Drag an agent from **My Library** into **My Projects** to create an editable copy.

## Organization

### Folders & Hierarchy

Keep your workspace clean with nested folders:

1.  Click the **New Folder** icon in the sidebar header to create a root folder.
2.  **Drag and Drop** agents into folders to organize them.
3.  **Rename**: Select a folder or agent and press `Return` to rename it.

### Window Management

[[appName]] supports a professional multi-window workflow:

- **Open in New Window**: Right-click an agent in the sidebar and select "Open in New Window".
- **Focus Mode**: Press `Cmd + Shift + F` to toggle Focus Mode, hiding the sidebar and inspector for a distraction-free canvas.

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

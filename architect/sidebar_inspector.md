# Sidebar & Inspector

The Architect interface is flanked by two key panels: the **Agent Browser** (Left) for file management and the **Property Inspector** (Right) for node configuration.

## Agent Browser (Sidebar)

The sidebar allows you to organize your agents and navigate your workspace. It maps directly to the file system.

### Sections

- **MY PROJECTS**: Agents and folders stored in your local workspace.
- **MY LIBRARY**: Installed agents from the Agent Store (Read-Only).

### File Operations

| Action            | Method                         | Keyboard Shortcut |
| :---------------- | :----------------------------- | :---------------- |
| **Create Agent**  | Click `+` button in header     |                   |
| **Create Folder** | Click `New Folder` icon        |                   |
| **Rename**        | Select item and press `Return` | `Return`          |
| **Move**          | Drag and drop within sidebar   |                   |
| **Delete**        | Right-click > Delete           |                   |
| **Duplicate**     | Right-click > Duplicate        |                   |

_Note: Dragging and dropping allows you to organize agents into folders or move them to the root._

### Context Menus

Right-click on an agent to:

- **Edit Details**: Change name, description, and author.
- **Open in New Window**: Open the agent in a separate standalone window for multi-tasking.
- **Reveal in Finder**: Show the actual `.agent` file on disk.

## Property Inspector

The Inspector allows you to configure the currently selected node. It adapts its controls based on the node's properties.

### Inspector Interface

The inspector is divided into distinct cards:

1.  **Header**: Shows the node's icon, color-coded category, and title.
2.  **Example / Description**: Brief explanation of the node's purpose.
3.  **Properties**: The main configuration area.
4.  **Interface**: A readonly list of all Input and Output ports.

_In Debug Mode, additional cards appear:_

- **Last Execution**: Shows duration, input values, and output values.
- **Execution Failed**: Displays error messages if the node crashed.

### Dynamic Controls

[[appName]] uses specialized controls for different data types:

#### Specialized Selectors

- **AI Provider**: Choose between System Default or specific backend (OpenAI, Ollama, etc.).
- **Model Selector**: Pick specific models (e.g., `gpt-4`, `llama3`).
- **Tool Selector**: Configure tools for AI nodes (Automatic discovery vs Strict allowlist).

#### Scrubbable Fields

Numeric fields like **Opacity**, **Rotation**, **Duration**, **Scale**, and **Size** are "scrubbable".

- **Click and Drag** the label left or right to adjust the value fluidly.
- **Shift + Drag** for faster adjustment.
- **Option + Drag** for precision adjustment.

#### Text Editors

Fields like `System Instructions`, `Prompt`, and `Context` use a multi-line code editor tailored for long-form text.

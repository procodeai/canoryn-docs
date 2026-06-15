# Controls & Shortcuts

A complete reference of all keyboard shortcuts and gestures in the Architect. These are managed by the `KeyBindingManager` and can be viewed in-app by pressing `⌘/`.

> [!TIP]
> Press **⌘/** to open the **Shortcuts Reference Panel** directly in the Architect.

---

## Canvas Navigation

| Action           | Shortcut              | Notes                                    |
| :--------------- | :-------------------- | :--------------------------------------- |
| **Pan Canvas**   | Scroll / Trackpad Pan | Drag with two fingers to move the canvas |
| **Zoom In**      | `⌘=`                  | Zoom toward center                       |
| **Zoom Out**     | `⌘-`                  | Zoom away from center                    |
| **Zoom to 100%** | `⌥⌘1`                 | Reset zoom to actual pixel size          |
| **Zoom to Fit**  | `⌘9`                  | Fit all nodes in the viewport            |
| **Pinch Zoom**   | Pinch gesture         | Zoom at the gesture center point         |
| **Cmd+Scroll**   | `⌘` + Scroll Wheel    | Precise zoom control                     |

## Selection

| Action              | Shortcut                     | Notes                             |
| :------------------ | :--------------------------- | :-------------------------------- |
| **Select Node**     | Click                        | Single selection                  |
| **Multi-Select**    | `Shift` + Click              | Toggle individual items           |
| **Marquee Select**  | Click + Drag (on background) | Box selection                     |
| **Select All**      | `⌘A`                         | Select all nodes                  |
| **Deselect All**    | `Escape`                     | Clear selection / cancel wiring   |
| **Focus Selection** | `F`                          | Zoom and center on selected nodes |

## Editing

| Action                  | Shortcut               | Scope     |
| :---------------------- | :--------------------- | :-------- |
| **Delete Selection**    | `Delete` / `Backspace` | Blueprint |
| **Duplicate Selection** | `⌘D`                   | Blueprint |
| **Copy**                | `⌘C`                   | Blueprint |
| **Paste**               | `⌘V`                   | Blueprint |
| **Undo**                | `⌘Z`                   | Blueprint |
| **Redo**                | `⇧⌘Z`                  | Blueprint |
| **Group Selection**     | `⌘G`                   | Blueprint |
| **Align Horizontal**    | `⇧H`                   | Blueprint |
| **Align Vertical**      | `⇧V`                   | Blueprint |

## Graph & Execution

| Action                    | Shortcut | Notes                                  |
| :------------------------ | :------- | :------------------------------------- |
| **Run Agent**             | `⌘R`     | Start executing the current agent      |
| **Stop Agent**            | `⌘.`     | Stop execution                         |
| **Auto-Layout Selection** | `⌘L`     | Automatically arrange selected nodes   |
| **Show Node Palette**     | `⇧A`     | Open the node picker to add a new node |
| **Cancel Wiring**         | `Escape` | Cancel a wire drag in progress         |

## Workspace Modes

| Mode              | Shortcut | Description                                  |
| :---------------- | :------- | :------------------------------------------- |
| **Design Mode**   | `⌃1`     | Default mode for building blueprints         |
| **Debug Mode**    | `⌃2`     | See live variable values and execution state |
| **Simulate Mode** | `⌃3`     | Animated "Matrix" view of data flow          |

> [!IMPORTANT]
> Mode shortcuts use **Control** (`⌃`), not Command (`⌘`). This avoids conflicts with Cmd+1 (Show Architect Window).

## View & Panels

| Action                          | Shortcut |
| :------------------------------ | :------- |
| **Toggle Left Panel (Browser)** | `⌘B`     |
| **Toggle Inspector**            | `⌘I`     |
| **Toggle Bottom Panel**         | `⌘J`     |
| **Toggle Status Bar**           | `⌘\`     |
| **Toggle Grid**                 | `⌘'`     |
| **Toggle Minimap**              | `⌘M`     |
| **Toggle Focus Mode**           | `⇧⌘F`    |
| **Reset Editor Layout**         | `⇧⌘R`    |

## Bottom Panel Tabs

| Panel        | Shortcut |
| :----------- | :------- |
| **Console**  | `⇧⌘C`    |
| **Memory**   | `⇧⌘M`    |
| **Thoughts** | `⇧⌘T`    |
| **Debug**    | `⇧⌘D`    |

## File Operations

| Action                    | Shortcut |
| :------------------------ | :------- |
| **Save**                  | `⌘S`     |
| **Save As**               | `⇧⌘S`    |
| **New Agent**             | `⌘N`     |
| **New Architect Window**  | `⇧⌘N`    |
| **Show Main Window**      | `⌘0`     |
| **Show Architect Window** | `⌘1`     |
| **Settings**              | `⌘,`     |

## Global Hotkeys

These shortcuts work even when [[appName]] is **not in focus**, using a system-level event tap (requires Accessibility permission):

| Action               | Shortcut |
| :------------------- | :------- |
| **Toggle Assistant** | `⇧⌘A`    |
| **Vision Selection** | `⇧⌘2`    |

## Other

| Action                | Shortcut | Notes                      |
| :-------------------- | :------- | :------------------------- |
| **Toggle Voice Mode** | `⇧⌘V`    | Enable/disable voice input |
| **Quick Action**      | `⌥⌘A`    | Open quick action menu     |
| **Submit to Copilot** | `⌘↩`     | Send copilot prompt        |

## Mouse Shortcuts

| Action                | Input                    | Description                         |
| :-------------------- | :----------------------- | :---------------------------------- |
| **Disconnect Wire**   | `⌥` + Click on port      | Removes all connections from a port |
| **Rewire Connection** | Drag from connected port | Detach and reconnect a wire         |
| **Split Wire**        | Double-click on a wire   | Insert a Reroute node on the wire   |

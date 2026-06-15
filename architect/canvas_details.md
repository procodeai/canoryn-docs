# Blueprint Canvas Details

The Blueprint Canvas is the infinite, high-performance surface where you design agent behaviors. It uses a custom metal-accelerated rendering engine with Level-of-Detail (LOD) optimizations to handle large graphs smoothly.

## Core Interactions

### Navigation

- **Pan**:
  - Scroll with two fingers (Trackpad).
  - Click and drag on empty space with a mouse.
- **Zoom**:
  - Pinch to zoom (Trackpad).
  - `Cmd + =` / `Cmd + -` (Keyboard).
- **Zoom Controls**:
  - **Zoom to 100%**: Press `Option + Cmd + 1`.
  - **Zoom to Fit**: Press `Cmd + 9` to frame all nodes.

### Selection

- **Single Select**: Click a node.
- **Multi-Select**: Hold `Shift` and click multiple nodes, or drag a marquee box around them.
- **Deselect**: Click anywhere on the background.
- **Select All**: `Cmd + A`.

### Context Menus

Right-click on the canvas to access:

- **Add Node...**: Opens the Node Palette.
- **Paste**: Paste nodes from clipboard.
- **Layout**: Align or Group selected nodes.

## Node Management

### Adding Nodes

1.  **Double-Click** anywhere on the background.
2.  **Right-Click** and choose "Add Node".
3.  **Drag Connection**: Drag a wire from an output port and release it in empty space. The palette will open, and the new node will automatically connect.

### Splitting Wires

You can insert a node directly into an existing connection:

1.  **Double-Click** on any wire.
2.  Select a node from the palette (e.g., "Filter" or "Log").
3.  The wire splits, and the new node is inserted between the source and destination.

### Visual States & LOD

The canvas adapts its rendering based on zoom level to maintain performance:

- **Full Detail**: Standard view options. Shows all ports, values, and controls.
- **Satellite Mode** (Zoom < 60%):
  - Nodes switch to a simplified representation.
  - **Data Wires** (colored) are hidden to reduce visual noise.
  - **Flow Wires** (white/gray) remain visible to show the high-level execution path.
  - _Exception_: Data wires originating from data-only nodes (variables, constants) remain visible.

## Wiring System

### Wire Types & Colors

[[appName]] uses a strict color-coded system to indicate data types.

| Type        | Color                   | Description                               |
| :---------- | :---------------------- | :---------------------------------------- |
| **Flow**    | ⚪️ Gray (`#D9DEE7`)     | Control flow. Determines execution order. |
| **String**  | 🟢 Green (`#34C759`)    | Text values.                              |
| **Boolean** | 🟠 Orange (`#FF9F0A`)   | True/False logic.                         |
| **Image**   | 🔵 Sky Blue (`#0EA5E9`) | Binary image data.                        |
| **Any**     | 🟣 Purple (`#7B61FF`)   | Universal connectors (e.g. Logger).       |

### Visual Debugging

When the agent runs in **Debug Mode**:

- **Active Flow**: Dashed "marching ants" animation on flow wires.
- **Active Data**: Wires glow when data passes through them.
- **Last Value**: Hovering over an output pin often reveals the last value that passed through it.

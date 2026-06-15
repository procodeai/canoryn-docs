# Debugging & Console

[[appName]] includes a professional-grade logging console and visual debugger to help you understand and fix your agent's behavior.

## Pro Console

The Console provides a real-time stream of execution events, errors, and data payloads.

### Interface

The console is divided into top-level controls and a split-pane view:

- **Toolbar**:
  - **Search**: Filter logs by text content.
  - **Level Filter**: Toggle between viewing All logs, or filtering specific levels (Info, Warning, Error).
  - **Clear**: Trash icon to clear the current session logs.

- **Log List** (Left Pane):
  - **Timeline**: Precise timestamp (e.g., `10:30:15`).
  - **Execution ID**: A mini badge (e.g., `A1B2`) identifying which specific run cycle generated the log.
  - **Source**: The name of the node that generated the event.
  - **Message**: The summary text of the event.
  - **Payload Icon**: A document icon appears if the log contains detailed JSON data.

- **Payload Inspector** (Right Pane):
  - Clicking a log entry with data opens the Inspector.
  - Displays the full JSON payload (Inputs, Outputs, Prompts) in a pretty-printed, scrollable view.

### Interactive Debugging

- **Jump to Source**: (Future) Clicking a log entry will navigate the blueprint to the source node.
- **Real-time Streaming**: Logs appear instantly as the agent executes.

## Visual Debugger

When you run an agent, the Blueprint Canvas switches to **Debug Mode**.

### Live Execution Flow

- **Active Node**: The currently executing node pulses **Green**.
- **Wire Animation**: Active connections show a "marching ants" animation to visualize the path of execution.
- **Data Values**: Wires turn specific colors to indicate the data type traversing them (Green for Strings, Orange for Booleans, etc.).

### Node Inspector (Debug)

In Debug mode, selecting a node reveals additional runtime metrics in the Inspector:

- **Last Execution**: The duration of the last run (e.g. `0.45s`).
- **Input/Output**: A snapshot of the exact data that flowed into and out of the node.
- **Error**: If the node failed, a red error card displays the failure reason.

### Troubleshooting Guide

| Issue               | Indicator                             | Action                                                                                                            |
| :------------------ | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| **Node Failure**    | Red outline on node + Red Error Log   | Check the Console for the error message. detailed payload.                                                        |
| **Stuck Execution** | Node stays pulsing Green indefinitely | The node might be waiting for a callback (e.g., "Wait for Human"). Check if the agent is paused.                  |
| **Unexpected Path** | Execution flows down the wrong wire   | Check the "Logic" node configuration. Use the Console Inspector to see the exact inputs that caused the decision. |

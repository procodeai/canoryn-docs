# Blueprint Editor Evolution Plan (Project Genesis Phase 6+)

> [!NOTE]
> This document outlines the research and architectural roadmap for evolving the Blueprint Editor from a visual graph designer into a fully functional **Visual IDE** (Integrated Development Environment).

---

## 1. UI/UX Scalability: The "IDE" Transformation (✅ Completed)

The **[[appName]] Nexus Layout** has been implemented, featuring:

- **Orchestrator Toolbar** with native glass aesthetics.
- **Mission Control** sidebar for graph management.
- **Contextual Inspector** for node details.
- **Modes**: Design, Debug, Simulate.

---

## 2. Phase 6: The Runtime (Current Focus)

We are now shifting focus from **Editing** to **Execution**.

### Capabilities

1.  **True LLM Integration**: Nodes will invoke actual LLM Contexts (Ollama/OpenAI).
2.  **Memory Recall**: Agents will access a vector database for long-term memory.
3.  **Context Propagation**: Variables and "Thought Chains" must flow between nodes without staleness.

### Architecture Shifts

1.  **Async/Await Execution**: The `GraphRunner` must be fully asynchronous. One node might perform a 5-second API call. The UI must not freeze.
2.  **Data Flow vs. Execution Flow**:

Currently, we edit a static graph. The next complexity jump is **Execution**.

### Architecture Shifts

1.  **Async/Await Execution**: The `GraphRunner` must be fully asynchronous. One node might perform a 5-second API call. The UI must not freeze.
2.  **Data Flow vs. Execution Flow**:
    - **Execution (White wires)**: "Do this, then do that."
    - **Data (Colored wires)**: "Pass string 'Hello' to input 'Text'."
3.  **Real-Time Feedback**:
    - **Active Node Highlight**: When a node is running, it glows borders (e.g., Pulsing Green).
    - **Wire Animation**: "Marching ants" animation on wires to show execution path associated with data transfer.

### API Integration

- **API Node**: A generic node with dynamic inputs/outputs.
  - **Inputs**: URL, Method, Headers (JSON), Body (JSON).
  - **Outputs**: Status Code, Response Body, Error.
- **Complexity Risk**: Handling JSON parsing visually.
  - _Solution_: Auto-detect JSON schema from API response and generate output ports dynamically on the node.

---

## 3. Phase 7: Debugging System

This is where the "heavy" software engineering features come in.

### Visual Debugging

1.  **Breakpoints**: Allow users to right-click a node → "Toggle Breakpoint".
    - Execution pauses at this node.
    - Effect: UI overlay shows "PAUSED".
2.  **Data Inspector**:
    - When paused (or on hover), show the **Current Values** flowing through wires.
    - e.g., Hover over a "Text" wire → Tooltip shows `"User asked: What is the weather?"`.
3.  **Step-Over**: A button in the toolbar to execute just the next node.

---

## 4. Phase 8: Project Management (Scale)

### Multiple Tabs

- **Scenario**: Editing "Main Graph" and "Sub-Graph (Function)" simultaneously.
- **Architecture**: Move `BlueprintEditorState` into a `ProjectDocument` model. The concept of "Active Graph" changes from a global variable to a tab selection.

### Asset Browser (Project Drawer)

- A generic "Files" panel on the left.
- Drag and drop:
  - **Saved Sub-Graphs**: Reusable logic blocks.
  - **Media**: Images/Audio files for prompts.
  - **Prompts**: Text files for LLM inputs.

---

## 5. Technical Roadmap (Data & Persistence)

To support this evolution, the underlying data model `GraphDefinition` must become robust.

| Feature             | Requirement                                                                                                                                        |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Large Graphs**    | Need spatial indexing (QuadTree) for hit-testing if graph > 1000 nodes.                                                                            |
| **Persistence**     | Migrate from pure JSON to a **Document Package** format (like `.sketch` or `.key`). A folder containing: `graph.json`, `assets/`, `metadata.json`. |
| **Version Control** | Since it's JSON-based, we can implement basic Git diffing logic or "Snapshots" in a local DB for history.                                          |

### Immediate Next Steps (Research)

1.  **Prototype Toolbar**: Build the visual container for Undo/Redo + Zoom.
2.  **Define Execution Model**: Is it an interpreter (runs `GraphDefinition` directly) or a compiler (generates Swift/Python code)? _Interpreter is easier/safer for now._

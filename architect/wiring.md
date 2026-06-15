# Wiring System

Wires connect nodes together to define both the **order of execution** and the **flow of data**.

## Wire Types

There are two fundamentally different types of wires in the Architect:

### Flow Wires

Flow wires control **execution order** — they determine _when_ a node runs.

- **Color**: ⚪ Light gray / white (`#D9DEE7`)
- **Thickness**: 2.8pt (thicker than data wires)
- Connects a **Flow Output** to a **Flow Input**.
- Represents: "After this node finishes, run _that_ node."

```
[On Start] ──flow──▶ [Simple AI] ──flow──▶ [Speak]
```

### Data Wires

Data wires pass **values** between nodes — strings, booleans, JSON objects, images.

- **Color**: Varies by data type (see table below)
- **Thickness**: 2.45pt
- Connects a **Data Output** to a **Data Input**.
- Represents: "Use this value as input."

```
[Text Area]
     │ data (green)
     ▼
[Simple AI] ←── "Prompt" input receives the text
```

## Port & Wire Colors

Each data type has a distinct color, making it easy to trace data flow visually:

| Data Type   | Port Color            | Hex       | Used For                              |
| :---------- | :-------------------- | :-------- | :------------------------------------ |
| **Flow**    | ⚪ White / Light Gray | `#D9DEE7` | Execution order                       |
| **String**  | 🟢 Green              | `#34C759` | Text, prompts, commands               |
| **Boolean** | 🟠 Amber              | `#FF9F0A` | True/false conditions                 |
| **Any**     | 🟣 Purple             | `#7B61FF` | Generic data (numbers, objects, JSON) |
| **Image**   | 🔵 Sky Blue           | `#0EA5E9` | Image data for multimodal AI          |

> [!NOTE]
> The **Reroute** node is a special pass-through that adapts its color. If connected to a flow chain, it becomes white. If connected to a string output, it becomes green. This is resolved dynamically by tracing the source type.

## Connection Compatibility

Wires enforce type safety. The rules are defined in the `PortDataType.isCompatible()` function:

| Rule                  | Explanation                                                     |
| :-------------------- | :-------------------------------------------------------------- |
| Flow ↔ Flow           | ✅ Flow ports can **only** connect to other flow ports.         |
| Same Type ↔ Same Type | ✅ String→String, Boolean→Boolean, Image→Image all work.        |
| Any ↔ Any Data Type   | ✅ `Any` accepts or provides any **data** type (not flow).      |
| Flow ↔ Data           | ❌ **Never allowed**. Flow and data are fundamentally separate. |
| String ↔ Boolean      | ❌ Mismatched data types cannot connect.                        |

> [!IMPORTANT]
> The `Any` type is flexible but **cannot carry Flow**. If you need to pass both execution order and a value, use separate flow and data wires.

## Creating Wires

1.  **Click and drag** from any port (input or output).
2.  A dashed preview wire follows your cursor.
3.  **Drop** on a compatible port to complete the connection.

**Incompatible targets** will not accept the wire — the preview wire will not snap.

### Magnetic Snapping

When your cursor is within ~50px of a valid target port, the wire snaps automatically.

### Cancel

Drop in empty space or press `Escape` to cancel a wire in progress.

## Editing Wires

### Reconnect an Existing Wire

1.  Drag from an **input port** that already has a wire connected.
2.  The existing wire detaches and follows your cursor.
3.  Drop on a new compatible source port.

### Delete a Wire

- Select the wire (click on it) and press `Delete` or `Backspace`.

### Split a Wire

- **Double-click** on an existing wire to insert a **Reroute** node, splitting the wire into two segments. This helps organize long or crossing wires.

## Best Practices

1.  **Keep wires short**: Use Reroute nodes to clean up long wire runs.
2.  **Separate flow from data**: Flow wires (white) should form a clear left-to-right chain. Data wires (colored) should branch off clearly.
3.  **Use Groups**: Wrap related node clusters in groups to reduce visual noise.

---
description: "Use debug mode in Canoryn Architect to step through and inspect a running workflow."
---

# Debug Mode

Debug mode gives you X-ray vision into your blueprint execution.

## Activating Debug Mode

- Press `Cmd + 2`
- Or click the **🐛 Debug** button in the toolbar

## What You See

### Live Values

Each wire shows its current value:

```
[Text: "Hello"] ──"Hello"──▶ [AI Generate]
                     ↑
               Value label
```

### Execution State

Nodes show their current state:

| State     | Appearance         |
| --------- | ------------------ |
| Idle      | Normal             |
| Running   | Blue glow, spinner |
| Completed | Green checkmark    |
| Error     | Red border, ❌     |

### Execution Order

Numbers show the order nodes executed:

```
[1] Trigger → [2] AI → [3] Speak
```

## Debug Panel

The debug panel (right side) shows:

- **Variables**: All current variable values
- **Logs**: Execution history
- **Errors**: Any failures with details

## Breakpoints

Pause execution at specific nodes:

1. Click the left edge of a node
2. A red dot appears (breakpoint)
3. Execution pauses here
4. Click **Continue** to proceed

## Step Through

Execute one node at a time:

1. Add a breakpoint or pause execution
2. Press `F10` to step to next node
3. Inspect values at each step

## Common Issues

### "Value is undefined"

The input wire isn't connected or the source node failed.

### "Type mismatch"

Wrong data type—check wire colors.

### "Execution timeout"

Node took too long—check for infinite loops.

## Tips

1. **Use Result Viewer**: Add result viewer nodes to inspect values
2. **Check logs**: The debug panel shows detailed logs
3. **Simplify first**: Test small parts before full blueprints

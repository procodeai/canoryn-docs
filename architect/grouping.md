# Grouping

Groups are visual containers that help organize complex blueprints by bundling related nodes together.

## What is a Group?

A `GroupDefinition` consists of:

| Property          | Type      | Description                                      |
| :---------------- | :-------- | :----------------------------------------------- |
| **Title**         | String    | Display name shown in the group header           |
| **Description**   | String    | Optional description shown below the title       |
| **Color**         | Hex Color | Background/header tint color                     |
| **Rect**          | CGRect    | Bounding rectangle on the canvas                 |
| **isCollapsed**   | Bool      | Whether the group is collapsed (hiding contents) |
| **isManualSize**  | Bool      | Whether the user has manually resized the group  |
| **parentGroupID** | UUID?     | Parent group ID for nesting                      |

## Creating Groups

1.  **Select** the nodes you want to group.
2.  Press `⌘G` to create a group around them.

The group automatically sizes itself to fit the selected nodes with padding.

## Editing Groups

### Rename

Double-click the group header text to edit the title.

### Resize

Drag the edges of the group to manually resize it. Once resized, the `isManualSize` flag is set to prevent auto-sizing.

### Change Color

Select the group and use the **Inspector** panel to pick a new color. The color tints the header and border.

### Collapse

Collapsed groups hide their contained nodes and shrink to a compact representation. Wires connected to nodes inside the collapsed group are routed to the group's edges.

### Ungroup

Select the group and choose "Ungroup" from the context menu. This dissolves the group container but **keeps all nodes** in place.

### Delete Group

Selecting the group and pressing `Delete` removes the group **and** its contents. To remove only the container, use "Ungroup" instead.

## Nested Groups

Groups support nesting via the `parentGroupID` property. A group can be placed inside another group:

```
┌── Main Pipeline ─────────────────────┐
│                                       │
│  ┌── Data Prep ──────┐ ┌── AI ───┐  │
│  │ [Parse] → [Clean] │ │ [LLM]  │  │
│  └───────────────────┘ └─────────┘  │
│                                       │
└───────────────────────────────────────┘
```

> [!TIP]
> Limit nesting to **2 levels** for readability. Deeply nested groups become difficult to navigate.

## How Collapsed Groups Handle Wires

When a group is collapsed, its contained nodes are hidden. The layout system (`GraphLayoutHelper.findPortCenter`) routes wires to the collapsed group's visual edges instead of the hidden node positions:

- **Input wires** connect to the **left edge** of the collapsed group.
- **Output wires** connect to the **right edge** of the collapsed group.

This keeps the graph visually coherent even when details are hidden.

## Best Practices

1.  **Group by function**: Input Processing → AI Reasoning → Output.
2.  **Use clear labels**: Name groups descriptively (e.g., "Email Parser", "Response Builder").
3.  **Use colors**: Color-code groups for visual scanning (blue for data, green for AI, etc.).
4.  **Collapse completed sections**: Once a sub-pipeline is stable, collapse it to reduce visual noise.

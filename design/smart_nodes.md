# Design Proposal: Smart Nodes & Dynamic Ports

**Status**: Draft
**Target Schema**: v3.2

## Context

Current JSON parsing in Aura is verbose:

1.  `JSON Parse` (Output: Object)
2.  `Get JSON Field` (Input: Object, Param: "title") -> Output: Title
3.  `Get JSON Field` (Input: Object, Param: "content") -> Output: Content

Users want to extract multiple fields from a single node, similar to destructuring in code or "Function" nodes in other tools.

## Problem

`NodeDefinition` currently relies on static `NodeTemplate` definitions. Ports are fixed per `type`.

```swift
struct NodeDefinition {
    let type: String // Maps to a static template
    // No storage for custom port definitions
}
```

## Proposed Solution

### 1. Schema Update

Add `dynamicPorts` to `NodeDefinition`.

```swift
struct NodeDefinition {
    // ... existing fields
    var dynamicOutputs: [PortDefinition]?
}

struct PortDefinition: Codable {
    var id: String
    var name: String
    var type: PortDataType
}
```

### 2. UI Changes

- **Inspector**: Add a "Manage Outputs" section for nodes tagged as `dynamic_outputs`.
- **Canvas**: Node view must iterate over `template.outputs + (node.dynamicOutputs ?? [])`.

### 3. Runtime Logic (`JSONNodeHandler`)

Update `handleParse` to iterate over dynamic outputs and extract values automatically.

```swift
// Pseudo-code
for port in node.dynamicOutputs {
    if let value = json[port.id] {
        await runner.setOutput(port.id, value)
    }
}
```

## Use Cases

1.  **JSON Parser**: Extract `title`, `body`, `headers` in one go.
2.  **SQL Query**: Dynamic columns based on the query `SELECT id, name FROM...`.
3.  **Javascript/Python Script**: Auto-detect `return { foo: 1, bar: 2 }` and expose ports.

## Migration Path

1.  Update `GraphModels.swift` (Schema 3.2).
2.  Update `NodeDefinition` struct.
3.  Implement UI in Architect.
4.  Update `GraphRunner`.

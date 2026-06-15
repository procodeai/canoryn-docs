# Custom Actions

::: warning Developer Feature
This guide is for developers who want to extend Canoryn with custom Swift actions.
:::

## Overview

Custom actions let you add new capabilities to Canoryn that aren't included by default.

## Action Structure

Every action implements the `ActionHandler` protocol:

```swift
protocol ActionHandler {
    var id: String { get }
    var name: String { get }
    var category: String { get }
    var inputSchema: [PortDefinition] { get }
    var outputSchema: [PortDefinition] { get }

    func execute(inputs: [String: Any]) async throws -> [String: Any]
}
```

## Creating a Custom Action

### 1. Define the Handler

```swift
struct MyCustomAction: ActionHandler {
    let id = "custom.my_action"
    let name = "My Custom Action"
    let category = "custom"

    let inputSchema: [PortDefinition] = [
        PortDefinition(name: "message", type: .string)
    ]

    let outputSchema: [PortDefinition] = [
        PortDefinition(name: "result", type: .string)
    ]

    func execute(inputs: [String: Any]) async throws -> [String: Any] {
        let message = inputs["message"] as? String ?? ""
        return ["result": "Processed: \(message)"]
    }
}
```

### 2. Register the Action

```swift
ActionRegistry.shared.register(MyCustomAction())
```

### 3. Use in Blueprints

Your action will appear in the node picker under your category.

## Port Types

| Type       | Swift Type | Description    |
| ---------- | ---------- | -------------- |
| `.string`  | `String`   | Text data      |
| `.number`  | `Double`   | Numeric data   |
| `.boolean` | `Bool`     | True/false     |
| `.any`     | `Any`      | Flexible type  |
| `.flow`    | -          | Execution flow |

## Best Practices

1. **Use async/await**: Long operations should be async
2. **Handle errors**: Throw descriptive errors
3. **Validate inputs**: Check types and required fields
4. **Document**: Add clear descriptions for discoverability

## Example: HTTP Request Action

```swift
struct HTTPRequestAction: ActionHandler {
    let id = "custom.http_request"
    let name = "HTTP Request"
    let category = "network"

    let inputSchema: [PortDefinition] = [
        PortDefinition(name: "url", type: .string),
        PortDefinition(name: "method", type: .string)
    ]

    let outputSchema: [PortDefinition] = [
        PortDefinition(name: "body", type: .string),
        PortDefinition(name: "status", type: .number)
    ]

    func execute(inputs: [String: Any]) async throws -> [String: Any] {
        guard let urlString = inputs["url"] as? String,
              let url = URL(string: urlString) else {
            throw ActionError.invalidInput("Invalid URL")
        }

        let (data, response) = try await URLSession.shared.data(from: url)
        let httpResponse = response as? HTTPURLResponse

        return [
            "body": String(data: data, encoding: .utf8) ?? "",
            "status": httpResponse?.statusCode ?? 0
        ]
    }
}
```

## Distribution

Custom actions can be shared via:

- GitHub repositories
- Blueprint Store (coming soon)
- Direct `.swift` file sharing

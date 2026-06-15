# Actions Reference

Actions are the building blocks of Canoryn agents. Each action represents a capability—something your agent can do.

## Action Categories

| Category     | Description                 | Example                           |
| ------------ | --------------------------- | --------------------------------- |
| **Triggers** | Start points for blueprints | Voice, Time, App Launch           |
| **Logic**    | Control flow and decisions  | Condition, Loop, Switch           |
| **AI**       | LLM-powered intelligence    | Generate, Summarize, Classify     |
| **System**   | macOS integrations          | Open App, Notification, Clipboard |
| **Media**    | Music and entertainment     | Spotify, Apple Music              |
| **Data**     | Storage and retrieval       | Memory, Variables, Files          |

## Action Structure

Every action has:

```typescript
interface Action {
  id: string; // Unique identifier (e.g., "spotify.play")
  name: string; // Display name (e.g., "Play Music")
  category: string; // Grouping (e.g., "spotify")
  inputs: Port[]; // Input parameters
  outputs: Port[]; // Output values
  execute: Function; // The actual logic
}
```

## Common Actions

### Triggers

| Action           | Description                | Output               |
| ---------------- | -------------------------- | -------------------- |
| `trigger.voice`  | Activated by voice command | Transcribed text     |
| `trigger.time`   | Scheduled execution        | Current time         |
| `trigger.app`    | When app opens/closes      | App name, event type |
| `trigger.hotkey` | Keyboard shortcut          | -                    |

### Logic

| Action            | Description            | Inputs             |
| ----------------- | ---------------------- | ------------------ |
| `logic.condition` | If/else branching      | Boolean condition  |
| `logic.switch`    | Multi-way branching    | Value to match     |
| `logic.loop`      | Repeat actions         | Count or condition |
| `logic.delay`     | Wait before continuing | Duration (seconds) |

### AI

| Action         | Description          | Inputs           |
| -------------- | -------------------- | ---------------- |
| `ai.generate`  | Free-form LLM prompt | Prompt, Context  |
| `ai.summarize` | Condense text        | Text input       |
| `ai.classify`  | Categorize input     | Text, Categories |
| `ai.extract`   | Pull structured data | Text, Schema     |

### System

| Action                | Description             | Inputs        |
| --------------------- | ----------------------- | ------------- |
| `system.notification` | Show macOS notification | Title, Body   |
| `system.open_app`     | Launch an application   | App name      |
| `system.clipboard`    | Read/write clipboard    | Mode, Content |
| `system.speak`        | Text-to-speech          | Message       |

## Creating Custom Actions

::: warning Developer Feature
Custom actions require Swift knowledge. This feature is for advanced users.
:::

See the [Action Development Guide](/api/custom-actions) for creating your own actions.

## Next Steps

- [Spotify Actions](/api/spotify) - Music control reference
- [System Actions](/api/system) - macOS automation reference
- [AI Actions](/api/ai) - LLM integration reference

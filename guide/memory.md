# Memory System

Canoryn's **Living Memory** gives agents the ability to remember, learn, and evolve over time.

## Types of Memory

Unlike traditional chatbots that forget after each session, Canoryn agents maintain persistent memory:

```
┌─────────────────────────────────────────────┐
│              MEMORY LAYERS                  │
├─────────────────────────────────────────────┤
│  Short-Term    │ Current conversation       │
│  Long-Term     │ Facts, preferences, history│
│  Procedural    │ How to do things           │
└─────────────────────────────────────────────┘
```

## Memory Types

### Episodic Memory

Remembers specific events and interactions.

> "Last Tuesday, you asked me to pause Spotify when Zoom opens."

### Semantic Memory

Stores facts and general knowledge.

> "Your preferred music genre is Lo-fi. Your work hours are 9-5."

### Procedural Memory

Knows how to perform tasks (stored as blueprints).

> "When you say 'focus mode', I should close Slack and enable DND."

## Using Memory in Blueprints

### Memory Query Node

Search the agent's memory for relevant context:

```
[User Input] → [Memory Query] → [AI with Context] → [Response]
```

### Memory Store Node

Explicitly save information to memory:

```
[User says "Remember..."] → [Memory Store] → [Confirmation]
```

## Privacy

- All memory is stored **locally** on your Mac
- Encrypted at rest
- Never transmitted to external servers
- You can clear memory anytime in Settings

## Best Practices

## Interactions

1. **Let it learn**: The more you use Canoryn, the smarter it gets
2. **Correct mistakes**: If Canoryn remembers wrong, just tell it
3. **Review periodically**: Check Memory Bank in Settings to see what's stored

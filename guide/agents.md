---
description: "Canoryn's multi-agent system — specialized agents that coordinate music, visuals, and system automation on macOS."
---

# Agents & Blueprints

Understanding the relationship between Agents and Blueprints.

## What is an Agent?

An **Agent** is a complete, self-contained AI assistant with:

- A name and personality
- One or more blueprints (behaviors)
- Access to memory and tools
- Configurable triggers

## What is a Blueprint?

A **Blueprint** is a visual workflow that defines a specific behavior:

```
Trigger → Logic → AI → Action
```

Think of it like:

- **Agent** = The entire robot
- **Blueprint** = One skill the robot knows

## One Agent, Many Blueprints

A single agent can have multiple blueprints:

```
DJ Agent
├── Blueprint: "Play music by mood"
├── Blueprint: "Create workout playlist"
└── Blueprint: "Discover new artists"
```

## Creating an Agent

1. Open **Mission Control**
2. Click **New Agent**
3. Give it a name and description
4. Add blueprints via the Architect

## Agent States

| State      | Description                     |
| ---------- | ------------------------------- |
| **Draft**  | Work in progress, not active    |
| **Active** | Running, responding to triggers |
| **Paused** | Temporarily disabled            |

## Best Practices

1. **Single Responsibility**: Each blueprint should do one thing well
2. **Descriptive Names**: "Handle urgent emails" not "Email thing"
3. **Test Before Activating**: Use the simulator first

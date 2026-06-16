---
description: "How Canoryn turns natural language into actions on your Mac — intent detection, planning, and native app execution."
---

# How [[appName]] Works

[[appName]] is built on a structured architecture that connects system inputs, AI reasoning, and native action execution.

## 1. Input & Context (Triggers)

[[appName]] uses **multimodal input** to understand context:

- **Vision Loop**: Periodically captures screen state (text, UI elements, images).
- **Audio Stream**: Listens for wake words ("Hey [[appName]]") and voice commands.
- **System Events**: Monitors file changes, app launches, and hotkeys.
- **Clipboard**: Watches for copied text or images.

How [[appName]] processes workflows:

```
├─────────────────────────────────────────────────────────┤
│  INPUTS & TRIGGERS    AI REASONING      SYSTEM ACTIONS  │
│  ─────────────────    ────────────      ──────────────  │
│  See & Hear           Think & Decide    Do & Execute    │
└─────────────────────────────────────────────────────────┘
```

### 1. Inputs & Context
How [[appName]] captures system events and user intent:

| Input Type  | Implementation                        |
| ----------- | ------------------------------------- |
| **Vision**  | Screen analysis, UI element detection |
| **Hearing** | Voice commands, audio context         |
| **Context** | Active app, time, location            |

### 2. Reasoning & Logic (AI Processing)
How [[appName]] processes instructions and decides next steps:

| Component           | Function                           |
| ------------------- | ---------------------------------- |
| **LLM Reasoning**   | Natural language NLU               |
| **Blueprint Logic** | Visual workflow execution          |
| **Memory Database** | Retrieval of relevant past context |

### 3. Actions & Integrations (Execution)
How [[appName]] runs workflows and controls system elements:

| System            | Capabilities                  |
| ----------------- | ----------------------------- |
| **macOS APIs**    | App control, file management  |
| **Accessibility** | UI automation, clicks, typing |
| **Integrations**  | Spotify, Calendar, etc.       |

## Data Flow

```
User speaks "Play something chill"
        │
        ▼
   ┌─────────┐
   │ TRIGGER │ ← Voice transcription
   └────┬────┘
        │
        ▼
   ┌─────────┐
   │ PROCESS │ ← LLM understands intent
   └────┬────┘   Memory recalls: "User likes Lo-fi"
        │
        ▼
   ┌─────────┐
   │ ACTION  │ ← Spotify: Play Lo-fi playlist
   └─────────┘
```

## Local-First Architecture

Everything runs on your Mac:

- **LLM**: Ollama (local) or cloud providers (your choice)
- **Memory**: SQLite database, encrypted
- **Processing**: Native Swift, no web views

## Further Reading

- [Memory System](/guide/memory) - How agents remember
- [Architect Overview](/architect/overview) - Visual programming
- [Actions API](/api/actions) - What agents can do

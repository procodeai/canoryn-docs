# How [[appName]] Works

[[appName]] is built on a **biological architecture**—designed to mimic how living organisms perceive, think, and act.

## 1. Perception (The Eyes & Ears)

[[appName]] uses **multimodal input** to understand context:

- **Vision Loop**: Periodically captures screen state (text, UI elements, images).
- **Audio Stream**: Listens for wake words ("Hey [[appName]]") and voice commands.
- **System Events**: Monitors file changes, app launches, and hotkeys.
- **Clipboard**: Watches for copied text or images.

How [[appName]] understands the world:

```
├─────────────────────────────────────────────────────┤
│  PERCEPTION        COGNITION         ACTION        │
│  ───────────       ──────────        ──────        │
│  See & Hear        Think & Decide    Do & Execute  │
└─────────────────────────────────────────────────────┘
```

### 1. Perception (The Senses)

How [[appName]] understands the world:

| Sense       | Implementation                        |
| ----------- | ------------------------------------- |
| **Vision**  | Screen analysis, UI element detection |
| **Hearing** | Voice commands, audio context         |
| **Context** | Active app, time, location            |

### 2. Cognition (The Brain)

How [[appName]] thinks and decides:

| Component           | Function                           |
| ------------------- | ---------------------------------- |
| **LLM Reasoning**   | Natural language understanding     |
| **Blueprint Logic** | Visual workflow execution          |
| **Memory RAG**      | Retrieval of relevant past context |

### 3. Action (The Body)

How [[appName]] affects the world:

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
   │ PERCEPT │ ← Voice transcription
   └────┬────┘
        │
        ▼
   ┌─────────┐
   │ COGNIZE │ ← LLM understands intent
   └────┬────┘   Memory recalls: "User likes Lo-fi"
        │
        ▼
   ┌─────────┐
   │   ACT   │ ← Spotify: Play Lo-fi playlist
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

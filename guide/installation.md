---
description: "Download and install Canoryn on macOS 15.4+, including the one-time first-launch security step for the current beta build."
---

# Installation

Get [[appName]] running on your Mac in under 5 minutes.

## System Requirements

| Requirement | Minimum                | Recommended                |
| ----------- | ---------------------- | -------------------------- |
| macOS       | 15.4 (Sequoia)         | 15.4+ / Apple Silicon      |
| RAM         | 8GB                    | 16GB+                      |
| Storage     | 2GB                    | 10GB (for local AI models) |
| Processor   | Apple Silicon or Intel | Apple Silicon              |

## Download

Get the latest version of [[appName]] for macOS:

[Download [[appName]] for macOS](https://canoryn.app/download) (Universal DMG)

> **Requirements**: macOS 15.4+ (Sequoia). Canoryn 0.5.0 is the last version for macOS 14. Apple Silicon (M1/M2/M3) recommended; Intel is supported.
## Setup

1. Open `[[appName]].dmg` and drag the app to Applications.
2. **Open the App** (macOS Gatekeeper warning):
   The beta is not notarized yet, so the first launch may say macOS could not verify the app. Clear that once, either way:
   - **Terminal (fastest):**
     ```bash
     xattr -dr com.apple.quarantine /Applications/[[appName]].app
     ```
     Then open [[appName]] from Applications.
   - **System Settings:** click **Done** on the warning, open **System Settings → Privacy & Security**, scroll to **Security**, click **Open Anyway** next to the [[appName]] message, confirm with Touch ID or your password, and click **Open Anyway** again.

   You only do this once per install. (On macOS 15, right-click → Open no longer bypasses the warning.)
3. Launch [[appName]] and grant the required system permissions:
   - **Accessibility**: To control windows and type text.
   - **Screen Recording**: To see the screen (processed locally).
   - **Full Disk Access**: To manage files.

## Deep Links

[[appName]] supports deep linking for quick installs of agents:

`[[urlScheme]]://install?id=...`

When you first launch [[appName]], you'll be prompted to:

### 1. Grant Permissions

[[appName]] needs certain permissions to work its magic:

| Permission           | Why We Need It            | What We Don't Do                   |
| -------------------- | ------------------------- | ---------------------------------- |
| **Accessibility**    | Control apps, automate UI | Never read passwords or keystrokes |
| **Screen Recording** | Let AI "see" context      | Never record or transmit           |
| **Microphone**       | Voice commands            | Never sent to servers              |

::: warning Important
All permissions are used locally. No data leaves your Mac.
:::

### 2. Set Up AI Provider

Choose your AI backend:

#### Local (Recommended for Privacy)

```bash
# Install Ollama
brew install ollama

# Pull a model
ollama pull llama3.2
```

#### Cloud Providers (Optional)

- **OpenAI** - Requires API key
- **Anthropic Claude** - Requires API key
- **Groq** - Free tier available

### 3. Connect Services (Optional)

Enhance [[appName]] with integrations:

- **Spotify** - Music control and mood-based playlists
- **Apple Shortcuts** - Trigger existing shortcuts
- **Calendar** - Context-aware scheduling

## Verify Installation

Open [[appName]] and try:

1. Click the microphone button
2. Say: _"What can you do?"_
3. [[appName]] should respond with its capabilities

::: tip Troubleshooting
If voice commands don't work, check **System Settings → Privacy & Security → Microphone**.
:::

## Next Steps

- [Quick Start](/guide/quickstart) - Build your first agent
- [How It Works](/guide/how-it-works) - Understand the architecture

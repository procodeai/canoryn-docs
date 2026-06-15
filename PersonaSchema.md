# Persona & Capability JSON Schema

This schema describes how [[appName]]’s local LLM will persist long-term persona data, routines, and automation capabilities. Everything is lightweight JSON so it can be diffed, versioned, and audited.

```json
{
  "version": 1,
  "persona": {
    "id": "user-uuid",
    "displayName": "User",
    "tone": "supportive",
    "pronouns": "he/him",
    "bio": "Short free-form summary the LLM can read before acting"
  },
  "preferences": {
    "music": {
      "defaultService": "spotify",
      "fallbackService": "local",
      "moodOverrides": {
        "Happy": { "playlist": "spotify:playlist:123" },
        "Calm": { "playlist": "local:calm" }
      }
    },
    "media": {
      "videoProvider": "youtube",
      "defaultChannels": ["Kurzgesagt", "LoFiGirl"]
    },
    "contacts": {
      "supportCircle": ["mom", "best_friend"],
      "preferredChannels": {
        "mom": "messages",
        "best_friend": "signal"
      }
    }
  },
  "moods": [
    {
      "id": "Happy",
      "intentSummary": "Need upbeat vibes and social energy",
      "defaultActions": ["play_music_happy", "wallpaper_happy"],
      "llmPrompt": "Remember to be playful, keep responses short."
    }
  ],
  "memories": [
    {
      "id": "mem-2025-11-28T10:00Z",
      "timestamp": "2025-11-28T10:00:00Z",
      "mood": "Focused",
      "type": "routine_execution",
      "summary": "Launched focus stack, muted notifications",
      "signals": { "heartRate": 74, "location": "desk" }
    }
  ],
  "routines": [
    {
      "id": "focus_stack",
      "name": "Deep Focus",
      "trigger": {
        "type": "mood",
        "value": "Focused",
        "conditions": ["time >= 08:00", "weekday"]
      },
      "steps": [
        {
          "action": "set_focus_mode",
          "params": { "mode": "Do Not Disturb" },
          "requiresConsent": false
        },
        {
          "action": "launch_apps",
          "params": {
            "bundleIds": ["com.apple.Terminal", "com.microsoft.VSCode"]
          }
        },
        {
          "action": "play_music",
          "params": {
            "service": "spotify",
            "playlist": "spotify:playlist:focus123"
          },
          "retry": { "attempts": 2, "backoffSeconds": 2 }
        }
      ],
      "postActions": {
        "summaryNote": true,
        "notifyUser": true
      }
    }
  ],
  "capabilityRegistry": [
    {
      "id": "play_music",
      "description": "Start playback on a given service",
      "permissions": ["spotify.oauth"],
      "inputs": {
        "service": {
          "type": "enum",
          "values": ["spotify", "apple_music", "local"],
          "required": true
        },
        "playlist": { "type": "string", "required": false },
        "track": { "type": "string", "required": false }
      },
      "outputs": {
        "status": "success|failure",
        "context": "details about device transfer, etc."
      }
    }
  ],
  "security": {
    "consentRequiredActions": ["send_message", "call_contact"],
    "lastPolicyReview": "2025-11-28T12:00:00Z"
  }
}
```

## Notes

- **version** guards migrations.
- **persona/preferences** feed the LLM before planning.
- **memories** form the long-term context that can be summarized and embedded.
- **routines** are declarative, making it easy for the LLM to author/edit them via JSON.
- **capabilityRegistry** is the contract between the LLM planner and native action executors.
- **security** keeps track of which actions still require explicit consent.

Next step: implement a `PersonaStore` service to read/write this JSON, expose typed accessors, and provide snapshots for the planner.

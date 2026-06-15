# Spotify Actions

Control Spotify directly from your Canoryn agents.

## Setup

1. Open Canoryn Settings → Integrations
2. Click **Connect Spotify**
3. Authorize in your browser

## Available Actions

### `spotify.play`

Start or resume playback.

| Input   | Type              | Description                       |
| ------- | ----------------- | --------------------------------- |
| `query` | String (optional) | Song, artist, or playlist to play |
| `uri`   | String (optional) | Spotify URI                       |

**Example**: "Play Lofi beats"

### `spotify.pause`

Pause current playback.

### `spotify.next`

Skip to next track.

### `spotify.previous`

Go to previous track.

### `spotify.volume`

Set volume level.

| Input   | Type   | Description |
| ------- | ------ | ----------- |
| `level` | Number | 0-100       |

### `spotify.get_current`

Get currently playing track.

| Output       | Type    | Description    |
| ------------ | ------- | -------------- |
| `track`      | String  | Track name     |
| `artist`     | String  | Artist name    |
| `album`      | String  | Album name     |
| `is_playing` | Boolean | Playback state |

## Blueprint Examples

### Mood-Based Music

```
[Voice: "I'm feeling stressed"]
        │
        ▼
[AI Classify: mood = "stressed"]
        │
        ▼
[Spotify Play: "calm relaxing music"]
```

### Focus Mode Integration

```
[Voice: "Focus mode"]
        │
        ├──▶ [Close Slack]
        ├──▶ [Enable DND]
        └──▶ [Spotify Play: "lo-fi beats"]
```

## Notes

- Requires Spotify Premium for full control
- Free accounts can only control local playback

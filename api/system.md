---
description: "Canoryn's system APIs — automate macOS apps, files, and shortcuts."
---

# System Actions

Native macOS automation capabilities.

## App Control

### `system.open_app`

Launch an application.

| Input  | Type   | Description               |
| ------ | ------ | ------------------------- |
| `name` | String | App name (e.g., "Safari") |

### `system.quit_app`

Close an application.

| Input  | Type   | Description |
| ------ | ------ | ----------- |
| `name` | String | App name    |

### `system.focus_app`

Bring app to foreground.

| Input  | Type   | Description |
| ------ | ------ | ----------- |
| `name` | String | App name    |

## Notifications

### `system.notification`

Show macOS notification.

| Input   | Type    | Description        |
| ------- | ------- | ------------------ |
| `title` | String  | Notification title |
| `body`  | String  | Notification body  |
| `sound` | Boolean | Play sound         |

## Audio

### `system.speak`

Text-to-speech output.

| Input   | Type              | Description   |
| ------- | ----------------- | ------------- |
| `text`  | String            | Text to speak |
| `voice` | String (optional) | Voice name    |

### `system.volume`

Set system volume.

| Input   | Type   | Description |
| ------- | ------ | ----------- |
| `level` | Number | 0-100       |

## Clipboard

### `system.clipboard_read`

Get clipboard contents.

| Output | Type   | Description    |
| ------ | ------ | -------------- |
| `text` | String | Clipboard text |

### `system.clipboard_write`

Set clipboard contents.

| Input  | Type   | Description  |
| ------ | ------ | ------------ |
| `text` | String | Text to copy |

## Do Not Disturb

### `system.dnd_enable`

Enable Do Not Disturb mode.

### `system.dnd_disable`

Disable Do Not Disturb mode.

## Screenshots

### `system.screenshot`

Capture screen.

| Input    | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| `region` | String | "full", "window", or "selection" |

| Output  | Type  | Description         |
| ------- | ----- | ------------------- |
| `image` | Image | Captured screenshot |

## File System

### `system.open_file`

Open a file with default app.

| Input  | Type   | Description |
| ------ | ------ | ----------- |
| `path` | String | File path   |

### `system.reveal_in_finder`

Show file in Finder.

| Input  | Type   | Description         |
| ------ | ------ | ------------------- |
| `path` | String | File or folder path |

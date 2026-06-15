# Permissions

[[appName]] requires certain macOS permissions to function. Here's what each does and why.

## Required Permissions

### Accessibility

**What it enables:**

- Control apps and UI elements
- Simulate clicks and keystrokes
- Read window titles and positions

**What we DON'T do:**

- Never log keystrokes
- Never read password fields
- Never access sensitive data

### Screen Recording

**What it enables:**

- Let AI "see" your active window
- Capture context for smart actions
- Take screenshots for analysis

**What we DON'T do:**

- Never record video
- Never transmit screen data
- Never store screenshots permanently

### Microphone

**What it enables:**

- Voice commands
- Audio-triggered actions

**What we DON'T do:**

- Never record conversations
- Never send audio to servers
- Process locally via Whisper

## Granting Permissions

1. Open **System Settings**
2. Go to **Privacy & Security**
3. Select the permission type
4. Enable **[[appName]]**

## Revoking Permissions

You can disable any permission at any time:

1. System Settings → Privacy & Security
2. Find the permission
3. Toggle [[appName]] off

::: warning
Some features may not work without required permissions.
:::

## Why We Need These

| Permission       | Without It         |
| ---------------- | ------------------ |
| Accessibility    | Can't control apps |
| Screen Recording | Can't see context  |
| Microphone       | Can't use voice    |

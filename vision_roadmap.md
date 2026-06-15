# Vision: [[appName]] vs. Jarvis

This document outlines the gap between **[[appName]] (Current State)** and **Jarvis (Ideal State)**, and proposes a roadmap to bridge that gap.

## The Gap Analysis

| Feature           | [[appName]] (Current)                                                                                                              | Jarvis (Vision)                                                                                                                               |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cognition**     | **Reflexive**: Responds when spoken to. Multi-model support (Router/Agent/Reasoner) is technical infrastructure, not behavior yet. | **Predictive**: Anticipates needs before you ask. "Sir, you have a meeting in 10 mins, should I prepare the briefing?"                        |
| **Memory**        | **Static**: Reruns search on every query. Has "Memory Bank" but feels like a database, not a mind.                                 | **Fluid**: "Sir, regarding that project we discussed last Tuesday..." seamlessly weaving past context without manual recall.                  |
| **Initiative**    | **Passive**: Waits for `ProactiveTrigger` timer (4h silence). Does not react to screen context or emotional cues.                  | **Active**: "You seem stressed, shall I play your focus playlist?" or "I noticed you opened Xcode, resuming the [[appName]] project context." |
| **Context**       | **Shallow**: Knows current app name and last 10 lines of chat.                                                                     | **Deep**: Knows "User is building a compiler", "It's late at night", "He usually listens to Lo-Fi now".                                       |
| **Execution**     | **Fragile**: "Click button" fails if button moves.                                                                                 | **Robust**: "I couldn't click the button, so I tried the keyboard shortcut instead." (Self-correction).                                       |
| **Multimodality** | **Blind**: Can "see" if explicitly asked to screen capture, but doesn't "watch" via Vision Model constantly.                       | **Omnipresent**: Watches the screen (low fps), logs activity, and understands _what_ you are doing (Coding vs Gaming).                        |
| **Agency**        | **Task-Based**: Runs one tool (e.g. "Get Weather").                                                                                | **Goal-Based**: "Optimize my Mac for gaming" -> Closes apps, changes settings, adjusts brightness -> Reports back.                            |

## Scenario: The "Jarvis" Experience

**Context**: It is 11:00 PM on a Tuesday. The user just closed Xcode after a long session.

**[[appName]] (Now)**:

> _Silence. Waits for user to say "Goodnight"._
> User: "Goodnight [[appName]]."
> [[appName]]: "Goodnight. Sleeping now."

**[[appName]] (Jarvis Mode - Future)**:

> _[[appName]] detects `Xcode` process termination._ > _[[appName]] checks `Mood` (Late night, long session -> Likely tired)._ > _[[appName]] checks `HomeKit` (Lights are still bright)._
>
> **[[appName]]**: "Great progress today, sir. Shall I run the _Decompression Protocol_? I can dim the lights and play some low-fi beats while you wind down."
> **User**: "Yes, please."
> **[[appName]]**: _Dims lights, starts music, sets alarm for 8 AM based on calendar._

## Roadmap to Jarvis

To achieve this, we need to move from **Command-Response** to **Loop-Based** architecture.

### Phase 1: The "Observer" (Context Awareness)

- [ ] **Screen Context**: Feed low-res screenshots to `Router Model` every 30s to tag activity (Coding, Reading, Watching).
- [ ] **Emotional Intelligence**: Use `MoodActionCoordinator` to track frustration (e.g., rapid typing, error noises) vs flow.
- [ ] **Proactive Triggers**: Expand `ProactiveTrigger.swift` to listen to specific App Events (not just generic "App Launched").

### Phase 2: The "Initiator" (Proactivity)

- [ ] **Opportunity Engine**: A background agent that asks: _"Given the current context (Time + App + Mood), is there a high-value action I should propose?"_
- [ ] **Soft Interruptions**: Canoryn shouldn't always speak. Use a gentle UI notification ("May I suggest...?") for low-priority ideas.

### Phase 3: The "Agent" (Autonomy)

- [ ] **Macro-Agents**: "Research Trip" -> Spawns a sub-agent that browses 20 sites, summarizes them, and produces a PDF, taking 5 minutes while user does other things.
- [ ] **Self-Correction**: If a tool fails (e.g., "HomeKit not responding"), Canoryn tries 3 times or alternative methods (e.g., "I couldn't turn off the lights, checking network...") instead of just erroring out.

## Immediate Action Items

1.  **Enhance `ProactiveTrigger`**: Add specific rules for "Work Mode" vs "Chill Mode".
2.  **Enable Vision-Loop**: Allow [[appName]] to periodically sample screen content to update `ActionContext.currentActivity`.
3.  **Memory Weaving**: Update `IntentPlanner` system prompt to _always_ inject relevant past memories into the "Current Context".

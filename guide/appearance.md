---
description: "Appearance settings — light/dark, moods, syntax themes, typography, and translucent editor surfaces across Chat and Review."
---

# Appearance

From **0.4.0**, **Settings → Appearance** is a first-class control surface for how Canoryn looks and how code is read. Choices apply across the Chat workbench, Review, File tabs, chat code blocks, and artifacts — not as one-off per-window skins.

Appearance is **device-local**: fonts and display preferences belong to this Mac. They are not account or chat-session state.

## Three independent choices

Keep these separate in your head — Canoryn does not force them to collapse into one “theme”:

| Choice | What it controls |
| :----- | :--------------- |
| **Appearance mode** | Light, Dark, or System (follows macOS) |
| **Mood** | Workbench character, accent, and surface style (native vs expressive) |
| **Syntax theme** | Colors of code tokens only |

Optional **harmonization** can pick a suitable syntax theme for the current mood without permanently coupling the two catalogs.

### Moods

Native moods (for example Snow / Slate) keep window and content canvases on semantic macOS surfaces. Expressive moods may use gradient / particle chrome. Accent is for selection, focus, and actions — ordinary cards stay on semantic backgrounds.

### Syntax themes

Built-in palettes (each with Light and Dark variants):

- Canoryn Default
- GitHub
- Xcode
- VS Code
- Dracula
- Nord
- Monokai Pro
- Catppuccin
- Tokyo Night
- Solarized

The same resolved palette drives File, Review (unified and split), chat markdown code fences, progress diffs, and the Settings live preview. Foregrounds are nudged only as needed to keep a readable contrast floor on opaque **and** translucent canvases.

## Typography

Two contracts:

1. **Interface fonts** — workbench / reading surfaces via semantic text roles. Native macOS menus and controls keep the system hierarchy.
2. **Code fonts** — family, point size, and line-height for AppKit editors, gutters, and SwiftUI code blocks together so baselines do not drift.

You can use system fonts or pick from installed families. Changing size should not force a full re-tokenize of every open buffer.

Canoryn follows native macOS font rasterization. There is no supported app-wide “font smoothing” override.

## Transparency

**Enhanced Transparency** can make File / Review editor canvases inherit the shared workbench material instead of painting a solid syntax background.

macOS **Reduce Transparency** always wins: surfaces fall back to opaque semantic backgrounds. Accessibility preferences outrank app toggles.

## Live updates

Changing appearance should not blow away your workbench state:

- open Chat sessions keep identity,
- editor selection, focus, and scroll are preserved,
- syntax caches invalidate only when the resolved theme or color scheme actually changes.

## Where to configure

1. Open **Settings**.
2. Choose **Appearance**.
3. Adjust mode, mood, syntax theme, typography, and transparency.
4. Use the live preview — it shares the same contract as real File / Review surfaces.

## Related

- [Chat workbench](/guide/chat-workbench) — where File and Review tabs live
- [Review workbench](/guide/review-workbench) — diffs that share these themes
- [Annotations](/guide/annotations) — threads drawn on the same native surfaces

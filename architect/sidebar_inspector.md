---
description: "Architect left Projects sidebar and right Inspector — organize workflows and configure selected nodes."
---

# Projects Sidebar & Inspector

The Architect has two side panels. The **left** panel switches between Projects and Copilot:

| Panel | Side | Job |
| :---- | :--- | :-- |
| **Projects sidebar** | Left (grid in the toolbar) | Open, create, and organize workflows in your workspace |
| **Architect Copilot** | Left (sparkles in the toolbar) | Chat linked to this canvas — see [Architect Copilot](/guide/architect-copilot) |
| **Inspector** | Right | Configure the **selected** node on the canvas |

> [!TIP]
> Hide panels for focus: `⌘.` (Focus Mode). Toggle left: `⌘B`. Toggle Inspector: `⌘I`. See [Controls](/architect/controls).

---

## Projects sidebar (left)

The left sidebar is your **file tree** for Architect — folders and workflow files (`.cryn`) on disk.

### Sections

- **My Projects** — workflows and folders in your local workspace (editable).
- **My Library** — shared or installed templates (when available); drag into **My Projects** to make an editable copy.

### Common actions

| Action | How |
| :----- | :-- |
| **New workflow / agent** | `+` in the sidebar header, or right-click a folder → New |
| **New folder** | New Folder icon in the header |
| **Rename** | Select → `Return` |
| **Move** | Drag and drop |
| **Duplicate / Delete** | Right-click the item |
| **Open in New Window** | Right-click → Open in New Window |
| **Reveal in Finder** | Right-click → Reveal in Finder (shows the `.cryn` on disk) |

---

## Inspector (right)

Select a node on the canvas. The **Inspector** shows controls for that node only.

### Layout

1. **Header** — node name and category  
2. **Description** — what the node does  
3. **Properties** — the main settings (prompts, URLs, schedules, providers, …)  
4. **Ports** — inputs and outputs (read-only list; wire them on the canvas)

In **Debug** mode you may also see last-run timing, values, or errors for that node.

### Typical controls

- **AI Provider / Model** — which backend and model this AI node uses  
- **Tools** — which tools an AI node may call (when the node supports them)  
- **Long text** — system instructions, prompts, context (multi-line editors)  
- **Numbers** — durations and sizes; many labels are scrubbable (drag the label to change the value; `⇧` faster, `⌥` finer)

Changes apply to the selected node and are saved with the workflow (auto-save / `⌘S`).

---

## Related

- [Architect Overview](/architect/overview) — whole workspace map  
- [Browser Nodes](/guide/browser-nodes) — live webpages **on the canvas**  
- [Workflow & Management](/architect/workflow) — create, enable, organize  
- [Controls & Shortcuts](/architect/controls)

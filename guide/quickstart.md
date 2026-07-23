---
description: "Get started with Canoryn in minutes — install, grant permissions, and run your first natural-language command on macOS."
---

# Quick Start: Build a "Zen Master"

In this guide, you will build an agent that finds ancient wisdom and turns it into deep philosophical musings.

**The Mission:** Fetch a Zen quote from GitHub's API, have AI reflect on it, and **speak it aloud**.

You will learn how to:

1.  **Fetch Data** from an API (HTTP Request).
2.  **Process Data** with an AI model.
3.  **Perform Actions** (Text-to-Speech).

> [!TIP]
> Prefer describing the workflow instead of wiring by hand? Ask in **Chat**, or open the [Architect Copilot](/guide/architect-copilot) beside the canvas, to build the same “Zen Master” flow — then use **Play** to test. This page remains the manual path.

---

## Step 1: Create a New Agent

1.  Open the **Architect** (Window > Architect).
2.  In the **Projects sidebar**, click the **`+`** button (or right-click **My Projects** → New).
3.  Name your agent **"Zen Master"**.

> _Screenshot coming soon: Screenshot: Empty Canvas and New Agent Dialog_

## Step 2: Fetch Wisdom

We'll use **GitHub's Zen API** to get a random design principle in plain text. It's fast, reliable, and free.

1.  **Right-click** on the canvas to open the Node Palette.
2.  Search for **"HTTP"** and select **HTTP Request** (System).
3.  Click the new node to select it. In the **Inspector** (Right Panel), configure:
    - **URL**: `https://api.github.com/zen`
    - **Method**: `GET`.

> **Tip:** Press `Play` in the toolbar now. Check the Console (Bottom Panel) to see the output (e.g., _"Favor focus over features."_).

> _Screenshot coming soon: Screenshot: HTTP Request Node configuration_

## Step 3: Add the AI Brain

Now let's expand on this thought.

1.  Add a **Simple AI** node (Logic).
2.  **Drag a wire** from the **HTTP Request** node's `Result` port (Green/String).
3.  Connect it to the **Simple AI** node's `Context` port.
4.  Set the **System Instruction** in the Inspector:
    ```text
    You are a wise master.
    The context contains a design principle.
    Reflect on it and speak a short, inspiring message about life.
    Keep it under 2 sentences.
    ```

> _Screenshot coming soon: Screenshot: Simple AI Node wired to HTTP Request_

## Step 4: Give it a Voice

Finally, let's hear the wisdom.

1.  Add a **Speak Text** node (General).
2.  Connect the **Simple AI** node's `Result` port to the **Speak Text** node's `Text` input.
3.  (Optional) Select a **Personality** in the Inspector (e.g., "Narrator").

> _Screenshot coming soon: Screenshot: Speak Text Node wired to Simple AI_

## Step 5: Run It!

1.  Turn up your volume 🔊.
2.  Press the **Play** button (▶️).
3.  Watch the "Marching Ants" flow through the graph.
4.  Your computer will speak a profound truth!

---

### Why this works

You just built a **Linear Pipeline**:
`[Data Source] -> [Intelligence] -> [Action]`

This simpler GitHub API returns plain text, so you didn't need any complex parsing nodes. To handle complex APIs (like Notion or Linear), you would use the **JSON Parser** node in between.

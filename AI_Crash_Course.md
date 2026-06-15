# AI Crash Course: From "Weights" to "Intelligence"

Since you're waiting for your model to train, here is a breakdown of what is actually happening inside your computer.

## 1. The "Brain" Analogy

- **The Architecture (e.g., Qwen 2.5)**: This is the structure of the brain. It defines how neurons are connected. It's empty shell code (Python/C++).
- **The Weights (`.safetensors` / `.gguf`)**: This is the **knowledge**. It's a massive list of numbers (parameters) that represent the strength of connections between neurons.
  - _Analogy_: If Architecture is the physical human brain, Weights are the memories and skills stored inside it.
- **The Model**: The combination of Architecture + Weights.

## 2. Training: How a Model Learns

### Phase 1: Pre-Training (The University Degree)

- **What**: The model reads the entire internet (Wikipedia, GitHub, Reddit, Books).
- **Goal**: Learn "Next Token Prediction". (e.g., "The capital of France is [Paris]").
- **Cost**: Huge. Takes thousands of GPUs and months. (Meta, Google, Alibaba do this).
- **Result**: A "Base Model" (Smart, but hard to control).

### Phase 2: Instruction Tuning (The Job Training)

- **What**: Humans give the model Q&A pairs. "Summarize this email", "Write python code".
- **Goal**: Learn to follow orders, not just predict text.
- **Result**: An "Instruct Model" (e.g., `Qwen2.5-7B-Instruct`). This is what we use.

### Phase 3: Fine-Tuning (The Specialist Course) <--- YOU ARE HERE

- **What**: We take a smart Instruct Model and show it _specific_ examples (your `train.jsonl` with [[appName]] Graphs).
- **Goal**: Make it an expert at _your_ specific task (generating JSON graphs).

## 3. The LoRA Revolution (Low-Rank Adaptation)

Training a full 7B model requires massive RAM (hundreds of GBs). How are we doing it on a Mac?

- **Full Fine-Tuning**: Changing all 7 Billion numbers. (Too expensive).
- **LoRA**: We freeze the big brain. We attach tiny, trainable "adapter" layers (matrices) on top. We only train these tiny layers.
  - _Analogy_: Instead of rewriting the entire textbook, we just add sticky notes with corrections.
  - **Result**: The file we save (`adapter.npz`) is tiny (~100MB), but it changes the model's behavior completely.

## 4. Quantization (4-bit)

- **Float16 (16-bit)**: Computers usually store numbers with high precision (16 bits per number). A 7B model takes ~14GB.
- **Int4 (4-bit)**: We compress the numbers. Instead of 65,000 possibilities per number, we only allow 16 possibilities.
- **Result**: The model shrinks to ~5GB. It gets slightly "dumber", but usually the drop in quality is negligible for a 4x speed/size gain.
- **This is why we downloaded the 5GB file instead of the 15GB one.**

## 5. The Players

- **Meta (Llama)**: The open-weight standard. Strong generalist.
- **Alibaba (Qwen)**: The current coding/math king.
- **DeepSeek**: A chinese lab famous for "Reasoning" models (R1) that "think" before they speak.
- **Mistral**: French lab, made the first great 7B model.

## 6. The Secret Sauce: How Giants Scale

You asked: _"How do they make models work good across a range of tasks?"_

It's not just "more data". It's about **Architecture** and **Feedback**.

### A. Diversity is Key (Transfer Learning)

If you train a model ONLY on code, it forgets how to speak English. If you train it ONLY on Shakespeare, it can't code.

- **The Trick**: Big companies train on a massive "soup" of data simultaneously (Code + Math + Literature + Law).
- **Why**: Learning logic in Python actually helps the model understand logic in Law. This is called **Transfer Learning**.

### B. RLHF (The "Vibe Check")

Base models are wild. If you ask "How to make a bomb?", they answer. If you ask "Tell me a joke", they might output random Wikipedia text.

- **RLHF (Reinforcement Learning from Human Feedback)**:
  1.  The model generates 4 answers.
  2.  A Human ranks them: "A is better than B".
  3.  The model learns a "Reward Model" to predict what humans like.
  4.  It optimizes itself to get high scores.
- **Result**: This makes the model "Helpful, Honest, and Harmless".

### C. MoE (Mixture of Experts)

How do you make a model smarter without making it slower?

- **Standard Model**: Every query activates 100% of the brain.
- **MoE (e.g., Mixtral, Groq's Llama)**: The brain is split into 8 "Experts" (Math expert, Coding expert, History expert...).
- **Routing**: A "Router" decides which 2 experts handle your specific question.
- **Result**: You get the smarts of a huge model, but the speed of a small one.

## 7. Making [[appName]] Great (Roadmap 2026)

You asked: _"How can we improve our training process? How do we make [[appName]] great?"_

You have the pipeline. Now you need **Volume** and **Evaluation**.

### A. Data is Fuel (Scale from 22 -> 1000)

- **Current State**: 22 examples. The model memorizes them. It's a "Toy".
- **Goal**: 1,000+ diverse examples.
- **Action**: Use the "Synthetic Data Generator" button we built. Generate 50 examples/day. Correct them manually. Add them to `train.jsonl`.
- **Why**: 1,000 examples covers 99% of edge cases.

### B. The "Flywheel" (Automated Feedback)

- **Current State**: Loop is Manual (You create data -> You train).
- **Future State**:
  1.  User asks [[appName]] to do something.
  2.  [[appName]] tries.
  3.  User fixes the graph (or edits it).
  4.  **[[appName]] saves the FIX as a new training example.** (We already built `TrainingDataRecorder` for this!).
- **Effect**: The model gets smarter _automatically_ every time you use it.

### C. DPO (Direct Preference Optimization)

- **What**: The modern version of RLHF (used by Llama 3).
- **Process**:
  - Give the model 2 choices.
  - Pick the better one.
  - Mathematically force the model to prefer the winner.
- **Benefit**: Much more stable than traditional PPO (Reinforcement Learning).

### D. Automated Evals

- Don't trust "Loss: 0.5". Trust **Unit Tests**.
- Create a test set of 50 hard prompts ("Build a snake game", "Analyze these 5 PDFs").
- Run the model on them _before_ and _after_ training.
- Count how many crash. If crashes go down, model is better.

## 8. The "Overfitting" Question

You noticed: _"Loss is 0.02. Won't it overfit with only 22 examples?"_
**Yes.** And right now, **that is the goal.**

- **Creative Overfitting (Bad)**: If you teach a poet only 22 poems, it just plagiarizes.
- **Syntax Overfitting (Good)**: If you teach a compiler how to write JSON, you WANT it to be rigid.
- **The Strategy**: We are turning a "Creative Writer" (Qwen) into a "Strict Engineer" ([[appName]]). We want it to _memorize_ our exact Node IDs (`logic.ai.groq`) and JSON structure.
- **Next Phase**: Once it follows the rules (0.02 loss), we feed it 1,000 diverse examples to bring back creativity _within_ those rules.

---

**Summary**: You are taking a generic genius (Qwen 2.5), using 4-bit compression to fit it on your Mac, and using LoRA (sticky notes) to teach it specifically how to build [[appName]] Apps.

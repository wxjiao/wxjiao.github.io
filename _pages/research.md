---
title: "Wenxiang Jiao (焦文祥) - Research"
layout: textlay
excerpt: "Research directions of Wenxiang Jiao: LLM agents, reasoning, safety, and psychology."
sitemap: false
permalink: /research/
---

# Research

My work studies how large language models reason, act, refuse unsafe requests, and portray psychological traits. I turn these questions into benchmarks, open-source systems, and training techniques for more reliable AI applications.

Four directions currently drive most of my research:

---

## General Agents

Building agents that perceive multiple modalities, use tools at scale, and collaborate with other agents to solve complex, long-horizon tasks.

- **DeepAgent** — a general reasoning agent that searches and composes tools from large-scale toolsets ([WWW 2026](https://arxiv.org/abs/2510.21618), [code](https://github.com/DeepExperience/DeepAgent)).
- **OmniGAIA** — a benchmark for omni-modal general AI assistants.
- **Multi-Agent Debate (MAD)** — eliciting divergent reasoning through structured agent interaction ([EMNLP 2024](https://arxiv.org/abs/2305.19118), [code](https://github.com/Skytliang/Multi-Agents-Debate)).

## LLM Reasoning

Pushing the frontier of mathematical, reflective, and long-chain reasoning while keeping inference efficient.

- **REA-RL** — reinforcement learning recipes for reasoning-efficient LLMs (ICLR 2026).
- **DeepCompress** — compressing long chains of thought without losing accuracy (ICLR 2026).

## LLM Safety

Risk awareness, jailbreak robustness, multilingual safety, and refusal behavior.

- **CipherChat** — studying how safety alignment generalizes (or fails) on cipher-based non-natural languages ([ICLR 2024](https://arxiv.org/abs/2308.06463), [project](https://llmcipherchat.github.io/)).
- **DeRTa** — improving refusal training so models decline unsafe requests without over-refusing benign ones.

## LLM Personality

Treating conversational AI as a subject of psychological measurement: emotion, personality, relationships, and motivations.

- **PsychoBench / PPBench** — evaluating the psychological portrayal of LLMs ([ICLR 2024 Oral](https://arxiv.org/abs/2310.01386), [code](https://github.com/CUHK-ARISE/PsychoBench)).
- **EmotionBench** — measuring how LLMs respond under emotionally charged scenarios.
- **Fints** — fine-grained interpretation of LLMs' affective and personality traits.

---

For a chronological list of all papers, see [Publications]({{ site.url }}{{ site.baseurl }}/publications/) or my [Google Scholar](https://scholar.google.com/citations?hl=zh-CN&user=CvtODukAAAAJ&view_op=list_works&sortby=pubdate) page.

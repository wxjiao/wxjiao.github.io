---
title: "Wenxiang Jiao (焦文祥) - Research"
layout: homelay
excerpt: "Research directions of Wenxiang Jiao: LLM agents, reasoning, safety, and psychology."
sitemap: false
permalink: /research/
---

<section markdown="0" class="page-header">
  <h1>Research</h1>
</section>

<section markdown="0" class="section-block intro-block">
  <p class="page-intro">
    My research studies how large language models reason, act as agents, refuse unsafe requests, and portray psychological traits. I develop benchmarks, open-source systems, and training/alignment methods to diagnose model failures and build more reliable AI applications.
  </p>
</section>

<section markdown="0" class="section-block">
  <div class="section-heading">
    <p class="section-label">General Agents</p>
  </div>
  <div class="section-body">
    <p>Multimodal, tool-using, and collaborative agents for complex, long-horizon tasks.</p>
  </div>
  <div class="publication-list">
    <article class="publication-row">
      <div class="publication-meta">ArXiv 2026</div>
      <div class="publication-main">
        <h3>MuSEAgent: A Multimodal Reasoning Agent with Stateful Experiences</h3>
        <p>Abstracts interaction data into atomic decision experiences via hindsight reasoning, then retrieves them at inference through policy-driven wide- and deep-search strategies, improving fine-grained visual perception and multimodal reasoning over trajectory-level retrieval baselines.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2603.27813">Paper</a>
          <a href="https://github.com/DeepExperience/MuSEAgent">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ArXiv 2026</div>
      <div class="publication-main">
        <h3>MMSkills: Towards Multimodal Skills for General Visual Agents</h3>
        <p>Represents reusable multimodal procedures as compact, state-conditioned skill packages — a textual procedure paired with runtime state cards and multi-view keyframes — generated from public trajectories and consulted by a branch-loaded skill agent at runtime.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2605.13527">Paper</a>
          <a href="https://github.com/DeepExperience/MMSkills">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">WWW 2026</div>
      <div class="publication-main">
        <h3>DeepAgent: A General Reasoning Agent with Scalable Toolsets</h3>
        <p>A reasoning agent capable of tackling general tasks by searching for and using the appropriate tools from over 16,000 RapidAPIs in an end-to-end agentic reasoning process.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2510.21618">Paper</a>
          <a href="https://github.com/DeepExperience/DeepAgent">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ArXiv 2026</div>
      <div class="publication-main">
        <h3>OmniGAIA: Towards Native Omni-Modal AI Agents</h3>
        <p>A benchmark and foundation agent for omni-modal AI assistants. OmniGAIA synthesizes multi-hop queries across video, audio, and image via an omni-modal event graph; the accompanying OmniAtlas agent uses active omni-modal perception trained with hindsight-guided tree exploration and OmniDPO.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2602.22897">Paper</a>
          <a href="https://github.com/RUC-NLPIR/OmniGAIA">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">EMNLP 2024</div>
      <div class="publication-main">
        <h3>Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate</h3>
        <p>The Multi-Agent Debate (MAD) framework addresses the Degeneration-of-Thought problem and explores divergent chains of thought through structured agent interaction.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2305.19118">Paper</a>
          <a href="https://github.com/Skytliang/Multi-Agents-Debate">Code</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section markdown="0" class="section-block">
  <div class="section-heading">
    <p class="section-label">LLM Reasoning</p>
  </div>
  <div class="section-body">
    <p>Mathematical, reflective, and efficient long-chain reasoning.</p>
  </div>
  <div class="publication-list">
    <article class="publication-row">
      <div class="publication-meta">ICLR 2026</div>
      <div class="publication-main">
        <h3>REA-RL: Reflection-Aware Online Reinforcement Learning for Efficient Large Reasoning Models</h3>
        <p>Tackles overthinking in large reasoning models with a small reflection model that enables parallel sampling and sequential revision during online RL, plus a reflection reward that preserves reflection ability — reducing inference cost by ~35% without sacrificing accuracy.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2505.19862">Paper</a>
          <a href="https://github.com/hexuandeng/REA-RL">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ICLR 2026</div>
      <div class="publication-main">
        <h3>DeepCompress: A Dual Reward Strategy for Dynamically Exploring and Compressing Reasoning Chains</h3>
        <p>A dual-reward RL framework that classifies problems as Simple or Hard in real time and adaptively shortens or extends Chain-of-Thought, improving both accuracy and token efficiency on challenging math benchmarks.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2510.27419">Paper</a>
          <a href="https://github.com/Skytliang/DeepCompress">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">EMNLP 2024</div>
      <div class="publication-main">
        <h3>Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate</h3>
        <p>Defines the Degeneration-of-Thought problem in self-reflection and addresses it with multi-agent debate over divergent chains of thought.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2305.19118">Paper</a>
          <a href="https://github.com/Skytliang/Multi-Agents-Debate">Code</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section markdown="0" class="section-block">
  <div class="section-heading">
    <p class="section-label">LLM Safety</p>
  </div>
  <div class="section-body">
    <p>Risk awareness, jailbreak robustness, multilingual safety, and refusal behavior.</p>
  </div>
  <div class="publication-list">
    <article class="publication-row">
      <div class="publication-meta">NeurIPS 2025 D&amp;B</div>
      <div class="publication-main">
        <h3>Towards Evaluating Proactive Risk Awareness of Multimodal Language Models</h3>
        <p>PaSBench evaluates proactive safety across 416 multimodal scenarios in five safety-critical domains. Top models such as Gemini-2.5-pro reach 64–71% accuracy but miss 45–55% of risks under repetition — failure analysis traces this to unstable proactive reasoning rather than missing knowledge.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2505.17455">Paper</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ACL 2025</div>
      <div class="publication-main">
        <h3>Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training (DeRTa)</h3>
        <p>Identifies a refusal position bias in safety-tuning data and proposes Decoupled Refusal Training: MLE with a harmful response prefix plus Reinforced Transition Optimization, letting LLaMA-3 and Mistral models refuse at any position throughout a harmful response without hurting performance.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2407.09121">Paper</a>
          <a href="https://github.com/RobustNLP/DeRTa">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ACL 2025 (Findings)</div>
      <div class="publication-main">
        <h3>Chain-of-Jailbreak Attack for Image Generation Models via Editing Step by Step</h3>
        <p>Decomposes a malicious image-generation query into innocuous sub-queries and iteratively edits the output; bypasses safeguards on GPT-4V, GPT-4o, and Gemini 1.5/Pro in over 60% of cases. A companion Think Twice Prompting defense blocks more than 95%.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2410.03869">Paper</a>
          <a href="https://github.com/Jarviswang94/Chain-of-Jailbreak">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">ICLR 2024</div>
      <div class="publication-main">
        <h3>GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher</h3>
        <p>CipherChat examines whether safety alignment generalizes to non-natural languages such as ciphers; GPT-4 understands ciphers well enough to produce unsafe outputs.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2308.06463">Paper</a>
          <a href="https://llmcipherchat.github.io/">Project</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section markdown="0" class="section-block">
  <div class="section-heading">
    <p class="section-label">LLM Personality</p>
  </div>
  <div class="section-body">
    <p>Emotion, personality, and psychological portrayals in conversational AI.</p>
  </div>
  <div class="publication-list">
    <article class="publication-row">
      <div class="publication-meta">ICLR 2024 Oral</div>
      <div class="publication-main">
        <h3>On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs</h3>
        <p>PPBench evaluates diverse psychological aspects of LLMs, including personality traits, interpersonal relationships, motivational tests, and emotional abilities.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2310.01386">Paper</a>
          <a href="https://github.com/CUHK-ARISE/PsychoBench">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">NeurIPS 2024</div>
      <div class="publication-main">
        <h3>Apathetic or Empathetic? Evaluating LLMs' Emotional Alignments with Humans</h3>
        <p>Uses emotion appraisal theory to test how LLMs' feelings shift across 400+ situations grouped into 36 factors, benchmarked against responses from 1,200+ human subjects. Models including GPT-4, Mixtral-8x22B, and LLaMA-3.1 respond appropriately in some cases but fail to align with human emotional behavior or connect similar situations.</p>
        <div class="inline-links">
          <a href="https://arxiv.org/abs/2308.03656">Paper</a>
          <a href="https://github.com/CUHK-ARISE/EmotionBench">Code</a>
        </div>
      </div>
    </article>
    <article class="publication-row">
      <div class="publication-meta">EMNLP 2024</div>
      <div class="publication-main">
        <h3>On the Reliability of Psychological Scales on Large Language Models</h3>
        <p>Across 2,500 settings per model on GPT-3.5/4, Gemini-Pro, and LLaMA-3.1, shows that LLMs respond consistently to the Big Five Inventory. Further demonstrates GPT-3.5 can emulate diverse personalities and represent specific population groups when given targeted prompts.</p>
        <div class="inline-links">
          <a href="https://aclanthology.org/2024.emnlp-main.354/">Paper</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section markdown="0" class="section-block">
  <p class="section-link">For the chronological list of all papers, see <a href="{{ site.url }}{{ site.baseurl }}/publications/">Publications</a> or my <a href="https://scholar.google.com/citations?hl=zh-CN&user=CvtODukAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a> page.</p>
</section>

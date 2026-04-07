---
title: "Wenxiang Jiao (焦文祥) - Home"
layout: homelay
excerpt: "Wenxiang's new page."
sitemap: false
permalink: /
---

<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/slider5.jpg" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/slider6.jpg" alt="Slide 2" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/slider0.jpeg" alt="Slide 3" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/slider1.jpeg" alt="Slide 4" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/slider2.jpeg" alt="Slide 5" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div markdown="0">
<style>
  .sec-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 40px 0 18px;
  }
  .sec-divider-label {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    white-space: nowrap;
    letter-spacing: 0.01em;
  }
  .sec-divider-line {
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
  .subsec-label {
    font-size: 1.6rem;
    font-weight: 600;
    color: #3b82f6;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 24px 0 6px;
    padding-left: 10px;
    border-left: 3px solid #3b82f6;
  }
</style>
</div>


<div markdown="0"><div class="sec-divider"><span class="sec-divider-label">Biography</span><span class="sec-divider-line"></span></div></div>

Hi, this is **Wenxiang Jiao (焦文祥)**, a researcher focused on large language models — their reasoning capabilities, agentic behavior, safety, and psychological properties. I build benchmarks, agents, and alignment techniques that push LLMs toward being more capable, reliable, and self-aware.
I received my Ph.D degree from the [Chinese University of Hong Kong](https://www.cuhk.edu.hk/chinese/index.html) in 2021, under the supervision of [Prof. Irwin King](https://www.cse.cuhk.edu.hk/irwin.king/home) and [Prof. Michael R. Lyu](https://www.cse.cuhk.edu.hk/lyu/). Before that, I received my Bachelor degree and Mphil degree at [Nanjing University](https://www.nju.edu.cn) in 2015 and 2017, respectively.


<div markdown="0"><div class="sec-divider"><span class="sec-divider-label">Experiences</span><span class="sec-divider-line"></span></div></div>

- Xiaohongshu Inc. (2025 - Present), LLM Application Algorithm Expert
- Tencent AI Lab (2021 - 2025), Senior Researcher
- Tencent AI Lab (2019 - 2021), Research Intern


<div markdown="0"><div class="sec-divider"><span class="sec-divider-label">Research</span><span class="sec-divider-line"></span></div></div>

Currently, I focus on Large Language Models (LLMs), including various interesting topics.
Representative works include `ChatGPT Translator`, `Multi-Agent Debate`, `CipherChat`, `PsychoBench`, `DeepAgent`, `OmniGAIA`.

<div markdown="0"><div class="subsec-label">LLM Agents &amp; Reasoning</div></div>

1. OmniGAIA: Towards Native Omni-Modal AI Agents. Under Review 2026.
2. Tool-Genesis: A Task-Driven Tool Creation Benchmark for Self-Evolving Language Agent. Under Review 2026.
3. Agent2World: Learning to Generate Symbolic World Models via Adaptive Multi-Agent Feedback. Under Review 2026.
4. LoopTool: Closing the Data–Training Loop for Robust LLM Tool Calls. ACL 2026.
5. Curing Miracle Steps in LLM Mathematical Reasoning with Rubric Rewards. ACL 2026.
6. DeepCompress: A Dual Reward Strategy for Dynamically Exploring and Compressing Reasoning Chains. ICLR 2026.
7. REA-RL: Reflection-Aware Online Reinforcement Learning for Efficient Large Reasoning Models. ICLR 2026.
8. **DeepAgent: A General Reasoning Agent with Scalable Toolsets. WWW 2026.**
9. Learning to Ask: When LLM Agents Meet Unclear Instruction. EMNLP 2025.
10. How Far Are We on the Decision-Making of LLMs? Evaluating LLMs' Gaming Ability in Multi-Agent Environments. ICLR 2025.
11. **Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate. EMNLP 2024.**

<div markdown="0"><div class="subsec-label">LLM Personality</div></div>

1. Fints: Efficient Inference-Time Personalization for LLMs with Fine-Grained Instance-Tailored Steering. Under Review 2025.
2. Emotionally Numb or Empathetic? Evaluating How LLMs Feel using EmotionBench. NeurIPS 2024.
3. On the reliability of psychological scales on large language models. EMNLP 2024.
4. **On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs. ICLR 2024 Oral.**

<div markdown="0"><div class="subsec-label">LLM Safety</div></div>

1. Towards Evaluating Proactive Risk Awareness of Multimodal Language Models. NeurIPS 2025 D&B.
2. Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training. ACL 2025.
3. Chain-of-Jailbreak Attack for Image Generation Models via Step by Step Editing. Findings of ACL 2025.
4. Not all countries celebrate thanksgiving: On the cultural dominance in large language models. ACL 2024.
5. All languages matter: On the multilingual safety of large language models. Findings of ACL 2024.
6. **GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher. ICLR 2024.**

<div markdown="0"><div class="subsec-label">LLM Continual Learning</div></div>

1. DRPruning: Efficient Large Language Model Pruning through Distributionally Robust Optimization. ACL 2025.
2. NewTerm: Benchmarking Real-Time New Terms for Large Language Models with Annual Updates. NeurIPS 2024 D&B.
3. Tencent's Multilingual Machine Translation System for WMT22 Large-Scale African Languages. WMT 2022.

<div markdown="0"><div class="subsec-label">Sign Language Translation</div></div>

1. Improving Gloss-free Sign Language Translation by Reducing Representation Density. NeurIPS 2024.
2. Unsupervised Sign Language Translation and Generation. Findings of ACL 2024.
3. Cross-modality Data Augmentation for End-to-End Sign Language Translation. Findings of EMNLP 2023.


<div markdown="0"><div class="sec-divider"><span class="sec-divider-label">Spotlight Projects</span><span class="sec-divider-line"></span></div></div>

<div markdown="0">
{% include spotlight-projects.html %}
</div>


<div markdown="0">
{% include visitor-map.html %}
</div>

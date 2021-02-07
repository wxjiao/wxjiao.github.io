---
title: "Mrinmaya's Lab - Teaching"
layout: textlay
excerpt: "Teaching"
sitemap: false
permalink: /teaching
---

# Computational Semantics for Natural Language Processing
### <font color=gray>ETH Zürich, Spring Semester 2021</font>: [Course catalog](http://www.vvz.ethz.ch/lerneinheitPre.do?semkez=2021S&lerneinheitId=154041&lang=en)

## Course Description
This course presents an introduction to Natural language processing (NLP) with an emphasis on computational semantics i.e. the process of constructing and reasoning with meaning representations of natural language text.

The objective of the course is to learn about various topics in computational semantics and its importance in natural language processing methodology and research. Exercises and the project will be key parts of the course so the students will be able to gain hands-on experience with state-of-the-art techniques in the field.

### **Grading**
The final assessment will be a combination of classroom participation, graded exercises and the project. There will be 3 exercise sets which will be a mix of theoretical and implementation problems. Exercises will be released roughly every 4 weeks, and will total to 30% of your grade. Classroom participation (including a research paper presentation) will account for 20% of the grade. The project will account of the rest of the grade (50%). There will be no written exams.

**Lectures:** Thu 10-12h CAB G 51

**Discussion Sections:**  Thu 15-16 CAB G 59

**Textbooks:** TBD

## News
**08.02**    Class website is online!


|Lecture|Description|Course Materials|Events|
|:--|:--|:--|:--|
|1|Introduction, The Distributional Hypothesis and Word Vectors|Suggested Readings:|Assignment 1 out|
|||[1. Word2Vec Tutorial - The Skip-Gram Model](http://mccormickml.com/2016/04/19/word2vec-tutorial-the-skip-gram-model/)||
|||[2. Efficient Estimation of Word Representations in Vector Space (original word2vec paper)](http://arxiv.org/pdf/1301.3781.pdf)||
|||[3. Distributed Representations of Words and Phrases and their Compositionality (negative sampling paper)](http://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf)||
|2|Word Vectors 2, Word Senses and Sentence Vectors|Suggested Readings:||
||(Recursive Neural Networks)|[1. GloVe: Global Vectors for Word Representation (original GloVe paper)](http://nlp.stanford.edu/pubs/glove.pdf)||
|||[2. Evaluation methods for unsupervised word embeddings](http://www.aclweb.org/anthology/D15-1036)||
|||Additional Readings:||
|||[1. A Latent Variable Model Approach to PMI-based Word Embeddings](http://aclweb.org/anthology/Q16-1028)||
|||[2. Linear Algebraic Structure of Word Senses, with Applications to Polysemy](https://transacl.org/ojs/index.php/tacl/article/viewFile/1346/320)||
|||[3. On the Dimensionality of Word Embedding.](https://papers.nips.cc/paper/7368-on-the-dimensionality-of-word-embedding.pdf)||
|||[4. Word senses and Word embeddings chapter in Jurafsky and Martin](https://web.stanford.edu/)||
|Voluntary|Python, Pytorch and Tensorflow review session by TAs|Suggested Readings:||
|||[1. Review of differential calculus](http://web.stanford.edu/class/cs224n/readings/review-differential-calculus.pdf)||
|||Additional Readings:||
|||[1. Natural Language Processing (Almost) from Scratch](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf)||
||Matrix Calculus and Backpropagation by TAs|Suggested Readings:||
|||[1. CS231n notes on network architectures](http://cs231n.github.io/neural-networks-1/)||
|||[2. CS231n notes on backprop](http://cs231n.github.io/optimization-2/)||
|||[3. Learning Representations by Backpropagating Errors](http://www.iro.umontreal.ca/)||
|||[4. Derivatives, Backpropagation, and Vectorization](http://cs231n.stanford.edu/handouts/derivatives.pdf)||
|||[5. Yes you should understand backprop](https://medium.com/)||
|3|From words to sentences... Recurrent Neural Networks for Language|Suggested Readings:||
||Case Study: Language Modelling|[1. N-gram Language Models (textbook chapter)](https://web.stanford.edu/)||
|||[2. The Unreasonable Effectiveness of Recurrent Neural Networks (blog post overview)](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)||
|||[3. Sequence Modeling: Recurrent and Recursive Neural Nets (Sections 10.1 and 10.2)](http://www.deeplearningbook.org/contents/rnn.html)||
|||Suggested Readings (RNNs):||
|||[1. Sequence Modeling: Recurrent and Recursive Neural Nets (Sections 10.3, 10.5, 10.7-10.12)](http://www.deeplearningbook.org/contents/rnn.html)||
|||[2. Learning long-term dependencies with gradient descent is difficult (one of the original vanishing gradient papers)](http://ai.dinfo.unifi.it/paolo/ps/tnn-94-gradient.pdf)||
|||[3. On the difficulty of training Recurrent Neural Networks (proof of vanishing gradient problem)](https://arxiv.org/pdf/1211.5063.pdf)||
|||[4. Vanishing Gradients Jupyter Notebook (demo for feedforward networks)](https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1174/lectures/vanishing_grad_example.html)||
|||[5. Understanding LSTM Networks (blog post overview)](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)||
|4|Looking within a word (Subword modelling)|Suggested Readings (CNNs):|Assignment 2 out|
||ConvNets for NLP |[1. Convolutional Neural Networks for Sentence Classification](https://arxiv.org/abs/1408.5882.pdf)||
|||[2. Improving neural networks by preventing co-adaptation of feature detectors](https://arxiv.org/abs/1207.0580)||
|||[3. A Convolutional Neural Network for Modelling Sentences](https://arxiv.org/pdf/1404.2188.pdf)||
|||Suggested readings:||
|||[1. Achieving Open Vocabulary Neural Machine Translation with Hybrid Word-Character Models](https://arxiv.org/abs/1604.00788.pdf)||
|||[2. Revisiting Character-Based Neural Machine Translation with Capacity and Compression](https://arxiv.org/pdf/1808.09943.pdf)||
|5|The Syntax, Semantics Interface: |Suggested Readings (Dependency Parsing):||
||Dependency Parsing, Constituency Parsing, and Combinatory Categorial Grammars|[1. Incrementality in Deterministic Dependency Parsing](https://www.aclweb.org/anthology/W/W04/W04-0308.pdf)||
|||[2. A Fast and Accurate Dependency Parser using Neural Networks](https://www.emnlp2014.org/papers/pdf/EMNLP2014082.pdf)||
|||[3. Dependency Parsing](http://www.morganclaypool.com/doi/abs/10.2200/S00169ED1V01Y200901HLT002)||
|||[4. Globally Normalized Transition-Based Neural Networks](https://arxiv.org/pdf/1603.06042.pdf)||
|||Suggested Readings (Constituency Parsing):||
|||[1. Parsing with Compositional Vector Grammars.](http://www.aclweb.org/anthology/P13-1045)||
|||[2. Constituency Parsing with a Self-Attentive Encoder](https://arxiv.org/pdf/1805.01052.pdf)||
|6|NLU beyond a sentence|Suggested Readings:||
||Seq2Seq and Attention|[1. Sequence to Sequence Learning with Neural Networks (original seq2seq NMT paper)](https://arxiv.org/pdf/1409.3215.pdf)||
||Case Study: Sentence Similarity, Textual Entailment and Machine Comprehension|[2. Sequence Transduction with Recurrent Neural Networks (early seq2seq speech recognition paper)](https://arxiv.org/pdf/1211.3711.pdf)||
|||[3. Neural Machine Translation by Jointly Learning to Align and Translate (original seq2seq+attention paper)](https://arxiv.org/pdf/1409.0473.pdf)||
|||[4. Attention and Augmented Recurrent Neural Networks (blog post overview)](https://distill.pub/2016/augmented-rnns/)||
|||[5. Massive Exploration of Neural Machine Translation Architectures (practical advice for hyperparameter choices)](https://arxiv.org/pdf/1703.03906.pdf)||
|7|Predicate Argument Structures (Semantic Role Labelling, Frame Semantics, etc.)|Suggested Reading|Assignment 3 out|
|||[1. Semantic Role Labelling chapter of Jurafsky and Martin](https://web.stanford.edu/)||
|||[2. Jointly Predicting Predicates and Arguments in Neural Semantic Role Labeling](http://aclweb.org/anthology/P18-2058)||
|8|Logical Representations of Language and Reasoning|Suggested Readings:||
|||[1. Logical Representations chapter of Jurafsky and Martin](https://web.stanford.edu/)||
|||||
||Practical Tips for Final Projects|Suggested Readings:|Project Proposal|
||(by TAs)|[1. Practical Methodology (Deep Learning book chapter)](https://www.deeplearningbook.org/contents/guidelines.html)||
|9|Transformers and Contextual Word Representations (BERT, etc.)|Suggested Readings:||
|||[1. Attention Is All You Need](https://arxiv.org/abs/1706.03762.pdf)||
|||[2. The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)||
|||[3. Transformer (Google AI blog post)](https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html)||
|||[4. Layer Normalization](https://arxiv.org/pdf/1607.06450.pdf)||
|||Suggested Readings:||
|||[1. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/pdf/1810.04805.pdf)||
|||[2. Contextual Word Representations: A Contextual Introduction.](https://arxiv.org/abs/1902.06006.pdf)||
|||[3. The Illustrated BERT, ELMo, and co.](http://jalammar.github.io/illustrated-bert/)||
|10|Natural Language Generation|Suggested Readings:||
||Case Study: Summarization and Conversation Modelling|[1. The Curious Case of Neural Text Degeneration.](https://arxiv.org/abs/1904.09751.pdf)||
|||[2. Get To The Point: Summarization with Pointer-Generator Networks.](https://arxiv.org/abs/1704.04368.pdf)||
|||[3. Hierarchical Neural Story Generation.](https://arxiv.org/abs/1805.04833.pdf)||
|||[4. How NOT To Evaluate Your Dialogue System.](https://arxiv.org/abs/1603.08023.pdf)||
|11|Modelling and tracking entities: NER, coreference and information extraction (entity and relation extraction)|Suggested Readings:||
|||[1. Coreference Resolution chapter of Jurafsky and Martin](https://web.stanford.edu/)||
|||[2. End-to-end Neural Coreference Resolution](https://arxiv.org/pdf/1707.07045.pdf)||
|||[3. Information Extraction chapter of Jurafsky and Martin](https://web.stanford.edu/)||
|12|Language + {Knowledge, Vision, Action, Speech}|Suggested Readings:||
|||||
|||||
|13|Optional lecture: Analysis and Interpretability of Neural NLP|Suggested Readings:||
|||||
|||||
||Final project presentation (or poster session)|||
||Final project report submission|||

## Course Project/Assignment

TBD

### Submission Instructions

TBD

## Materials
TBD
-   [Project Guidelines]
-   [Course Assignment: Part 1]

## Contact

You can ask questions on  [piazza](https://piazza.com/ethz.ch/spring2021/263500000). Please post questions there, so others can see them and share in the discussion. If you have questions which are not of general interest, please don’t hesitate to contact us directly.

|||
|:--|:--|
|Lecturer|[Mrinmaya Sachan](http://www.mrinmaya.io/)|
|Teaching Assistants|[Jiaoda Li](https://rycolab.io/authors/jiaoda/), [Shehzaad Dhuliawala](https://people.cs.umass.edu/~sdhuliawala/), [Yifan Hou](https://yifan-h.github.io/)|
|||

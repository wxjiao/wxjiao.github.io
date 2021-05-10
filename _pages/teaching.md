---
title: "Mrinmaya's Lab - Teaching"
layout: teaching
excerpt: "Teaching"
sitemap: false
permalink: /teaching
---

# Computational Semantics for Natural Language Processing
### <font color=gray>ETH Zürich, Spring Semester 2021</font>: [Course catalog](http://www.vvz.ethz.ch/lerneinheitPre.do?semkez=2021S&lerneinheitId=154041&lang=en)

___

## Course Description
This course presents an introduction to Natural language processing (NLP) with an emphasis on computational semantics i.e. the process of constructing and reasoning with meaning representations of natural language text.

The objective of the course is to learn about various topics in computational semantics and its importance in natural language processing methodology and research. Exercises and the project will be key parts of the course so the students will be able to gain hands-on experience with state-of-the-art techniques in the field.

___

### **Grading**
The final assessment will be a combination of classroom participation, graded exercises and the project. There will be 3 exercise sets which will be a mix of theoretical and implementation problems. Exercises will be released roughly every 4 weeks, and will total to 30% of your grade. Classroom participation (including a research paper presentation) will account for 20% of the grade. The project will account of the rest of the grade (50%). There will be no written exams.

**Lectures:** Thu 10:15-12:00 Zoom link: [https://ethz.zoom.us/j/94564146531](https://ethz.zoom.us/j/94564146531)

**Discussion Sections:**  Thu 15:15-16:00 Same zoom link

**piazza:** [https://piazza.com/class/kko44md55os2qt](https://piazza.com/class/kko44md55os2qt)

**Textbooks:**
We will not follow any particular textbook. We will draw material from a number of research papers.
However, you might find the following textbooks useful:
1. [Introduction to Natural Language Processing by Jacob Eisenstein](https://www.amazon.de/Jacob-Eisenstein/dp/0262042843/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30OMHV1C018JY&dchild=1&keywords=introduction+to+natural+language+processing&qid=1598878964&sprefix=introduction+to+na%2Caps%2C148&sr=8-1)
2. [Speech and Language Processing by Jurafsky and Martin](https://web.stanford.edu/~jurafsky/slp3/)

## News
**18.02**    Class website is online!

___

## Course Schedule

|:--|:--|:--|:--|:--|
|&nbsp;<b>Lecture</b>|<b>Date</b>|<b>Description</b>|<b>Course Materials</b>| <b>Events</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|&nbsp;&nbsp;1|&nbsp;25.02&nbsp;&nbsp;&nbsp;&nbsp;|<b>Introduction</b>|[Diagnostic Quiz](https://polybox.ethz.ch/index.php/s/YCTThVpOd5Cu2AO) [Answers to quiz](https://polybox.ethz.ch/index.php/s/7VPcHOmIxQD5AcX)|Presentation Preference Indication|
|&nbsp;&nbsp;2|&nbsp;04.03&nbsp;|<b>The Distributional Hypothesis and Word Vectors</b>|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Word2Vec Tutorial - The Skip-Gram Model](http://mccormickml.com/2016/04/19/word2vec-tutorial-the-skip-gram-model/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Efficient Estimation of Word Representations in Vector Space](http://arxiv.org/pdf/1301.3781.pdf) (original word2vec paper) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Distributed Representations of Words and Phrases and their Compositionality](http://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) (negative sampling paper)||
|&nbsp;&nbsp;3|&nbsp;11.03&nbsp;|<b>Word Vectors 2, Word Senses and Sentence Vectors</b> <br><br> (Recursive Neural Networks)|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [GloVe: Global Vectors for Word Representation](http://nlp.stanford.edu/pubs/glove.pdf) (original GloVe paper) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Neural Word Embedding as Implicit Matrix Factorization](https://papers.nips.cc/paper/2014/file/feab05aa91085b7a8012516bc3533958-Paper.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Evaluation Methods for Unsupervised Word Embeddings](http://www.aclweb.org/anthology/D15-1036) <br>&nbsp;&nbsp;&nbsp;&nbsp;  4. [Word Senses and Word Embeddings Chapter in Jurafsky and Martin](https://web.stanford.edu/~jurafsky/slp3/18.pdf) <br> Optional Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [A Latent Variable Model Approach to PMI-based Word Embeddings](http://aclweb.org/anthology/Q16-1028) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Linear Algebraic Structure of Word Senses, with Applications to Polysemy](https://transacl.org/ojs/index.php/tacl/article/viewFile/1346/320) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [On the Dimensionality of Word Embedding.](https://papers.nips.cc/paper/7368-on-the-dimensionality-of-word-embedding.pdf) ||
|&nbsp;Voluntary |&nbsp;11.03&nbsp;| Python, PyTorch review session by TAs|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Review of Differential Calculus](http://web.stanford.edu/class/cs224n/readings/review-differential-calculus.pdf) <br> Additional Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Natural Language Processing (Almost) from Scratch](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf)||
|&nbsp;Voluntary |&nbsp;11.03&nbsp;| Matrix Calculus and Backpropagation by TAs|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [CS231n notes on network architectures](http://cs231n.github.io/neural-networks-1/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [CS231n notes on backprop](http://cs231n.github.io/optimization-2/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Learning Representations by Backpropagating Errors](http://www.iro.umontreal.ca/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 4. [Derivatives, Backpropagation, and Vectorization](http://cs231n.stanford.edu/handouts/derivatives.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 5. [Yes you should understand backprop](https://medium.com/)||
|&nbsp;4| &nbsp;18.03&nbsp; |<b>From words to sentences...</b> <br><br> Recurrent Neural Networks for Language <br><br> Case Study: Language Modelling|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [N-gram Language Models](https://web.stanford.edu/~jurafsky/slp3/3.pdf) (textbook chapter) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) (blog post overview) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Sequence Modeling: Recurrent and Recursive Neural Nets](http://www.deeplearningbook.org/contents/rnn.html) (Sections 10.1 and 10.2) <br> Optional Readings (RNNs): <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Sequence Modeling: Recurrent and Recursive Neural Nets](http://www.deeplearningbook.org/contents/rnn.html) (Sections 10.3, 10.5, 10.7-10.12) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Learning Long-term Dependencies with Gradient Descent is Difficult](http://ai.dinfo.unifi.it/paolo/ps/tnn-94-gradient.pdf) (one of the original vanishing gradient papers) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [On the Difficulty of Training Recurrent Neural Networks](https://arxiv.org/pdf/1211.5063.pdf) (proof of vanishing gradient problem) <br>&nbsp;&nbsp;&nbsp;&nbsp; 4. [Vanishing Gradients Jupyter Notebook](https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1174/lectures/vanishing_grad_example.html) (demo for feedforward networks) <br>&nbsp;&nbsp;&nbsp;&nbsp; 5. [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) (blog post overview)|Project group formation due <br><br> Assignment 1 out|
|&nbsp;5|&nbsp;25.03&nbsp;| <b>NLU beyond a sentence</b> <br><br> Seq2Seq and Attention <br><br> Case Study: Sentence Similarity, Textual Entailment and Machine Comprehension | Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Sequence to Sequence Learning with Neural Networks](https://arxiv.org/pdf/1409.3215.pdf) (original seq2seq NMT paper) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Sequence Transduction with Recurrent Neural Networks](https://arxiv.org/pdf/1211.3711.pdf) (early seq2seq speech recognition paper) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Neural Machine Translation by Jointly Learning to Align and Translate](https://arxiv.org/pdf/1409.0473.pdf) (original seq2seq+attention paper) <br>Optional Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Attention and Augmented Recurrent Neural Networks](https://distill.pub/2016/augmented-rnns/) (blog post overview) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Massive Exploration of Neural Machine Translation Architectures](https://arxiv.org/pdf/1703.03906.pdf) (practical advice for hyperparameter choices)|List of TA mentored projects released|
|&nbsp;6|&nbsp;01.04&nbsp;|<b>Syntax</b> <br><br> Dependency and Constituency Parsing|Suggested Readings (Dependency Parsing): <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Incrementality in Deterministic Dependency Parsing](https://www.aclweb.org/anthology/W/W04/W04-0308.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [A Fast and Accurate Dependency Parser using Neural Networks](https://www.emnlp2014.org/papers/pdf/EMNLP2014082.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Globally Normalized Transition-Based Neural Networks](https://arxiv.org/pdf/1603.06042.pdf) <br> Suggested Readings (Constituency Parsing): <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Parsing with Compositional Vector Grammars.](http://www.aclweb.org/anthology/P13-1045) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Constituency Parsing with a Self-Attentive Encoder](https://arxiv.org/pdf/1805.01052.pdf)||
|&nbsp;<i>Easter</i>|&nbsp;08.04&nbsp;||||
|&nbsp;7|&nbsp;15.04&nbsp;| <b>Syntax II and Predicate Argument Structures</b> <br><br> (Semantic Role Labelling, Frame Semantics, etc.)|Suggested Reading: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Semantic Role Labelling chapter of Jurafsky and Martin](https://web.stanford.edu/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Jointly Predicting Predicates and Arguments in Neural Semantic Role Labeling](http://aclweb.org/anthology/P18-2058)|Assignment 2 out <br><br> Assignment 1 due|
||&nbsp;15.04&nbsp;|Discussion on Final Projects|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Practical Methodology](https://www.deeplearningbook.org/contents/guidelines.html) (<i>Deep Learning</i> book chapter)||
|&nbsp;8|&nbsp;22.04&nbsp;| <b>Predicate Argument Structures II</b> <br><br> (Semantic Role Labelling, Frame Semantics, etc.)||Project Proposal due|
|&nbsp;9|&nbsp;29.04&nbsp;|<b>Formal Representations of Language Meaning</b>|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. Logical Representations chapter of [Jurafsky and Martin](https://web.stanford.edu/)||
|&nbsp;10|&nbsp;06.05&nbsp;|<b>Transformers and Contextual Word Representations</b> (BERT, etc.) <br><br> Guest lecture by Manzil Zaheer (Google)|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Attention Is All You Need](https://arxiv.org/abs/1706.03762.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) <br> Optional Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/pdf/1810.04805.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Contextual Word Representations: A Contextual Introduction.](https://arxiv.org/abs/1902.06006.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [The Illustrated BERT, ELMo, and co.](http://jalammar.github.io/illustrated-bert/)|Assignment 2 due|
|&nbsp;11|&nbsp;13.05&nbsp;|No class due to the Ascension break|||
|&nbsp;11|&nbsp;20.05&nbsp;|<b>Natural Language Generation</b> <br><br> Case Study: Summarization and Conversation Modelling |Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [The Curious Case of Neural Text Degeneration](https://arxiv.org/abs/1904.09751.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Get To The Point: Summarization with Pointer-Generator Networks.](https://arxiv.org/abs/1704.04368.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Hierarchical Neural Story Generation](https://arxiv.org/abs/1805.04833.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 4. [How NOT To Evaluate Your Dialogue System](https://arxiv.org/abs/1603.08023.pdf)|Assignment 3 out|
|&nbsp;12|&nbsp;27.05&nbsp;|<b>Modelling and tracking entities:</b> NER, coreference and information extraction (entity and relation extraction)|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Coreference Resolution chapter of Jurafsky and Martin](https://web.stanford.edu/) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [End-to-end Neural Coreference Resolution](https://arxiv.org/pdf/1707.07045.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 3. [Information Extraction chapter of Jurafsky and Martin](https://web.stanford.edu/)||
|&nbsp;13|&nbsp;03.06&nbsp;|<b>Language + {Knowledge, Vision, Action}</b>|Suggested Readings: <br>&nbsp;&nbsp;&nbsp;&nbsp; 1. [Language Models as Knowledge Bases?](https://www.aclweb.org/anthology/D19-1250.pdf) <br>&nbsp;&nbsp;&nbsp;&nbsp; 2. [Knowledge Enhanced Contextual Word Representations](https://arxiv.org/abs/1909.04164)||
||10.06|||Assignment 3 due|
||17.06|||Project Progress Report due|
||&nbsp;<b>08.08</b>&nbsp;|<b>Final project presentation (or poster session)</b>|||
||&nbsp;<b>08.08</b>&nbsp;|<b>Final project report submission</b>|||

___

## Assignment Submission Instructions

[Moodle](https://moodle-app2.let.ethz.ch/)

## Materials

-   [Lecture Slides & Student Presentation Slides (Moodle)](https://moodle-app2.let.ethz.ch/)
-   [Project Guidelines](https://docs.google.com/document/d/1b5FNlXqXsMsld83lmoE8EFsHEEuHRmQEP_EPOyAkwAU/edit)
-   [Assignments (Moodle)](https://moodle-app2.let.ethz.ch/)

___

## Contact

You can ask questions on  [piazza](https://piazza.com/ethz.ch/spring2021/263500000). Please post questions there, so others can see them and share in the discussion. If you have questions which are not of general interest, please don’t hesitate to contact us directly.

|:--|:--|
|Lecturer| [Mrinmaya Sachan](http://www.mrinmaya.io/)|
|Teaching Assistants| [Jiaoda Li](https://rycolab.io/authors/jiaoda/),&nbsp; [Shehzaad Dhuliawala](https://people.cs.umass.edu/~sdhuliawala/),&nbsp; [Yifan Hou](https://yifan-h.github.io/)|

___

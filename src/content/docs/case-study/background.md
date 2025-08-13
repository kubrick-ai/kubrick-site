---
title: Background
sidebar:
  order: 2
---

### AI, LLMs and RAG

Vector embeddings are fundamental to modern AI, providing a way for machines to
interpret and understand unstructured data. By transforming raw information—like
text, images, audio, and video—into numerical representations, these embeddings
allow AI systems to find meaningful connections and relationships between
different types of data.

To fully appreciate how a platform like Kubrick makes video search possible,
it's essential to first understand the core concepts behind this powerful
technology, from the basics of vectors and multimodal embeddings to how they are
leveraged by large language models and retrieval-augmented generation to create
intelligent applications.

#### Vectors and Embeddings

A vector is simply an n-length array of numbers where each index represents a
dimension, or feature of that data. Machines are unable to comprehend the world
the same way that humans do. They cannot "see" images or "read" text, instead
they rely on interpreting numerical representations of data to handle and
process information. For example computers use ASCII encoding to interpret the
letter "A" as the number 65 or hexadecimal number values to represent color in
pixels.

As machine learning has evolved, vectors have emerged as an effective way of
encoding complex unstructured data into a numerical representation. Embedding
models are machine learning tools that transform raw data into dense vector
representations that capture their semantic meaning. These models are trained on
large datasets to learn patterns and relationships between inputs, and encode
this understanding into vectors. The process typically involves mapping inputs
into a high-dimensional space such that similar inputs (in terms of meaning or
context) are placed closer together, while dissimilar ones are pushed further
apart.

![Vector Embeddings](@assets/vector_embeddings.png)

The resulting vector is called an embedding. These vectors exist in a
high-dimensional embedding space where proximity reflects semantic similarity.
For instance, the words "king," "tsar," and "emperor" may generate embeddings
that are geometrically close, despite their differences. Conversely, "dog" and
"hotdog", while lexically similar, would produce distant embeddings. This
proximity enables systems to reason about meaning, not just keywords.

#### Multimodal Embeddings

In this context, a modality refers to a high-level category of data, such as
text, image, or audio. Multimodal embeddings allow features from different
modalities to be represented in a shared semantic space. For example, a sentence
like "a red sports car speeding down a highway" and an image of that same car
will result in vectors that are "close together" in the embedding space.

Multimodal embeddings are crucial in domains like video, where data is
inherently composite—combining visuals, audio, speech, and the dimension of
time. Effective systems must interpret these signals in relation to each other
and track how they evolve over time. By embedding them into a shared semantic
space, multimodal systems enable cross-modal retrieval, generate richer
insights, and deliver more intuitive user experiences, aligning machine
understanding more closely with human perception.

#### LLMs and AI Applications

![full architecture](@assets/full_architecture.svg)

Over the last few years, artificial intelligence has transformed the world of
software development. Large language models (LLMs) like OpenAI's ChatGPT or
Anthropic's Claude have opened the door to a new class of intelligent
applications, from autonomous agents to context-aware copilots and
conversational interfaces.

App developers are increasingly building AI agents that rely on LLMs to perform
tasks, make decisions, and interface with other systems. These agents can be
highly capable, but LLMs also come with their own set of tradeoffs that product
teams must design around. A common challenge is the fact that LLMs are trained
on static snapshots of internet-scale data. This means they lack up-to-date or
domain-specific knowledge—especially critical in enterprise settings where
internal documents, proprietary systems, or real-time events are essential to
effective decision-making.

To overcome the knowledge gap, developers supplement LLM prompts with additional
information to provide LLMs with context for a given task. While adding external
context improves performance, it introduces new constraints. Passing too much
information can be as detrimental as providing too little. Irrelevant or noisy
context may cause the model to make incorrect assumptions or become confused.
Furthermore, context incurs a cost in both compute and dollars.

Consider a developer designing an AI learning assistant that allows students to
ask questions about a series of lecture videos. If the entire video series were
passed as context for each question, responses would likely be slow, expensive,
and often include advanced material beyond the student's current understanding.

#### RAG and Context Engineering

![model comparison](@assets/embedding_model_comparison.png) Retrieval-Augmented
Generation (RAG) is an approach for enhancing LLM responses by dynamically
supplying them with only the most relevant external information at the time of
the query. RAG systems "retrieve" context from a curated knowledge source and
"augment" the model's prompt with that information. This ensures the LLM is both
informed and efficient, producing accurate outputs grounded in the latest or
domain-specific data.

![model comparison](@assets/embedding_model_comparison-bold.png) A typical RAG
pipeline works in three stages:

1. **Data Embedding** – Source material (such as documents, transcripts, or
   images) is transformed into vector embeddings using an embedding model. These
   vectors capture semantic meaning so that related content exists close
   together in a high-dimensional space.

2. **Similarity Search** – When a query is received, it too is embedded into the
   same vector space. A similarity search retrieves only those stored embeddings
   most semantically similar to the query.

3. **Context Injection** – The retrieved content is then inserted into the LLM's
   prompt, giving it targeted, context-rich information to reason with before
   generating its answer.

This process allows developers to tightly control both the quality and quantity
of context the model sees. Because only the top-matching pieces of information
are included, RAG avoids the problems of overloading the LLM with irrelevant or
excessive data, which can lead to higher costs and reduced accuracy.

For example, consider the lecture-series learning assistant described in the
previous section. With RAG, each video is pre-processed into embeddings and
stored in a vector database. When the student asks their question, the system
embeds the query, retrieves only the lecture segments most semantically related
to the query and sends those select clips as context to the LLM. The result is a
faster, cheaper, and more focused answer that stays on topic while preserving
the model's reasoning capabilities.

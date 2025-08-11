---
title: Introduction
sidebar:
  order: 1
---

Kubrick is an open-source platform that enables developers to generate
multimodal vector embeddings of video content and perform semantic similarity
search at scale. It provides a simple API and an end-to-end pipeline that allows
users to search video using natural language, images, audio, or other video
clips. Results can include full video matches or pinpointed segments that are
most semantically relevant to the query.

As video continues to proliferate across domains like online content creation,
sports analysis, security, education, and marketing, the demand for smarter,
more intuitive search tools has grown. Manually tagging footage or scrubbing
through video is not only time-consuming but increasingly impractical as content
volume grows. Today’s users expect to describe a moment—or upload a visual or
audio reference—and instantly surface the relevant scenes, even if they’ve never
been explicitly labeled.

Building this functionality in-house is complex. Developers must process large
video files, extract and embed multimodal features, handle storage, and build
performant search systems, all while integrating with existing infrastructure.

Kubrick eliminates these barriers by abstracting the entire embedding and search
pipeline. It can be deployed directly into the user’s AWS environment using a
simple CLI tool, allowing teams to maintain full control over their data and
architecture. Its open-source nature gives developers the freedom to inspect,
customize, and extend the system to suit their specific use cases. Kubrick makes
rich, semantic video understanding accessible to every development team.

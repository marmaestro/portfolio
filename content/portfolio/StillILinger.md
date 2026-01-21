---
title: Still I Linger
subtitle: Bachelor's Thesis, a work in progress
description: 'An experimental artgame about feeling lost, depression, and life.'
brief: "Mixed-media artgame where film photographs represent reality and hand-drawn overlays represent internal perception. Navigating a city through the lens of chronic anxiety and depression."
date: 2025-07-11
author: marmaestro
source:
    url: https://marmaestro.itch.io/stillilinger
    item: 'itch.io'
image:
    url: ../src/img/portfolio/tfg-cover.gif
    alt: game cover
roles: [ solo dev ]
tags: [ game, photography ]
pinned: True
---

**June 2025**

A first-person 2D artgame exploring depression from a neurodivergent perspective. Players navigate a Mediterranean city through the internal lens of R, a university student dealing with chronic anxiety and depression during their first weekend alone in a new place.

<figure>
    <img src='../src/img/portfolio/tfg-banner.gif' alt=''/>
    <figcaption>The game cover, selected from my favourite scene</figcaption>
</figure>

### Overview

<mark>**Genre:**</mark> Interactive fiction artgame  
<mark>**Development:**</mark> 5 months, solo project  
<mark>**Role:**</mark> Design, programming, photography, illustration, narrative  
<mark>**Tools:**</mark> Unity 6, C#, Nikon FM2 (35mm film), CLIP Studio Paint, Inky, FMOD

### The Concept

The game uses </mark>mixed media</mark> to represent the split between objective reality and internal perception. Real locations shot on Kodak Ultramax 400 film form the environments—what's actually there. Hand-drawn digital elements overlaid on these photographs appear only through R's camera, representing their subconscious interpretation of the world.

This visual approach mirrors how depression distorts perception. The photographs can't lie. The illustrations reveal what R actually experiences.

### Technical Work

Built a multi-layered camera rendering system that simulates a physical <mark>Nikon FM2—main</mark> camera renders film photographs while overlay cameras handle animated elements at different depths with parallax. Taking pictures triggers branching narrative reflections.

Navigation uses a custom graph system (linked lists, modified BFS) with limited daily steps representing R's emotional capacity. Not every location can be visited in one playthrough.

Narrative scripted in <mark>Inky</mark> with algorithmic diary generation at day's end, weighted by player choices and emotional tags. The system deliberately feels somewhat random—matching R's mental instability.

<figure>
    <img src='../src/img/portfolio/tfg-cafe.jpg' alt=''/>
    <figcaption>One of the pictures taken for the project, before illustrating it</figcaption>
</figure>

### The Making Of

I shot all 13 locations around Castellón in a single sunny morning with a manual 35mm camera inherited from my family. Film's constraints—36 exposures, no instant feedback, choices you can't take back—ended up reflecting the game's themes better than I'd planned. You can't delete a film photograph. You can't undo what depression makes you see.


This project pushed me way outside my comfort zone as a programmer. I taught myself illustration and animation while making the game, which meant every drawn element took twice as long as I'd estimated. Learning to write creative fiction while designing branching narrative systems. Figuring out how to make personal experience into something interactive without it feeling exploitative or melodramatic.

The hardest part wasn't the technical work—it was making something this personal while my own mental health was actively interfering with development. My thesis supervisor never gave up on the project even when I disappeared for weeks at a time. Neither did I, eventually.

### Outcomes

Delivered a vertical slice demonstrating all core mechanics and narrative themes. The project taught me more about architecture and systems design than any coursework—building custom solutions for camera simulation, narrative graphs, and algorithmic diary generation while managing scope across multiple disciplines.

---

<mark>**Note:**</mark> Full thesis report available upon request. Photography gallery and technical diagrams included in complete documentation.
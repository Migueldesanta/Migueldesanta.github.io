---
title: "Network Insularity and the Persistence of Misinformation"
subtitle: "A difference-in-differences study of belief resilience in hyper-partisan online communities."
paper_number: "XY-2025-02"
order: 2
date: 2025-11-01
status: "Working paper"
abstract: "Using the VoterFraud2020 corpus (7.6M tweets), tests whether the structural topology of an online community can explain its resistance to contradictory information. Designs a difference-in-differences framework around the 2020 U.S. election certification — a sharp factual shock — and uses Infomap community detection and social-network-analysis metrics to quantify network closure. Advances the 'Structural Immunity' hypothesis: that sufficiently closed network topology neutralises the persuasive effect of even legally definitive contradictory reality."
tags: [Computational Social Science, Difference-in-Differences, Networks]
---

## The question

The standard model of misinformation correction is informational: people update their beliefs when they encounter credible contradictory evidence. The empirical record on this is mixed at best.

This paper asks whether the gap between the standard model and the data can be explained by **network structure** rather than individual psychology. Specifically: do sufficiently closed network topologies neutralise the persuasive effect of contradictory information, regardless of the information's credibility?

## Design

The 2020 U.S. election certification is treated as a quasi-experimental shock: a sharp, legally definitive contradictory event for communities that had been promoting election-fraud narratives. The empirical strategy is a difference-in-differences specification, comparing the post-certification information flow within hyper-partisan communities to a comparison set of less-closed communities discussing similar political content.

**Data:** The VoterFraud2020 corpus, ~7.6 million tweets, covering the period before and after certification.

**Methods:**

- **Infomap community detection** to partition the user-tweet network into communities by information-flow modularity
- **Social network analysis** metrics — clustering coefficient, modularity, path-length distribution — to operationalise *network closure* as a continuous treatment variable
- **Difference-in-differences** estimation of the certification's impact on within-community information flow, with closure interacted as a moderator

## Finding

Communities above a closure threshold exhibit **no statistically detectable behavioural shift after certification** — neither in volume of misinformation-consistent content, nor in cross-community link formation, nor in user attrition. Below the threshold, the certification produces the expected sharp discontinuity.

This is the **Structural Immunity hypothesis**: above a certain level of network closure, the persuasive content of contradictory information is structurally neutralised by the lack of pathways into the community.

## Why it matters

The result has implications for two literatures. For *misinformation policy*, it suggests that interventions targeted at the *content* level (fact-checks, labels, removals) cannot succeed for sufficiently insular communities — the intervention does not enter the relevant information environment. For *deliberative theory*, it places a structural lower bound on the conditions under which any kind of persuasion is possible.

---

*Independent research, May–November 2025. Full paper available on request.*

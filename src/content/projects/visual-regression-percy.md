---
title: Visual regression with Percy & Cypress
description: React UI delivery; I wired Cypress journeys with Percy snapshots on GitHub Actions and GitFlow-style baselines so layout drift was reviewed inside the same pull request and fewer visual regressions slipped to production.
image: /images/projects/visual-percy.svg
category: ui-automation
repoUrl: https://github.com/hamidhussain-uw/cypress-percy-visual
role: SDET, frontend quality
stack:
  - Cypress
  - React
  - Percy
  - GitHub Actions
featured: false
order: 9
qualityReport:
  coverage: 95%
  summary: Percy runs on Chromium in CI; story-style routes frozen for stable snapshots. Intentional UI changes require explicit Percy approval in the PR thread.
  frameworks:
    - cypress
---

## Overview

Pairs deterministic component routes with full-page captures so designers and QA share one visual source of truth alongside functional assertions.

## Outcomes

- Fewer “pixel perfect” arguments in UAT; diffs are objective and time-stamped.
- Rollback-friendly workflow when a bad stylesheet slips through review.

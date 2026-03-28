---
title: Visual regression with Percy & Cypress
description: Cypress plus Percy snapshots on merge catch layout drift before release. Baselines follow GitHub Flow; visual review happens in the same PR as the code.
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

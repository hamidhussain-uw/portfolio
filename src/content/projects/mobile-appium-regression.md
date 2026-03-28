---
title: Mobile regression lab (iOS & Android)
description: Appium PR smoke and nightly regression on real iOS and Android hardware. Parallel shards with video and logs focus on payments, push, and offline flows before store release.
image: /images/projects/mobile-regression.svg
category: ui-automation
repoUrl: https://github.com/example/mobile-appium-regression
role: Mobile QA
stack:
  - Python
  - TypeScript
  - Docker
  - GitHub Actions
featured: false
order: 6
qualityReport:
  coverage: 89%
  summary: Nightly full regression on device farm; PRs run a lean smoke pack. Flaky steps quarantined with owner and SLA.
  frameworks:
    - playwright
    - cypress
---

## Overview

Device matrix covers current OS minus one, with emphasis on payments, push notifications, and offline-first flows.

## Outcomes

- Faster sign-off for store releases with traceable evidence.
- Shared device booking and clean test-account hygiene.

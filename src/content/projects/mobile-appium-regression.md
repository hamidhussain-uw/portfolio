---
title: Mobile regression lab (iOS & Android)
description: Mobile product on iOS and Android; I automated PR smoke and nightly regression (payments, push, offline) with Python and TypeScript runners in Docker on GitHub Actions against real devices so store releases shipped with stronger confidence and failures were easy to debug from video and logs.
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

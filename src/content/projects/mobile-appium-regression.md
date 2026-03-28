---
title: Mobile regression lab (iOS & Android)
description: Appium smoke and deep regression on real devices; parallel shards in CI with video and logs for triage.
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

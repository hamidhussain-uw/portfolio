---
title: Performance & load testing with k6
description: Soak and spike scenarios against staging clusters; SLO-aligned thresholds wired into release checklists.
role: Performance QA
stack:
  - k6
  - TypeScript
  - Docker
  - Grafana
  - GitHub Actions
featured: false
order: 4
qualityReport:
  coverage: 91%
  summary: Core user flows scripted in k6 with p95 latency and error-rate gates. Results pushed to Grafana dashboards and compared to last green baseline.
  frameworks:
    - cypress
---

## Overview

Load tests mirror real traffic mixes and seasonal peaks, with automated regression when backend or cache behavior changes.

## Outcomes

- Data-backed go/no-go for high-traffic releases.
- Shared vocabulary between QA and platform on saturation points.

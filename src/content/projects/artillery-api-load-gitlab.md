---
title: Artillery.io API load on GitLab
description: Artillery load scenarios in GitLab CI mirror Postman payloads for parity between smoke and high-volume runs. Alerts fire when latency or errors regress against baseline.
image: /images/projects/artillery-api.svg
category: api-testing
repoUrl: https://github.com/hamidhussain-uw/artillery-api-gitlab
role: SDET, APIs and performance
stack:
  - Artillery.io
  - Postman
  - GitLab
  - TypeScript
featured: false
order: 15
qualityReport:
  coverage: 91%
  summary: Artillery reports published as GitLab artifacts; JSON metrics parsed into a lightweight dashboard. Rate limits and auth tokens injected from protected CI variables only.
  frameworks:
    - playwright
---

## Overview

Complements JMeter and k6 with a Node-native option that fits GitLab runners and JavaScript-heavy teams.

## Outcomes

- Same API contracts validated under load and under functional checks.
- Repeatable soak jobs that catch connection-pool and memory creep issues.

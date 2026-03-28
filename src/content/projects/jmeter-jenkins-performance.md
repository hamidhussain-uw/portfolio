---
title: JMeter & Jenkins performance lab
description: JMeter models peak checkout and search traffic on staging, run from Jenkins with archived results. Grafana sits next to k6 so load and SLO checks tell one release story.
image: /images/projects/jmeter-load.svg
category: ui-automation
repoUrl: https://github.com/hamidhussain-uw/jmeter-jenkins-performance
role: Performance QA
stack:
  - JMeter
  - Jenkins
  - Grafana
  - TypeScript
featured: false
order: 11
qualityReport:
  coverage: 90%
  summary: JMX files live in Git; Jenkins parameterized builds scale threads and duration. p95 latency and error-rate gates fail the build when regressions exceed the last green baseline.
  frameworks:
    - cypress
---

## Overview

Fits organizations that already invested in JMeter assets while keeping dashboards and gates consistent with modern observability stacks.

## Outcomes

- Ops and QA agree on saturation points using the same Grafana boards.
- Historical JTL and HTML reports preserved per build for post-incident review.

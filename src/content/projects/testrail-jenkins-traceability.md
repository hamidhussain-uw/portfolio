---
title: TestRail traceability & Jenkins reporting
description: Playwright and API results sync to TestRail after each Jenkins run. Exploratory charters use the same structure so automation and manual work show one coverage picture.
image: /images/projects/testrail-hub.svg
category: manual
repoUrl: https://github.com/hamidhussain-uw/testrail-jenkins-integration
role: QA Lead, test management
stack:
  - TestRail
  - Jenkins
  - Playwright
  - TypeScript
featured: false
order: 12
qualityReport:
  coverage: 93%
  summary: Case IDs embedded in test titles map to TestRail runs; flaky tests flagged without closing cases. Release reports export coverage by requirement and risk tier.
  frameworks:
    - playwright
---

## Overview

Makes TestRail the system of record while Jenkins remains the execution engine, with no duplicate spreadsheets for status meetings.

## Outcomes

- Faster audit responses with linked evidence from CI to managed test cases.
- Clear distinction between automated regression health and exploratory findings.

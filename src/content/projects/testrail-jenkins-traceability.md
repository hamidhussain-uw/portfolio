---
title: TestRail traceability & Jenkins reporting
description: Mixed manual and automation program; I piped Playwright and API results from Jenkins into TestRail (TypeScript reporting) and aligned exploratory charters to the same cases so leadership could see one traceability thread from requirements through the latest run.
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

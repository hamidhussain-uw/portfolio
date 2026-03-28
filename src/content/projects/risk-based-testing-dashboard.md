---
title: Risk-Based Testing Dashboard
description: Internal risk dashboard (React, D3, APIs) for release planning; I defined heatmaps and requirements-to-tests-to-run traceability with risk scoring from defects, usage, and scope so the team invested testing effort where failure would hurt most.
image: /images/projects/risk-dashboard.svg
category: manual
repoUrl: https://github.com/example/risk-based-testing-dashboard
role: QA Lead / Test Strategist
stack:
  - React
  - TypeScript
  - D3.js
  - REST APIs
featured: true
order: 2
qualityReport:
  coverage: 94%
  summary: Risk-weighted scenarios mapped to business criticality; automated smoke on every merge with manual deep-dives on high-severity areas.
  frameworks:
    - cypress
    - playwright
---

## Overview

A single pane for product, engineering, and QA to see which features carry the most quality risk, which tests protect them, and where the next testing dollar should go.

## Highlights

- Dynamic risk scores fed from defect history, usage analytics, and release scope.
- Drill-down from requirement → test case → last run status and owner.

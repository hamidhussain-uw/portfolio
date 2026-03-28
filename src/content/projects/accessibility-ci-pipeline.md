---
title: Accessibility checks in CI
description: Automated axe scans on critical routes plus manual audits for complex widgets, documented in VPAT-ready summaries.
role: QA — A11y champion
stack:
  - TypeScript
  - Playwright
  - React
  - GitHub Actions
featured: true
order: 5
qualityReport:
  coverage: 97%
  summary: Every merge runs Playwright + axe on key templates; severity-1 issues fail the build. Spot-checks with keyboard and screen readers each sprint.
  frameworks:
    - playwright
---

## Overview

Combines fast automated rules with structured manual exploration so WCAG gaps are caught early and tracked to closure.

## Outcomes

- Steady reduction in recurring contrast and focus-order defects.
- Design and eng share the same issue taxonomy and priority rubric.

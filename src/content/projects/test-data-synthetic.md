---
title: Synthetic test data & environment guardrails
description: Shared test-data layer for APIs and UI; I built versioned synthetic fixtures and resets (TypeScript, Cypress, Docker, GitHub Actions) with OpenAPI drift checks, which kept runs reproducible and cut false reds from bad data or schema skew.
image: /images/projects/test-data.svg
category: api-testing
repoUrl: https://github.com/example/synthetic-test-data
role: QA tooling
stack:
  - TypeScript
  - Docker
  - Cypress
  - GitHub Actions
featured: false
order: 7
qualityReport:
  coverage: 93%
  summary: Cypress and API suites pull from versioned fixtures; nightly jobs reset dirty state and alert on schema drift against the app.
  frameworks:
    - cypress
---

## Overview

Treats test data as code: reproducible, anonymized, and validated against the same OpenAPI specs the app uses.

## Outcomes

- Less random red in CI from stale or conflicting records.
- Onboarding new tests without copying production blobs.

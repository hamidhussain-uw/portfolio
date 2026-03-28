---
title: Angular app E2E with Playwright
description: Playwright against Angular with stable selectors and storage-state auth. Chromium and Firefox on every PR, plus a11y smoke on critical views.
image: /images/projects/angular-e2e.svg
category: ui-automation
repoUrl: https://github.com/hamidhussain-uw/angular-playwright-e2e
role: SDET, Angular and web
stack:
  - Angular
  - Playwright
  - TypeScript
  - GitHub Actions
featured: false
order: 14
qualityReport:
  coverage: 96%
  summary: Component harness patterns where needed; otherwise user-centric flows. Trace zip attached to failed jobs for quick replay in local Angular dev server.
  frameworks:
    - playwright
---

## Overview

Bridges Angular’s build pipeline with modern Playwright reporting so teams migrating off Protractor keep velocity and clearer flake signals.

## Outcomes

- One CI workflow for unit, lint, and E2E without duplicating environment setup.
- Shared TypeScript models between app and tests where it reduces duplication.

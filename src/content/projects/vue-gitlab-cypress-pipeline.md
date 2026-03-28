---
title: Vue.js E2E on GitLab CI with Cypress
description: Vue 3 with Cypress component and E2E jobs on GitLab, including review apps per merge request. Parallel shards by feature folder keep pipelines fast as the suite grows.
image: /images/projects/vue-gitlab-cypress.svg
category: ui-automation
repoUrl: https://github.com/hamidhussain-uw/vue-gitlab-cypress-e2e
role: SDET
stack:
  - Vue.js
  - Cypress
  - TypeScript
  - GitLab
featured: false
order: 13
qualityReport:
  coverage: 94%
  summary: GitLab child pipelines run smoke on MR and full regression nightly on main. Cypress Cloud optional for flake analytics; GitLab native JUnit ingestion used by default.
  frameworks:
    - cypress
---

## Overview

Shows how to align Vue ecosystem tooling with GitLab’s merge-request workflow when teams are not on GitHub Actions.

## Outcomes

- Developers see test status beside code review without leaving GitLab.
- Reusable job templates for other front-end repos (Angular or Svelte) with the same pattern.

---
title: Vue.js E2E on GitLab CI with Cypress
description: Vue 3 SaaS frontend; I wired Cypress component and E2E jobs on GitLab with MR review apps and parallel shards by feature folder so merge requests stayed fast to validate even as the suite grew.
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

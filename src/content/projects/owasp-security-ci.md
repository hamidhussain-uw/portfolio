---
title: OWASP-aligned security checks in CI
description: Web/API security in CI; I integrated OWASP ZAP baseline in Docker with GitHub Actions, TypeScript glue, and an OWASP Top 10 checklist on staging so findings landed in GitHub with severity before pen-test cycles and critical issues blocked main.
image: /images/projects/security-owasp.svg
category: api-testing
repoUrl: https://github.com/hamidhussain-uw/owasp-zap-ci-gates
role: QA, security test automation
stack:
  - Docker
  - GitHub Actions
  - TypeScript
  - OWASP ZAP
featured: false
order: 10
qualityReport:
  coverage: 88%
  summary: ZAP runs in Docker with auth tokens from vault; false positives suppressed via versioned context files. High and critical issues block merge to main.
  frameworks:
    - playwright
---

## Overview

Brings repeatable security signal into every sprint without replacing dedicated pen tests. Ideal for teams that want early feedback on headers, cookies, and common misconfigurations.

## Outcomes

- Shared vocabulary between QA and engineering on what “must fix” means before release.
- Audit trail of scan history and waiver rationale for compliance conversations.

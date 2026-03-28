---
title: OWASP-aligned security checks in CI
description: OWASP ZAP baseline scans on staging APIs and key UI flows, plus a Top 10 checklist. Findings land in GitHub with severity and traces before pen-test cycles.
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

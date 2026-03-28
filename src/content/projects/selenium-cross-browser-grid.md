---
title: Selenium Grid & BrowserStack regression
description: Cross-browser web regression; I built Selenium TypeScript suites on Grid plus BrowserStack, orchestrated from Jenkins (PR smoke, nightly full), which gave the team five-browser confidence with video and logs on every failure.
image: /images/projects/selenium-cross-browser.svg
category: ui-automation
repoUrl: https://github.com/hamidhussain-uw/selenium-grid-browserstack-suite
role: QA Automation Engineer
stack:
  - Selenium
  - TypeScript
  - Jenkins
  - BrowserStack
featured: false
order: 8
qualityReport:
  coverage: 92%
  summary: Grid hubs tag sessions by browser matrix; flaky sessions retry with caps. BrowserStack local tunnel used for pre-release builds behind VPN.
  frameworks:
    - playwright
---

## Overview

Keeps legacy Selenium assets valuable while standardizing caps, waits, and reporting so cross-browser noise does not drown real defects.

## Outcomes

- One dashboard for desktop and mobile browser coverage without maintaining every OS image in-house.
- Clear ownership when a browser-specific regression appears after a driver or caps change.

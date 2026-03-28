/**
 * About page copy: hero, Upwork snapshot, reviews carousel, work history, tools, agentic/AI testing, and review quotes.
 * Update here when your Upwork profile changes.
 */
export const aboutContent = {
	hero: {
		eyebrow: 'About',
		/** Upwork profile headline */
		professionalTitle:
			'QA Tester | QA Engineer | Manual & Automation | Web & Mobile App Testing',
		title: 'QA & test automation',
		lead:
			'I am a software QA tester and quality assurance specialist with 9+ years of experience in QA, spanning manual testing, broader software QA, and test automation. I help businesses ship high-quality, dependable releases through functional, regression, system, integration, and user acceptance testing (UAT). I focus on web and mobile apps (cross-browser, cross-device, and responsive), using exploratory and smoke testing plus usability, UI, and UX checks so problems surface before customers do.',
		paragraphs: [],
	},

	upwork: {
		eyebrow: 'Upwork success',
		jobSuccessLabel: '100% Job Success',
		jobSuccessHint:
			'Share of jobs that resulted in a great client experience (per Upwork’s Job Success score).',
		topRatedLabel: 'Top Rated Plus',
		topRatedHint: 'Highly rated for work on large contracts (Upwork talent badge).',
		cta: 'Open full Upwork profile',
	},

	workHistory: {
		eyebrow: 'Work history',
		title: 'Recent engagements',
		completed: [
			{
				title: 'QA: EdTech platform & workflow automation (gradeflow.net)',
				detail: {
					description:
						'EdTech SaaS for grading and workflow automation, helping educators run assessments, feedback, and academic evaluation through a modern web app.',
					contributions:
						'As QA Automation Engineer I owned Playwright coverage for critical flows, organized cases and runs in TestRail, and validated APIs with Postman. I used Linear for defects, integrated suites into CI/CD for every build, and supported stability testing through a GCP→AWS migration. I executed cross-browser checks and worked alongside developers on React UI quality within Agile sprints.',
					outcomes: [
						'Stronger automated regression coverage and less manual repetition',
						'Steadier releases with fewer defects reaching production',
						'Confident cutover during cloud migration without breaking grading workflows',
						'A more reliable day-to-day experience for educators on the platform',
					],
				},
				stack: [
					'Playwright',
					'TestRail',
					'Postman',
					'React',
					'Docker',
					'GitHub Actions',
					'TypeScript',
					'Linear',
					'CI/CD',
				],
			},
			{
				title: 'QA: Data platform & audience intelligence SaaS (datadesk.io)',
				detail: {
					description:
						'Data-driven SaaS for audience segmentation, data activation, and digital marketing integrations: businesses access, customize, and scale audience data across channels and advertising ecosystems, with reliability across complex, integration-heavy workflows, APIs, and user-facing dashboards.',
					contributions:
						'As QA Engineer (manual and automation) I analyzed requirements for audience data and integrations, designed and executed test plans, cases, and scenarios, and covered regression and exploratory testing on the web platform. I built and maintained Playwright automation for UI and functional flows, validated APIs and data flows in Postman, and checked segmentation logic, filtering, and dashboard accuracy. I logged defects in Jira and Testiny, debugged data issues with developers and product, ran cross-browser testing, and took part in Agile ceremonies to improve QA practices.',
					outcomes: [
						'More stable, reliable data-driven marketing workflows on the platform',
						'Broader test coverage through automation and less manual regression load',
						'Accurate audience data processing and API integrations in production',
						'Tighter collaboration between QA, engineering, and product on complex data issues',
						'Faster, steadier feature releases in a data-intensive environment',
					],
				},
				stack: ['Playwright', 'Postman', 'Jira', 'Testiny', 'BrowserStack'],
			},
			{
				title: 'Automated QA: Playwright automation & TestRail test management',
				detail: {
					description:
						'End-to-end automation and structured test management for a web application: scalable Playwright coverage for critical workflows, TestRail for cases and suites, and a focus on shorter regression cycles, clearer traceability, and more dependable releases. Work spanned manual and automated testing, defect tracking, and close collaboration with developers as a web and mobile-oriented QA engineer.',
					contributions:
						'As Automated QA Engineer I built and maintained Playwright scripts for core user journeys and regression scenarios, and designed and maintained organized test cases and suites in TestRail. I performed manual and regression testing for new features, ran cross-browser checks (including with BrowserStack), validated APIs with Postman where needed, and used SQL for data checks. I reported bugs in Jira with clear steps, worked with developers in Agile delivery, and aligned automation with CI/CD so critical paths stayed covered.',
					outcomes: [
						'Less time spent on repetitive manual regression through reliable automation',
						'Better test organization and traceability via TestRail',
						'Higher coverage and calmer releases with a more stable product',
						'Faster, more confident shipping backed by end-to-end coverage',
					],
				},
				stack: ['Playwright', 'TestRail', 'Jira', 'Postman', 'BrowserStack', 'SQL', 'CI/CD'],
			},
			{
				title: 'Senior QA: Zetronix (web & mobile)',
				detail: {
					description:
						'Quality ownership across the full QA lifecycle for Zetronix web and mobile software: from requirements through release, with a reliable manual and automation practice in Agile/Scrum, stronger coverage, and support for stable production delivery.',
					contributions:
						'As Senior QA Engineer I designed and executed detailed test cases and scenarios, ran black box, regression, and UAT, and tested web and mobile experiences end to end. I implemented and maintained automation with Cypress and Selenium, used Playwright where it fit the stack, validated backend data with SQL, and ran cross-browser and cross-device checks (including BrowserStack). I reported and tracked issues in Jira and Spira, validated APIs with Postman when needed, collaborated with developers and product managers in Agile ceremonies, and helped improve the automation framework to cut down repetitive manual work.',
					outcomes: [
						'Broader test coverage and a more stable product for users',
						'Shorter regression cycles thanks to solid automation',
						'Critical defects caught earlier in the development cycle',
						'More dependable web and mobile releases for the team',
					],
				},
				stack: ['Cypress', 'Selenium', 'Playwright', 'Postman', 'Jira', 'Spira', 'BrowserStack', 'SQL', 'CI/CD'],
			},
			{
				title: 'QA: Central Computers (eCommerce, computer accessories)',
				detail: {
					description:
						'eCommerce QA for Central Computers, an online computer accessories and hardware store: validating the full shopping journey so customers can browse, search and filter, add to cart, check out, and pay without friction. Work covered functionality, regression, and experience quality across web and mobile browsers and devices.',
					contributions:
						'As QA Tester (manual and automation) I exercised core eCommerce flows end to end: product search and filtering, cart, checkout, and payment paths. I designed and ran test cases and scenarios for web and mobile surfaces, performed regression and UAT before releases, and automated critical purchase journeys with Cypress to shrink repetitive regression. I ran cross-browser and cross-device testing with BrowserStack, checked inventory and order data with SQL, validated integrations with Postman where needed, and logged defects in Jira with clear reproduction details while working with developers and product in an Agile QA rhythm.',
					outcomes: [
						'More stable store behavior and a smoother experience for shoppers',
						'Less manual regression through reliable Cypress coverage on key flows',
						'Checkout and payment risks surfaced early before they reached customers',
						'Consistent, dependable browsing and ordering across browsers and devices',
					],
				},
				stack: ['Cypress', 'Selenium', 'Postman', 'Jira', 'BrowserStack', 'SQL', 'CI/CD'],
			},
		],
	},

	tools: {
		eyebrow: 'Tools & technologies',
		categories: [
			{
				name: 'Test management & defects',
				items: ['Jira', 'TestRail', 'Zephyr', 'qTest', 'Bugzilla', 'Mantis', 'ClickUp'],
			},
			{
				name: 'Automation & API',
				items: [
					'Playwright',
					'Cypress',
					'Selenium & WebDriver',
					'WebdriverIO',
					'Robot Framework',
					'Nightwatch.js',
					'Postman',
				],
			},
			{
				name: 'Performance & CI',
				items: ['JMeter', 'Jenkins', 'Git', 'CI/CD', 'Docker'],
			},
			{
				name: 'Languages & data',
				items: ['Java', 'Python', 'JavaScript / TypeScript', 'SQL & database testing'],
			},
		],
	},

	agenticAiTesting: {
		eyebrow: 'Agentic & AI testing',
		intro:
			'Technologies I use or evaluate for AI-assisted quality: agent-style workflows, LLM tooling, and smarter checks alongside classic automation.',
		categories: [
			{
				name: 'Protocols & browser automation',
				items: ['MCP', 'Playwright', 'Postman'],
			},
			{
				name: 'LLM platforms & developer AI',
				items: ['OpenAI', 'Anthropic', 'GitHub Copilot', 'LangChain', 'Cursor'],
			},
			{
				name: 'Visual AI & evaluation',
				items: ['Applitools', 'Percy', 'Python', 'TypeScript'],
			},
		],
	},

	reviews: {
		title: 'Client feedback',
		items: [
			{
				quote:
					'The contractor successfully delivered all project requirements and met established timelines. They demonstrated strong professionalism, technical competence, and attention to detail throughout the engagement. Communication was clear and timely, and the overall quality of work met expectations. The project was completed successfully, and we would consider engaging this contractor again for future initiatives.',
				attribution: 'IT QA Analyst - Automation',
				rating: 5,
				dateRange: 'Nov 7, 2025 to Jan 1, 2026',
			},
			{
				quote:
					'Allivet has had the pleasure of working with this freelancer on multiple projects, and we\'ve been thoroughly impressed by his dedication, professionalism, and expertise. He has consistently delivered high-quality work that has exceeded expectations. He has been very proactive in understanding the project requirements, asking insightful questions, and providing valuable suggestions that significantly improved the final deliverables. Allivet has changed the nature of the contract with this contractor but continues to work with him.',
				attribution: 'IT QA Analyst - Automation',
				rating: 5,
				dateRange: 'Oct 1, 2024 to Nov 9, 2025',
			},
			{
				quote:
					'Hamid was very professional with his work. Would rehire him for QA jobs. Recommended',
				attribution: 'Manual QA tester',
				rating: 5,
				dateRange: 'Feb 2, 2022 to Feb 8, 2022',
			},
			{
				quote:
					'It was a pleasure working with Hamid. He was very fast, cooperative, eager and excellent knowledge of Web Testing. Overall a pleasant experience working with him. 100% recommended.',
				attribution: 'QA Engineer',
				rating: 5,
				dateRange: 'Oct 18, 2021 to Oct 22, 2021',
			},
		],
	},
} as const;

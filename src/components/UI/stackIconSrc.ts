/** Logo URLs for tech stack chips (landing project cards, About work history, etc.). */
export const STACK_ICON_SRC: Record<string, string> = {
	Playwright: 'https://playwright.dev/img/playwright-logo.svg',
	TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
	'GitHub Actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
	React: 'https://cdn.simpleicons.org/react/61DAFB',
	'D3.js': 'https://cdn.simpleicons.org/d3/F9A03C',
	Cypress: 'https://cdn.simpleicons.org/cypress/69D3A2',
	Postman: 'https://cdn.simpleicons.org/postman/FF6C37',
	Docker: 'https://cdn.simpleicons.org/docker/2496ED',
	Grafana: 'https://cdn.simpleicons.org/grafana/F46800',
	Python: 'https://cdn.simpleicons.org/python/3776AB',
	Java: 'https://cdn.simpleicons.org/openjdk/437291',
	Git: 'https://cdn.simpleicons.org/git/F05032',
	k6: 'https://cdn.simpleicons.org/k6/7D64FF',
	'Artillery.io': '/images/stack/artillery-io.svg',
	Artillery: '/images/stack/artillery-io.svg',
	Selenium: 'https://cdn.simpleicons.org/selenium/43B02A',
	BrowserStack: 'https://cdn.worldvectorlogo.com/logos/browserstack.svg',
	Jenkins: 'https://cdn.simpleicons.org/jenkins/D24939',
	GitLab: 'https://cdn.simpleicons.org/gitlab/FC6D26',
	'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
	Angular: 'https://cdn.simpleicons.org/angular/DD0031',
	JMeter: 'https://cdn.simpleicons.org/apachejmeter/D22129',
	Percy: 'https://cdn.simpleicons.org/percy/9E66BF',
	'OWASP ZAP': 'https://cdn.simpleicons.org/owasp',
	TestRail: 'https://cdn.simpleicons.org/testrail/65C179',
	Testiny:
		'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/5dcbfe98-8ae2-47ce-aff5-e008bd2f36c8.png?w=100&q=50',
	Jira: 'https://cdn.simpleicons.org/jira/0052CC',
	MCP: 'https://avatars.githubusercontent.com/u/182288589?s=200&v=4',
	OpenAI:
		'https://cdn.brandfetch.io/idR3duQxYl/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1749527355219',
	Anthropic: 'https://cdn.simpleicons.org/anthropic/191919',
	'GitHub Copilot': 'https://cdn.simpleicons.org/githubcopilot/000000',
	LangChain: 'https://cdn.simpleicons.org/langchain/1C3C3C',
	Cursor: 'https://cdn.simpleicons.org/cursor/000000',
	Applitools:
		'https://yt3.googleusercontent.com/Uch9K1iw_Gh27irl1ErMdVv-L1xd5PrTno0sqX1joI93AQeK88BdtILMfOJOdaP8MeJ9cPNF=s160-c-k-c0x00ffffff-no-rj',
};

/** Labels in About/tools may differ from chip keys; map to `STACK_ICON_SRC` keys. */
const TOOL_ICON_ALIASES: Record<string, string> = {
	'Selenium & WebDriver': 'Selenium',
	'JavaScript / TypeScript': 'TypeScript',
};

export function resolveStackIconSrc(label: string): string | undefined {
	const key = TOOL_ICON_ALIASES[label] ?? label;
	return STACK_ICON_SRC[key];
}

/**
 * Public contact details. Social URLs feed the nav, footer, and contact page.
 * Update `email` when you want mailto + form delivery.
 */
export const contact = {
	name: 'Hamid Hussain',
	role: 'QA Engineer',
	githubUrl: 'https://github.com/hamidhussain-uw',
	/** Profile URL used in footer, contact page, and navbar */
	linkedinUrl: 'https://www.linkedin.com/in/hamidhussain88/',
	email: 'hamidhussain.uw@gmail.com',
} as const;

export function buildMailtoHref(opts: { subject?: string; body?: string }) {
	const { subject = 'Portfolio inquiry', body = '' } = opts;
	return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

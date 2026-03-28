/**
 * Public contact details. Social URLs feed the nav, footer, and contact page (incl. Upwork).
 * Update `email` when you want mailto + form delivery.
 */
export const contact = {
	name: 'Hamid Hussain',
	role: 'QA Engineer',
	/** Portrait in `public/` (e.g. `/images/my/my1.jpeg`), home hero & About */
	portraitSrc: '/images/my/my1.jpeg',
	githubUrl: 'https://github.com/hamidhussain-uw',
	/** Profile URL used in footer, contact page, and navbar */
	linkedinUrl: 'https://www.linkedin.com/in/hamidhussain88/',
	/** Freelance profile (footer, contact, nav) */
	upworkUrl:
		'https://www.upwork.com/freelancers/~01efd38d5a0000a6c7?mp_source=share',
	email: '',
	/** Landing hero: details under portrait (keep in sync with how you want to be reached). */
	heroDetails: {
		location: 'Peshawar, Pakistan',
		workStyle: 'Open to remote collaboration',
		timezone: 'PKT (UTC+5)',
		availability: 'Flexible hours, overlap with US and EU mornings',
		experience: '9+ years in QA (manual and automation)',
	},
} as const;

export function buildMailtoHref(opts: { subject?: string; body?: string }) {
	const { subject = 'Portfolio inquiry', body = '' } = opts;
	return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

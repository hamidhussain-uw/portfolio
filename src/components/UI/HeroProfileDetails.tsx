import { motion, useReducedMotion } from 'framer-motion';
import { contact, buildMailtoHref } from '../../config/contact';

function IconMapPin({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
			<circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
		</svg>
	);
}

function IconClock({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<circle cx="12" cy="12" r="9" />
			<path strokeLinecap="round" d="M12 7v6l3 2" />
		</svg>
	);
}

function IconBriefcase({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<path strokeLinecap="round" strokeLinejoin="round" d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z" />
		</svg>
	);
}

function IconMail({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6zm0 0l8 6 8-6" />
		</svg>
	);
}

const rowClass =
	'flex gap-2.5 text-left text-[13px] leading-snug text-slate-600 sm:text-sm';

export function HeroProfileDetails() {
	const reduceMotion = useReducedMotion();
	const { heroDetails } = contact;
	const hasEmail = Boolean(contact.email?.trim());
	const mailHref = hasEmail ? buildMailtoHref({}) : null;

	return (
		<motion.div
			className="w-full max-w-[20rem] border-t border-slate-200/90 pt-5 md:max-w-none"
			initial={reduceMotion ? false : { opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={
				reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 280, damping: 30, delay: 0.12 }
			}
		>
			<ul className="space-y-2.5" aria-label="Location, availability, experience, and contact">
				<li className={rowClass}>
					<IconMapPin className="mt-0.5 size-4 shrink-0 text-electric-600/90" />
					<span>
						<span className="font-medium text-navy-800">{heroDetails.location}</span>
						<span className="text-slate-500"> · </span>
						{heroDetails.workStyle}
					</span>
				</li>
				<li className={rowClass}>
					<IconClock className="mt-0.5 size-4 shrink-0 text-electric-600/90" />
					<span>
						<span className="font-medium text-navy-800">{heroDetails.timezone}</span>
						<span className="text-slate-500"> · </span>
						{heroDetails.availability}
					</span>
				</li>
				<li className={rowClass}>
					<IconBriefcase className="mt-0.5 size-4 shrink-0 text-electric-600/90" />
					<span className="font-medium text-navy-800">{heroDetails.experience}</span>
				</li>
				<li className={rowClass}>
					<IconMail className="mt-0.5 size-4 shrink-0 text-electric-600/90" />
					<span>
						{hasEmail && mailHref ? (
							<a
								href={mailHref}
								className="font-medium text-electric-700 underline-offset-2 transition-colors hover:text-electric-800 hover:underline"
							>
								{contact.email}
							</a>
						) : (
							<a
								href="/contact"
								className="font-medium text-electric-700 underline-offset-2 transition-colors hover:text-electric-800 hover:underline"
							>
								Get in touch via contact page
							</a>
						)}
					</span>
				</li>
			</ul>
		</motion.div>
	);
}

import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { contact } from '../../config/contact';
import { getStaggerContainer, getStaggerItemSpring } from './motion/staggerVariants';

function IconLinkedIn({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

function IconGitHub({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
		</svg>
	);
}

/** Lighthouse-style tower + beams; decorative (scores are illustrative). */
function IconLighthouse({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="M12 22V10.5" />
			<path d="M8.5 22h7" />
			<path d="M9.5 10.5 8.5 5h7l-1 5.5" />
			<path d="M12 4.5V6" />
			<circle cx="12" cy="3.25" r="1.15" fill="currentColor" stroke="none" />
			<path d="M6 5.5 4 3.5M18 5.5 20 3.5" opacity="0.45" />
		</svg>
	);
}

export function FooterReveal() {
	const reduceMotion = useReducedMotion();
	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.1, 0.05), [reduceMotion]);
	const item = useMemo(() => getStaggerItemSpring(reduceMotion), [reduceMotion]);
	const year = new Date().getFullYear();
	const initials = contact.name
		.split(/\s+/)
		.map((w) => w[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();

	return (
		<motion.footer
			id="contact"
			className="relative border-t border-slate-200/80 bg-white"
			variants={container}
			initial={reduceMotion ? 'show' : 'hidden'}
			whileInView="show"
			viewport={{ once: true, margin: '-40px 0px', amount: 0.15 }}
		>
			<div className="mx-auto max-w-design-content px-5 py-7 sm:px-6 sm:py-8 md:py-9">
				<div className="grid gap-6 md:grid-cols-12 md:gap-6 lg:gap-8">
					<motion.div variants={item} className="md:col-span-5">
						<div className="flex items-start gap-2">
							<span
								className="font-display flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-peach-500 text-[10px] font-bold text-white shadow-sm shadow-electric-500/25"
								aria-hidden
							>
								{initials}
							</span>
							<div>
								<p className="font-display text-sm font-semibold tracking-tight text-navy-900 sm:text-base">
									{contact.name}
								</p>
								<p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{contact.role}</p>
								<p className="mt-1.5 max-w-xs text-xs leading-snug text-slate-600 sm:text-sm">
									QA automation, API and UI coverage, CI quality gates, and pragmatic test strategy.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div variants={item} className="md:col-span-4">
						<p className="font-sans text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.18em]">
							Connect
						</p>
						<ul className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:gap-x-4">
							<li className="shrink-0">
								<a
									href={contact.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 text-xs font-medium text-slate-600 transition-colors hover:text-electric-600 sm:text-sm"
								>
									<span className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors group-hover:border-electric-200 group-hover:text-electric-600 sm:size-9">
										<IconLinkedIn className="size-3.5 sm:size-4" />
									</span>
									LinkedIn
									<span className="sr-only">(opens in new tab)</span>
								</a>
							</li>
							<li className="shrink-0">
								<a
									href={contact.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-2 text-xs font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-sm"
								>
									<span className="flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors group-hover:border-slate-300 sm:size-9">
										<IconGitHub className="size-3.5 sm:size-4" />
									</span>
									GitHub
									<span className="sr-only">(opens in new tab)</span>
								</a>
							</li>
							<li className="min-w-0 max-w-full">
								<a
									href={`mailto:${contact.email}`}
									className="block truncate text-xs font-medium text-slate-600 transition-colors hover:text-electric-600 sm:max-w-[14rem] sm:text-sm md:max-w-[16rem]"
									title={contact.email}
								>
									{contact.email}
								</a>
							</li>
						</ul>
					</motion.div>

					<motion.div variants={item} className="flex flex-col justify-between gap-2 md:col-span-3 md:items-end md:text-right">
						<a
							href="/contact"
							className="inline-flex w-full items-center justify-center rounded-lg bg-peach-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-peach-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 focus-visible:ring-offset-2 sm:text-sm md:w-auto"
						>
							Get in touch
						</a>
					</motion.div>
				</div>

				<motion.div
					variants={item}
					className="mt-6 border-t border-slate-200/80 pt-4"
					aria-labelledby="site-health-heading"
				>
					<div
						className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2"
						aria-label="Illustrative Lighthouse category scores (not a live audit)"
					>
						<div className="flex shrink-0 items-center gap-2">
							<IconLighthouse className="size-[1.125rem] shrink-0 text-[#e07c54] sm:size-5" />
							<p
								id="site-health-heading"
								className="font-sans text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.18em]"
							>
								Site Health
							</p>
						</div>
						<dl className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[11px] sm:gap-x-4 sm:text-xs">
							{(
								[
									{ label: 'Performance', short: 'Perf', score: 93 },
									{ label: 'Accessibility', short: 'A11y', score: 100 },
									{ label: 'Best Practices', short: 'Best', score: 100 },
									{ label: 'SEO', short: 'SEO', score: 100 },
								] as const
							).map(({ label, short, score }) => (
								<div key={label} className="flex items-baseline gap-1">
									<dt className="text-slate-500">
										<span className="sm:hidden">{short}</span>
										<span className="hidden sm:inline">{label}</span>
									</dt>
									<dd className="font-semibold tabular-nums text-emerald-600">{score}</dd>
								</div>
							))}
						</dl>
						<span
							className="hidden h-3 w-px shrink-0 bg-slate-200 sm:block"
							aria-hidden
						/>
						<p className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-semibold text-emerald-950 sm:text-xs">
							<span
								className="size-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgb(16_185_129/0.2)]"
								aria-hidden
							/>
							Tested with Playwright: 0 Defects Found
						</p>
					</div>
				</motion.div>

				<motion.div
					variants={item}
					className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-slate-200/80 pt-4 text-center text-[11px] text-slate-500 sm:flex-row sm:gap-3 sm:text-left sm:text-xs"
				>
					<p>
						© {year} {contact.name}. Testing that earns release confidence.
					</p>
					<p className="text-slate-400">Peshawar, Pakistan · Open to remote collaboration</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}

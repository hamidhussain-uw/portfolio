import { motion, useReducedMotion } from 'framer-motion';
import { getStaggerContainer, getStaggerItem, getStaggerItemPop } from './motion/staggerVariants';

const LABELS = [
	'Automation (Playwright, Cypress, Selenium)',
	'CI/CD (GitHub Actions, Jenkins, GitLab)',
	'API & contract testing',
	'Performance (k6, JMeter)',
	'Accessibility & WCAG',
	'Security (OWASP)',
	'Cross-browser & mobile',
] as const;

export function HeroExpertiseMotion() {
	const reduceMotion = useReducedMotion();
	const container = getStaggerContainer(reduceMotion, 0.06, 0.06);
	const head = getStaggerItem(reduceMotion);
	const pill = getStaggerItemPop(reduceMotion);

	return (
		<motion.div
			id="expertise"
			className="relative z-10 mt-10 w-full sm:mt-12 md:mt-14"
			aria-labelledby="expertise-heading"
			initial={reduceMotion ? false : { opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px 0px', amount: 0.12 }}
			transition={
				reduceMotion
					? { duration: 0 }
					: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
			}
		>
			{/* Soft separator: ties block to hero without a “card” frame */}
			<div
				className="mb-6 h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-300/80 to-transparent sm:mb-7 md:mx-0 md:max-w-lg"
				aria-hidden
			/>

			<motion.div
				className="max-w-design-md text-center md:text-left"
				variants={container}
				initial={reduceMotion ? 'show' : 'hidden'}
				whileInView="show"
				viewport={{ once: true, margin: '-40px 0px', amount: 0.25 }}
			>
				<motion.p
					variants={head}
					className="font-sans text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase sm:text-sm"
				>
					Core expertise
				</motion.p>
				<motion.h2
					variants={head}
					id="expertise-heading"
					className="font-display mt-2 text-lg font-semibold tracking-tight text-balance text-slate-900 sm:text-xl md:text-2xl md:leading-snug"
				>
					Automation, APIs, and quality gates across the stack
				</motion.h2>
				<motion.p
					variants={head}
					className="font-sans mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
				>
					Hands-on coverage from UI and API suites through CI/CD, performance, accessibility, and security
					checks: the areas teams lean on for release confidence.
				</motion.p>
			</motion.div>

			<motion.ul
				className="mt-6 flex flex-wrap justify-center gap-2 md:mt-7 md:justify-start"
				aria-label="Skills and tools"
				variants={container}
				initial={reduceMotion ? 'show' : 'hidden'}
				whileInView="show"
				viewport={{ once: true, margin: '-20px 0px', amount: 0.15 }}
			>
				{LABELS.map((label) => (
					<motion.li key={label} variants={pill}>
						<span className="inline-flex rounded-full border border-slate-200/80 bg-white/55 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[0_1px_2px_rgb(15_23_42/0.04)] backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-sm">
							{label}
						</span>
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	);
}

import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { getStaggerContainer, getStaggerItemSpring } from './motion/staggerVariants';

export function HeroContentStagger() {
	const reduceMotion = useReducedMotion();
	const container = getStaggerContainer(reduceMotion, 0.11, 0.05);
	const item = getStaggerItemSpring(reduceMotion);

	const headlineGroup: Variants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: reduceMotion ? 0 : 0.1,
				delayChildren: reduceMotion ? 0 : 0.03,
			},
		},
	};

	return (
		<motion.div
			className="max-w-design-md space-y-5 text-center sm:space-y-6 md:text-left"
			variants={container}
			initial={reduceMotion ? 'show' : 'hidden'}
			whileInView="show"
			viewport={{ once: true, margin: '-60px 0px', amount: 0.2 }}
		>
			<motion.p
				variants={item}
				className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase sm:text-sm"
			>
				Quality Assurance Engineer
			</motion.p>
			<motion.h1
				id="hero-heading"
				className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
				variants={headlineGroup}
			>
				<motion.span
					variants={item}
					className="block bg-gradient-to-br from-electric-500 via-electric-400 to-peach-500 bg-clip-text text-transparent"
				>
					Reliable releases
				</motion.span>
				<motion.span variants={item} className="mt-1 block text-navy-900 sm:mt-0 md:mt-1">
					through intentional testing
				</motion.span>
			</motion.h1>
			<motion.p
				variants={item}
				className="font-sans max-w-design-prose text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
			>
				I connect product risk to automated checks, hands-on exploration, and
				clear signals in CI/CD so teams can ship sooner with fewer surprises in production.
			</motion.p>
		</motion.div>
	);
}

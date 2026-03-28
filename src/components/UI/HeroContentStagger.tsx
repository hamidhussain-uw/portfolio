import { motion, useReducedMotion } from 'framer-motion';
import { getStaggerContainer, getStaggerItem } from './motion/staggerVariants';

export function HeroContentStagger() {
	const reduceMotion = useReducedMotion();
	const container = getStaggerContainer(reduceMotion, 0.12, 0.08);
	const item = getStaggerItem(reduceMotion);

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
				className="font-sans text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase sm:text-sm"
			>
				QA Automation & Manual
			</motion.p>
			<motion.h1
				variants={item}
				id="hero-heading"
				className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
			>
				<span className="bg-gradient-to-br from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
					Reliable releases
				</span>
				<span className="mt-1 block text-slate-900 sm:mt-0 md:mt-1">through intentional testing</span>
			</motion.h1>
			<motion.p
				variants={item}
				className="font-sans max-w-design-prose text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
			>
				Portfolio and case studies — automation frameworks, exploratory coverage, and quality gates that keep
				teams shipping with confidence.
			</motion.p>
		</motion.div>
	);
}

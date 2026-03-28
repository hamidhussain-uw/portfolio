import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { getStaggerContainer, getStaggerItem } from './motion/staggerVariants';

export function FooterReveal() {
	const reduceMotion = useReducedMotion();
	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.12, 0.05), [reduceMotion]);
	const item = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);

	return (
		<motion.footer
			id="contact"
			className="border-t border-slate-200/90 bg-white py-12 shadow-[0_-12px_40px_-24px_rgb(15_23_42/0.06)] sm:py-14"
			variants={container}
			initial={reduceMotion ? 'show' : 'hidden'}
			whileInView="show"
			viewport={{ once: true, margin: '-40px 0px', amount: 0.3 }}
		>
			<div className="mx-auto max-w-design-content px-5 text-center text-sm text-slate-600 sm:px-6">
				<motion.div variants={item}>
					<p className="font-display mb-2 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
						Let’s talk quality
					</p>
				</motion.div>
				<motion.div variants={item}>
					<p className="mx-auto max-w-design-prose leading-relaxed">
						Reach out via your preferred channel — this footer is ready for links and a contact form.
					</p>
				</motion.div>
			</div>
		</motion.footer>
	);
}

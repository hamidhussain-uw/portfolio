import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { getStaggerContainer, getStaggerItem } from './motion/staggerVariants';
import { MagneticProjectCard } from './MagneticProjectCard';
import type { ProjectSerialized } from './projectTypes';

type Props = {
	projects: ProjectSerialized[];
};

export function WorkSection({ projects }: Props) {
	const reduceMotion = useReducedMotion();
	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.1, 0.06), [reduceMotion]);
	const item = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);

	return (
		<section
			id="work"
			className="border-y border-sky-100/80 bg-sky-50/70"
			aria-labelledby="work-heading"
		>
			<div className="mx-auto max-w-design-content px-5 py-14 sm:px-6 sm:py-16 md:px-6 md:py-20">
				<motion.div
					className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-6"
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					whileInView="show"
					viewport={{ once: true, margin: '-70px 0px', amount: 0.12 }}
				>
					<motion.div variants={item} className="md:col-span-12">
						<h2
							id="work-heading"
							className="font-display text-sm font-semibold tracking-[0.2em] text-slate-600 uppercase"
						>
							Featured work
						</h2>
					</motion.div>
					{projects.map((p, i) => {
						const wide = i % 2 === 0;
						const span = wide ? 'md:col-span-8' : 'md:col-span-4';
						return (
							<motion.div key={p.id} variants={item} className={`min-h-0 ${span}`}>
								<MagneticProjectCard project={p} className="h-full" />
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

import {
	AnimatePresence,
	LayoutGroup,
	motion,
	useReducedMotion,
} from 'framer-motion';
import { useMemo, useState } from 'react';
import { getStaggerContainer, getStaggerItem, getSectionReveal } from './motion/staggerVariants';
import { MagneticProjectCard } from './MagneticProjectCard';
import type { ProjectCategory, ProjectSerialized } from './projectTypes';

type Props = {
	projects: ProjectSerialized[];
};

const FILTERS: { id: 'all' | ProjectCategory; label: string }[] = [
	{ id: 'all', label: 'All' },
	{ id: 'ui-automation', label: 'UI Automation' },
	{ id: 'api-testing', label: 'API Testing' },
	{ id: 'manual', label: 'Manual' },
];

const layoutSpring = { type: 'spring' as const, stiffness: 380, damping: 32, mass: 0.85 };
const filterBubbleSpring = { type: 'spring' as const, stiffness: 420, damping: 34, mass: 0.65 };

export function WorkSection({ projects }: Props) {
	const reduceMotion = useReducedMotion();
	const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.1, 0.06), [reduceMotion]);
	const item = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);
	const sectionReveal = useMemo(() => getSectionReveal(reduceMotion), [reduceMotion]);
	const headerInner = useMemo(() => getStaggerContainer(reduceMotion, 0.08, 0.04), [reduceMotion]);
	const headerLine = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);

	const filteredProjects = useMemo(() => {
		if (activeFilter === 'all') return projects;
		return projects.filter((p) => p.data.category === activeFilter);
	}, [projects, activeFilter]);

	const layoutEnabled = !reduceMotion;

	return (
		<motion.section
			id="work"
			className="border-y border-slate-100 bg-white"
			aria-labelledby="work-heading"
			variants={sectionReveal}
			initial={reduceMotion ? 'show' : 'hidden'}
			whileInView="show"
			viewport={{ once: true, margin: '-80px 0px', amount: 0.08 }}
		>
			<div className="mx-auto max-w-design-content px-5 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-16 md:px-6 md:pt-10 md:pb-20">
				<motion.div
					className="flex flex-col gap-8 md:gap-10"
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					whileInView="show"
					viewport={{ once: true, margin: '-70px 0px', amount: 0.12 }}
				>
					<motion.div variants={item} className="space-y-6 sm:space-y-7">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
							<motion.div
								className="min-w-0"
								variants={headerInner}
								initial={reduceMotion ? 'show' : 'hidden'}
								whileInView="show"
								viewport={{ once: true, margin: '-20px 0px', amount: 0.4 }}
							>
								<motion.h2
									variants={headerLine}
									id="work-heading"
									className="font-display text-4xl font-semibold tracking-tight text-balance text-navy-900 sm:text-5xl md:text-6xl"
								>
									Project gallery
								</motion.h2>
							</motion.div>

							<LayoutGroup id="work-gallery-filters">
								<motion.div
									className="flex w-full flex-shrink-0 items-center justify-center sm:w-auto sm:justify-end"
									role="toolbar"
									aria-label="Filter projects by category"
									initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
									whileInView={{ opacity: 1, y: 0, scale: 1 }}
									viewport={{ once: true, margin: '-10px 0px', amount: 0.5 }}
									transition={
										reduceMotion
											? { duration: 0 }
											: { type: 'spring', stiffness: 380, damping: 28, delay: 0.12 }
									}
								>
									<div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-1 shadow-sm sm:w-auto sm:max-w-none sm:rounded-full">
										<div className="flex flex-wrap justify-center gap-0.5 sm:flex-nowrap sm:justify-start">
											{FILTERS.map((f) => {
												const isActive = activeFilter === f.id;
												return (
													<button
														key={f.id}
														type="button"
														onClick={() => setActiveFilter(f.id)}
														aria-pressed={isActive}
														className="relative inline-flex min-h-11 items-center justify-center rounded-full px-3.5 py-2 text-sm font-medium focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-0 sm:px-4 sm:py-2"
													>
														{isActive && (
															<motion.span
																layoutId="work-gallery-filter-bubble"
																className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-slate-200/90"
																transition={
																	reduceMotion
																		? { duration: 0 }
																		: filterBubbleSpring
																}
																aria-hidden
															/>
														)}
														<span
															className={[
																'relative z-[1] transition-colors duration-200',
																isActive
																	? 'text-navy-900'
																	: 'text-slate-500 hover:text-navy-900',
															].join(' ')}
														>
															{f.label}
														</span>
													</button>
												);
											})}
										</div>
									</div>
								</motion.div>
							</LayoutGroup>
						</div>
					</motion.div>

					<LayoutGroup id="project-dashboard-grid">
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
							<AnimatePresence initial={false} mode="popLayout">
								{filteredProjects.map((p, i) => {
									return (
										<motion.div
											key={p.id}
											layout={layoutEnabled}
											layoutId={`project-card-${p.id}`}
											className="min-h-0"
											initial={{ opacity: 0, scale: 0.97 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.97 }}
											transition={{
												layout: layoutSpring,
												opacity: { duration: 0.22 },
												scale: { duration: 0.22 },
												delay: reduceMotion ? 0 : Math.min(i * 0.045, 0.36),
											}}
										>
											<MagneticProjectCard project={p} className="h-full" />
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
					</LayoutGroup>

					{filteredProjects.length === 0 && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="rounded-2xl border border-dashed border-slate-300 bg-white/80 py-12 text-center text-sm text-slate-600"
						>
							No projects in this category yet.
						</motion.p>
					)}
				</motion.div>
			</div>
		</motion.section>
	);
}

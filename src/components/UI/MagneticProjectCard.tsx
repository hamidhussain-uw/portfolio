import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ProjectSerialized } from './projectTypes';
import { QualityReportIsland } from './QualityReportIsland';

const STACK_ICON_SRC: Record<string, string> = {
	Playwright: 'https://cdn.simpleicons.org/playwright/2EAD33',
	TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
	'GitHub Actions': 'https://cdn.simpleicons.org/githubactions/2088FF',
	React: 'https://cdn.simpleicons.org/react/61DAFB',
	'D3.js': 'https://cdn.simpleicons.org/d3/F9A03C',
	Cypress: 'https://cdn.simpleicons.org/cypress/69D3A2',
	Postman: 'https://cdn.simpleicons.org/postman/FF6C37',
	Docker: 'https://cdn.simpleicons.org/docker/2496ED',
	Grafana: 'https://cdn.simpleicons.org/grafana/F46800',
	Python: 'https://cdn.simpleicons.org/python/3776AB',
	k6: 'https://cdn.simpleicons.org/k6/7D64FF',
};

const MAGNET_STRENGTH = 0.14;
const SPRING = { stiffness: 280, damping: 24, mass: 0.4 };

type Props = {
	project: ProjectSerialized;
	className?: string;
};

export function MagneticProjectCard({ project, className = '' }: Props) {
	const { title, description, stack, qualityReport, featured } = project.data;
	const ref = useRef<HTMLElement>(null);
	const reduceMotion = useReducedMotion();
	const [finePointer, setFinePointer] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, SPRING);
	const springY = useSpring(y, SPRING);

	useEffect(() => {
		const mq = window.matchMedia('(pointer: fine)');
		const update = () => setFinePointer(mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	const magneticEnabled = finePointer && !reduceMotion;

	const onPointerMove = useCallback(
		(e: React.PointerEvent<HTMLElement>) => {
			if (!magneticEnabled || !ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			x.set((e.clientX - cx) * MAGNET_STRENGTH);
			y.set((e.clientY - cy) * MAGNET_STRENGTH);
		},
		[magneticEnabled, x, y],
	);

	const onPointerLeave = useCallback(() => {
		x.set(0);
		y.set(0);
	}, [x, y]);

	const motionStyle = magneticEnabled ? { x: springX, y: springY } : undefined;

	return (
		<motion.article
			ref={ref}
			style={motionStyle}
			onPointerMove={onPointerMove}
			onPointerLeave={onPointerLeave}
			className={[
				'group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:min-h-[260px] sm:p-6 md:min-h-[280px] md:p-7',
				featured ? 'ring-2 ring-blue-200 md:min-h-[300px] lg:min-h-[320px]' : '',
				className,
			].join(' ')}
		>
			<div className="relative z-[1] flex flex-1 flex-col">
				<div className="mb-3 flex flex-wrap items-start justify-between gap-3 sm:mb-4">
					<h3 className="font-display max-w-[min(100%,20rem)] text-lg font-semibold tracking-tight text-balance text-slate-900 sm:max-w-[85%] sm:text-xl md:text-2xl">
						{title}
					</h3>
					{qualityReport && (
						<QualityReportIsland
							projectTitle={title}
							coverage={qualityReport.coverage}
							summary={qualityReport.summary}
							frameworks={qualityReport.frameworks}
						/>
					)}
				</div>

				<p className="font-sans mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 sm:mb-6 md:text-[0.9375rem]">
					{description}
				</p>

				{stack && stack.length > 0 && (
					<ul className="mt-auto flex flex-wrap gap-2" aria-label="Tech stack">
						{stack.map((tech) => {
							const icon = STACK_ICON_SRC[tech];
							return (
								<li
									key={tech}
									className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-1 pr-2.5 pl-1.5 text-xs font-medium text-slate-700"
								>
									{icon && (
										<img
											src={icon}
											alt=""
											width={16}
											height={16}
											className="size-4 shrink-0 opacity-90"
											loading="lazy"
										/>
									)}
									<span>{tech}</span>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</motion.article>
	);
}

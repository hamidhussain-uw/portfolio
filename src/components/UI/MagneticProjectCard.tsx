import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ProjectStackChips } from './ProjectStackChips';
import { RepoLink } from './RepoLink';
import type { ProjectSerialized } from './projectTypes';
import { QualityReportIsland } from './QualityReportIsland';

const MAGNET_STRENGTH = 0.14;
const SPRING = { stiffness: 280, damping: 24, mass: 0.4 };

type Props = {
	project: ProjectSerialized;
	className?: string;
};

export function MagneticProjectCard({ project, className = '' }: Props) {
	const { title, description, image, stack, qualityReport, repoUrl } = project.data;
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
			layout={false}
			style={motionStyle}
			onPointerMove={onPointerMove}
			onPointerLeave={onPointerLeave}
			whileHover={
				reduceMotion || magneticEnabled
					? undefined
					: {
							scale: 1.012,
							transition: { type: 'spring', stiffness: 420, damping: 28, mass: 0.6 },
						}
			}
			whileTap={reduceMotion ? undefined : { scale: 0.995 }}
			className={[
				'group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-navy-900 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-300 ease-out hover:shadow-[var(--shadow-premium)]',
				className,
			].join(' ')}
		>
			<div className="relative z-[1] flex min-h-0 flex-1 flex-col p-4 sm:p-5">
				<div className="mb-3 flex items-center gap-3">
					<motion.div
						className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:size-12 sm:p-2"
						aria-hidden
						whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -2 }}
						transition={{ type: 'spring', stiffness: 400, damping: 22 }}
					>
						<img
							src={image}
							alt=""
							width={40}
							height={40}
							className="max-h-8 max-w-8 object-contain sm:max-h-9 sm:max-w-9"
							loading="lazy"
							decoding="async"
						/>
					</motion.div>
					<div className="min-w-0 flex-1">
						<div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-2">
							<h3 className="min-w-0 max-w-full flex-1 basis-[min(100%,16rem)] font-display text-base font-semibold leading-snug tracking-tight text-balance text-navy-900 sm:text-lg">
								{title}
							</h3>
							{(qualityReport || repoUrl) && (
								<div className="flex flex-wrap items-center gap-2">
									{qualityReport && (
										<QualityReportIsland
											projectTitle={title}
											coverage={qualityReport.coverage}
											summary={qualityReport.summary}
											frameworks={qualityReport.frameworks}
										/>
									)}
									<RepoLink url={repoUrl} />
								</div>
							)}
						</div>
					</div>
				</div>

				<p className="font-sans mb-0 min-h-0 flex-1 text-sm leading-snug text-slate-600 max-sm:flex-none max-sm:grow-0">
					{description}
				</p>

				<ProjectStackChips stack={stack} className="mt-auto flex shrink-0 flex-col pt-12 sm:pt-7" />
			</div>
		</motion.article>
	);
}

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RepoLink } from './RepoLink';
import type { ProjectSerialized } from './projectTypes';
import { QualityReportIsland } from './QualityReportIsland';

const STACK_ICON_SRC: Record<string, string> = {
	Playwright: 'https://playwright.dev/img/playwright-logo.svg',
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
	Selenium: 'https://cdn.simpleicons.org/selenium/43B02A',
	BrowserStack: 'https://cdn.worldvectorlogo.com/logos/browserstack.svg',
	Jenkins: 'https://cdn.simpleicons.org/jenkins/D24939',
	GitLab: 'https://cdn.simpleicons.org/gitlab/FC6D26',
	'Vue.js': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
	Angular: 'https://cdn.simpleicons.org/angular/DD0031',
	JMeter: 'https://cdn.simpleicons.org/apachejmeter/D22129',
	Percy: 'https://cdn.simpleicons.org/percy/9E66BF',
	'OWASP ZAP': 'https://cdn.simpleicons.org/owasp',
	TestRail: 'https://cdn.simpleicons.org/testrail/65C179',
};

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

				{stack && stack.length > 0 && (
					<div className="mt-auto flex shrink-0 flex-col pt-12 sm:pt-7">
						<ul
							className="-mx-0.5 flex flex-nowrap gap-1 overflow-x-auto px-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
							aria-label="Tech stack"
						>
							{stack.map((tech) => {
								const icon = STACK_ICON_SRC[tech];
								return (
									<li
										key={tech}
										className="inline-flex shrink-0 items-center gap-px rounded-full border border-slate-200/60 bg-transparent py-px pl-px pr-1 text-[9px] font-medium leading-none text-slate-600 sm:text-[10px]"
									>
										{icon && (
											<img
												src={icon}
												alt=""
												width={10}
												height={10}
												className="size-2.5 shrink-0 object-contain sm:size-3"
												loading="lazy"
											/>
										)}
										<span className="whitespace-nowrap">{tech}</span>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
		</motion.article>
	);
}

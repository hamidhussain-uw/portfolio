import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const STATIC_MESH =
	'radial-gradient(ellipse 90% 75% at 50% 40%, rgb(99 91 255 / 0.07) 0%, transparent 52%), radial-gradient(ellipse 65% 55% at 78% 68%, rgb(255 126 95 / 0.06) 0%, transparent 48%), radial-gradient(ellipse 55% 45% at 50% 100%, rgb(99 91 255 / 0.05) 0%, transparent 42%)';

export function HeroMeshBackground() {
	const ref = useRef<HTMLDivElement>(null);
	const reduceMotion = useReducedMotion() === true;
	const mouseX = useMotionValue(0.5);
	const mouseY = useMotionValue(0.5);

	const smoothX = useSpring(mouseX, { stiffness: 28, damping: 22, mass: 0.6 });
	const smoothY = useSpring(mouseY, { stiffness: 28, damping: 22, mass: 0.6 });

	const blob1X = useTransform(smoothX, [0, 1], [18, -18]);
	const blob1Y = useTransform(smoothY, [0, 1], [14, -14]);
	const blob2X = useTransform(smoothX, [0, 1], [-22, 22]);
	const blob2Y = useTransform(smoothY, [0, 1], [-16, 20]);
	const blob3X = useTransform(smoothX, [0, 1], [12, -24]);
	const blob3Y = useTransform(smoothY, [0, 1], [-20, 18]);

	const meshX = useTransform(smoothX, [0, 1], ['14%', '86%']);
	const meshY = useTransform(smoothY, [0, 1], ['18%', '82%']);
	const meshBg = useMotionTemplate`
		radial-gradient(ellipse 90% 75% at ${meshX} ${meshY}, rgb(99 91 255 / 0.09) 0%, transparent 52%),
		radial-gradient(ellipse 65% 55% at 78% 68%, rgb(255 126 95 / 0.07) 0%, transparent 48%),
		radial-gradient(ellipse 55% 45% at 50% 100%, rgb(99 91 255 / 0.05) 0%, transparent 42%)
	`;

	useEffect(() => {
		if (reduceMotion) return;
		const el = ref.current;
		if (!el) return;

		const onMove = (e: PointerEvent) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / Math.max(r.width, 1);
			const y = (e.clientY - r.top) / Math.max(r.height, 1);
			mouseX.set(Math.min(1, Math.max(0, x)));
			mouseY.set(Math.min(1, Math.max(0, y)));
		};

		const onLeave = () => {
			mouseX.set(0.5);
			mouseY.set(0.5);
		};

		el.addEventListener('pointermove', onMove);
		el.addEventListener('pointerleave', onLeave);
		return () => {
			el.removeEventListener('pointermove', onMove);
			el.removeEventListener('pointerleave', onLeave);
		};
	}, [mouseX, mouseY, reduceMotion]);

	if (reduceMotion) {
		return (
			<div
				ref={ref}
				className="pointer-events-none absolute inset-0 overflow-hidden"
				aria-hidden
			>
				<div className="absolute inset-0 opacity-95" style={{ backgroundImage: STATIC_MESH }} />
				<div className="absolute top-[8%] left-[12%] h-[min(52vw,28rem)] w-[min(52vw,28rem)] rounded-full bg-electric-400/25 blur-[80px]" />
				<div className="absolute top-[28%] right-[5%] h-[min(48vw,26rem)] w-[min(48vw,26rem)] rounded-full bg-peach-400/20 blur-[72px]" />
				<div className="absolute bottom-[5%] left-[28%] h-[min(44vw,22rem)] w-[min(44vw,22rem)] rounded-full bg-electric-500/15 blur-[64px]" />
				<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-white" />
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className="pointer-events-auto absolute inset-0 overflow-hidden"
			aria-hidden
		>
			<motion.div className="absolute inset-0 opacity-95" style={{ backgroundImage: meshBg }} />
			<motion.div
				className="absolute top-[8%] left-[12%] h-[min(52vw,28rem)] w-[min(52vw,28rem)] rounded-full bg-electric-400/30 blur-[80px]"
				animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
				transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
				style={{ x: blob1X, y: blob1Y }}
			/>
			<motion.div
				className="absolute top-[28%] right-[5%] h-[min(48vw,26rem)] w-[min(48vw,26rem)] rounded-full bg-peach-400/25 blur-[72px]"
				animate={{ scale: [1.05, 1, 1.05] }}
				transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
				style={{ x: blob2X, y: blob2Y }}
			/>
			<motion.div
				className="absolute bottom-[5%] left-[28%] h-[min(44vw,22rem)] w-[min(44vw,22rem)] rounded-full bg-electric-500/20 blur-[64px]"
				animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
				transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
				style={{ x: blob3X, y: blob3Y }}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/88 to-white" />
		</div>
	);
}

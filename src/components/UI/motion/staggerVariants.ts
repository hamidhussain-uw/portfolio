import type { Variants } from 'framer-motion';

const springEase = [0.22, 1, 0.36, 1] as const;

export function getStaggerContainer(reduceMotion: boolean | null, stagger = 0.1, delayChildren = 0.06): Variants {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: reduceMotion ? 0 : stagger,
				delayChildren: reduceMotion ? 0 : delayChildren,
			},
		},
	};
}

/** Default list / text blocks: fade + slide up with smooth easing */
export function getStaggerItem(reduceMotion: boolean | null): Variants {
	return {
		hidden: {
			opacity: reduceMotion ? 1 : 0,
			y: reduceMotion ? 0 : 20,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: reduceMotion ? 0 : 0.48,
				ease: springEase,
			},
		},
	};
}

/** Hero / emphasis: slightly snappier spring */
export function getStaggerItemSpring(reduceMotion: boolean | null): Variants {
	return {
		hidden: {
			opacity: reduceMotion ? 1 : 0,
			y: reduceMotion ? 0 : 28,
			scale: reduceMotion ? 1 : 0.97,
		},
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: reduceMotion
				? { duration: 0 }
				: {
						type: 'spring',
						stiffness: 380,
						damping: 28,
						mass: 0.85,
					},
		},
	};
}

/** Small chips / icons: quick pop */
export function getStaggerItemPop(reduceMotion: boolean | null): Variants {
	return {
		hidden: {
			opacity: reduceMotion ? 1 : 0,
			y: reduceMotion ? 0 : 12,
			scale: reduceMotion ? 1 : 0.92,
		},
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: reduceMotion
				? { duration: 0 }
				: {
						type: 'spring',
						stiffness: 500,
						damping: 24,
						mass: 0.55,
					},
		},
	};
}

/** Section-scale fade (full-width bands) */
export function getSectionReveal(reduceMotion: boolean | null): Variants {
	return {
		hidden: {
			opacity: reduceMotion ? 1 : 0,
			y: reduceMotion ? 0 : 32,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: reduceMotion ? 0 : 0.65,
				ease: springEase,
			},
		},
	};
}

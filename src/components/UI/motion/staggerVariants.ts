import type { Variants } from 'framer-motion';

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
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
}

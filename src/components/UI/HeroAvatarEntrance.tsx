import { motion, useReducedMotion } from 'framer-motion';
import { contact } from '../../config/contact';

/** Primary hero photo; swap to `/images/my/my2.jpeg` if you prefer the other shot */
const IMG = '/images/my/my1.jpeg';

export function HeroAvatarEntrance() {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className="relative inline-flex shrink-0 flex-col items-center gap-2.5 md:-mt-2 md:self-start"
			initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 28 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={
				reduceMotion
					? { duration: 0 }
					: { type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }
			}
		>
			<motion.div
				className="shrink-0 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 p-[3px] shadow-md shadow-blue-500/15"
				animate={
					reduceMotion
						? undefined
						: {
								boxShadow: [
									'0 4px 6px -1px rgb(59 130 246 / 0.12), 0 2px 4px -2px rgb(59 130 246 / 0.08)',
									'0 8px 20px -4px rgb(59 130 246 / 0.2), 0 4px 10px -4px rgb(14 165 233 / 0.12)',
									'0 4px 6px -1px rgb(59 130 246 / 0.12), 0 2px 4px -2px rgb(59 130 246 / 0.08)',
								],
							}
				}
				transition={
					reduceMotion
						? undefined
						: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
				}
			>
				<motion.div
					className="rounded-full bg-white p-1"
					animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
					transition={
						reduceMotion
							? undefined
							: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
					}
				>
					<img
						src={IMG}
						alt={`${contact.name}, profile photo`}
						width={192}
						height={192}
						className="size-48 rounded-full object-cover object-[center_15%]"
						loading="eager"
						decoding="async"
					/>
				</motion.div>
			</motion.div>

			<motion.p
				className="font-display w-full text-center text-lg font-semibold tracking-tight text-balance text-slate-900 sm:text-xl"
				initial={reduceMotion ? false : { opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={
					reduceMotion
						? { duration: 0 }
						: { type: 'spring', stiffness: 320, damping: 26, delay: 0.12 }
				}
			>
				{contact.name}
			</motion.p>
		</motion.div>
	);
}

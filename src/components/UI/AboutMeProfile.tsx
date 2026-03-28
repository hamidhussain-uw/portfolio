import { motion, useReducedMotion } from 'framer-motion';
import { contact } from '../../config/contact';

export type AboutMeProfileProps = {
	/** When false, only the portrait (no name / role under the image). */
	showCaption?: boolean;
};

export function AboutMeProfile({ showCaption = true }: AboutMeProfileProps) {
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			className="flex w-full max-w-[22rem] shrink-0 flex-col gap-3 md:w-auto md:max-w-none"
			initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 22 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={
				reduceMotion
					? { duration: 0 }
					: { type: 'spring', stiffness: 220, damping: 28, mass: 0.92 }
			}
		>
			<div className="relative flex w-full justify-center">
				<div className="rounded-full bg-gradient-to-br from-electric-500 via-electric-400 to-peach-500 p-[3px] shadow-md shadow-electric-500/20 ring-1 ring-white/60">
					<motion.div
						className="rounded-full bg-white p-1"
						animate={
							reduceMotion
								? undefined
								: {
										y: [0, -5, 0],
									}
						}
						transition={
							reduceMotion
								? undefined
								: {
										duration: 8,
										repeat: Infinity,
										ease: 'easeInOut',
									}
						}
					>
						<div className="relative overflow-hidden rounded-full bg-slate-100">
							<img
								src={contact.portraitSrc}
								alt={`${contact.name}, professional portrait`}
								width={640}
								height={640}
								sizes="(min-width: 768px) 20rem, min(18rem, 85vw)"
								className="size-64 rounded-full object-cover object-[center_18%] sm:size-72 md:size-80"
								loading="eager"
								decoding="async"
								fetchPriority="high"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			{showCaption ? (
				<motion.div
					className="w-full text-center"
					initial={reduceMotion ? false : { opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={
						reduceMotion
							? { duration: 0 }
							: { type: 'spring', stiffness: 300, damping: 28, delay: 0.1 }
					}
				>
					<p className="font-display text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
						{contact.name}
					</p>
					<p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">{contact.role}</p>
				</motion.div>
			) : null}
		</motion.div>
	);
}

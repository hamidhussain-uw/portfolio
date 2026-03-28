import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useState } from 'react';

export type NavLink = { href: string; label: string };

const defaultLinks: NavLink[] = [
	{ href: '#work', label: 'Work' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contact' },
];

type Props = {
	links?: NavLink[];
	brand?: string;
};

export function FloatingNavbar({ links = defaultLinks, brand = 'QA' }: Props) {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const reduceMotion = useReducedMotion();

	useMotionValueEvent(scrollY, 'change', (y) => {
		setScrolled(y > 48);
	});

	return (
		<motion.header
			className="font-sans fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:top-7"
			initial={reduceMotion ? false : { y: -28, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
		>
			<motion.nav
				className="flex max-w-full items-center gap-0.5 rounded-full border border-slate-200 bg-white px-1.5 py-1.5 pr-2 pl-5 shadow-sm"
				initial={false}
				animate={{
					backgroundColor: 'rgb(255 255 255)',
					borderColor: scrolled ? 'rgb(226 232 240)' : 'rgb(226 232 240)',
					boxShadow: scrolled
						? '0 10px 15px -3px rgb(15 23 42 / 0.08), 0 4px 6px -4px rgb(15 23 42 / 0.05)'
						: '0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.05)',
				}}
				transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
				aria-label="Primary"
			>
				<a
					href="#top"
					className="font-display mr-3 shrink-0 rounded-lg text-sm font-semibold tracking-tight text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
				>
					{brand}
				</a>
				<ul className="flex items-center gap-0.5">
					{links.map((link) => (
						<li key={link.href}>
							<motion.a
								href={link.href}
								className="group relative block rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: 'spring', stiffness: 440, damping: 26 }}
							>
								<span
									className="pointer-events-none absolute inset-0 rounded-full bg-blue-50 opacity-0 transition-all duration-200 ease-out group-hover:opacity-100"
									aria-hidden
								/>
								<span className="relative z-[1] transition-colors duration-200 group-hover:text-blue-600">
									{link.label}
								</span>
							</motion.a>
						</li>
					))}
				</ul>
			</motion.nav>
		</motion.header>
	);
}

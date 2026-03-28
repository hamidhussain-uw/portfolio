import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useCallback, useEffect, useId, useState } from 'react';

export type NavLink = { href: string; label: string; external?: boolean };

const defaultLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/#expertise', label: 'Expertise' },
	{ href: '/#work', label: 'Portfolio' },
	{ href: '/contact', label: 'Contact' },
	{ href: 'https://www.linkedin.com/in/hamidhussain88/', label: 'LinkedIn', external: true },
	{ href: 'https://github.com/hamidhussain-uw', label: 'GitHub', external: true },
];

type Props = {
	links?: NavLink[];
	brand?: string;
	tagline?: string;
	githubUrl?: string;
	linkedinUrl?: string;
};

function NavItem({
	link,
	onNavigate,
	className,
}: {
	link: NavLink;
	onNavigate?: () => void;
	className: string;
}) {
	const reduceMotion = useReducedMotion();
	const base =
		'group relative block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
	const content = (
		<>
			<span
				className="pointer-events-none absolute inset-0 rounded-md bg-slate-100/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				aria-hidden
			/>
			<span className="relative z-[1] group-hover:text-slate-900">{link.label}</span>
		</>
	);

	if (link.external) {
		return (
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				onClick={onNavigate}
			>
				<span className={base}>
					{content}
					<span className="sr-only">(opens in new tab)</span>
				</span>
			</a>
		);
	}

	return (
		<motion.a
			href={link.href}
			className={className}
			onClick={onNavigate}
			whileHover={reduceMotion ? undefined : { y: -1 }}
			whileTap={reduceMotion ? undefined : { scale: 0.98 }}
			transition={{ type: 'spring', stiffness: 420, damping: 28 }}
		>
			<span className={base}>{content}</span>
		</motion.a>
	);
}

export function FloatingNavbar({
	links = defaultLinks,
	brand = 'Hamid Hussain',
	tagline = 'QA & Test Automation',
	githubUrl = 'https://github.com/hamidhussain-uw',
	linkedinUrl = 'https://www.linkedin.com/in/hamidhussain88/',
}: Props) {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const reduceMotion = useReducedMotion();
	const menuId = useId();

	const resolvedLinks = links.map((l) => {
		if (l.label === 'GitHub' && githubUrl) return { ...l, href: githubUrl };
		if (l.label === 'LinkedIn' && linkedinUrl) return { ...l, href: linkedinUrl };
		return l;
	});

	useMotionValueEvent(scrollY, 'change', (y) => {
		setScrolled(y > 8);
	});

	const closeMobile = useCallback(() => setMobileOpen(false), []);

	useEffect(() => {
		if (!mobileOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMobileOpen(false);
		};
		document.documentElement.style.overflow = 'hidden';
		window.addEventListener('keydown', onKey);
		return () => {
			document.documentElement.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [mobileOpen]);

	return (
		<motion.header
			className="font-sans fixed top-0 right-0 left-0 z-50 w-full pt-[env(safe-area-inset-top)]"
			initial={reduceMotion ? false : { y: -12, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
		>
			<div
				className={[
					'w-full border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90',
					scrolled ? 'border-slate-200 shadow-[0_4px_12px_-4px_rgb(15_23_42/0.06)]' : 'border-slate-200/80',
				].join(' ')}
			>
				<nav
					className="mx-auto flex h-14 max-w-design-content items-center justify-between gap-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6"
					aria-label="Primary"
				>
					<a
						href="/"
						className="group flex min-w-0 shrink items-center gap-2.5 rounded-lg py-1 pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
						onClick={closeMobile}
					>
						<span
							className="font-display flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-peach-500 text-xs font-bold text-white shadow-sm shadow-electric-500/25"
							aria-hidden
						>
							{brand
								.split(/\s+/)
								.map((w) => w[0])
								.join('')
								.slice(0, 2)
								.toUpperCase()}
						</span>
						<span className="min-w-0 text-left leading-tight">
							<span className="font-display block truncate text-sm font-semibold tracking-tight text-navy-900 transition-colors group-hover:text-electric-600">
								{brand}
							</span>
							<span className="hidden text-[11px] font-medium tracking-wide text-slate-500 md:block">
								{tagline}
							</span>
						</span>
					</a>

					<ul className="hidden items-center gap-0.5 lg:flex">
						{resolvedLinks.map((link) => (
							<li key={link.href + link.label}>
								<NavItem link={link} className="block" />
							</li>
						))}
					</ul>

					<div className="hidden items-center gap-2 lg:flex">
						<a
							href="/contact"
							className="inline-flex items-center justify-center rounded-lg bg-peach-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-peach-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
						>
							Get in touch
						</a>
					</div>

					<button
						type="button"
						className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 lg:hidden"
						aria-expanded={mobileOpen}
						aria-controls={menuId}
						aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
						onClick={() => setMobileOpen((o) => !o)}
					>
						{mobileOpen ? (
							<svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
								<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
							</svg>
						) : (
							<svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
								<path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
							</svg>
						)}
					</button>
				</nav>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						id={menuId}
						className="fixed right-0 left-0 z-40 max-h-[min(70dvh,calc(100dvh-3.5rem-env(safe-area-inset-top)))] overflow-y-auto border-b border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-lg lg:hidden"
						style={{ top: 'calc(3.5rem + env(safe-area-inset-top, 0px))' }}
						initial={reduceMotion ? false : { opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
						transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
						role="dialog"
						aria-modal="true"
						aria-label="Navigation menu"
					>
						<ul className="divide-y divide-slate-100">
							{resolvedLinks.map((link) => (
								<li key={link.href + link.label}>
									<NavItem link={link} onNavigate={closeMobile} className="flex min-h-11 w-full items-center px-4 py-3" />
								</li>
							))}
						</ul>
						<div className="border-t border-slate-100 p-4">
							<a
								href="/contact"
								className="flex w-full items-center justify-center rounded-lg bg-peach-500 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-peach-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 focus-visible:ring-offset-2"
								onClick={closeMobile}
							>
								Get in touch
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{mobileOpen && (
					<motion.button
						type="button"
						className="fixed right-0 bottom-0 left-0 z-30 bg-slate-900/40 lg:hidden"
						style={{ top: 'calc(3.5rem + env(safe-area-inset-top, 0px))' }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						aria-label="Close menu"
						onClick={closeMobile}
					/>
				)}
			</AnimatePresence>
		</motion.header>
	);
}

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export type TestFramework = 'playwright' | 'cypress';

const frameworkMeta: Record<
	TestFramework,
	{ label: string; src: string }
> = {
	playwright: {
		label: 'Playwright',
		src: 'https://cdn.simpleicons.org/playwright/2EAD33',
	},
	cypress: {
		label: 'Cypress',
		src: 'https://cdn.simpleicons.org/cypress/69D3A2',
	},
};

export type QualityReportProps = {
	projectTitle: string;
	coverage: string;
	summary: string;
	frameworks?: TestFramework[];
};

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function QualityReportIsland({
	projectTitle,
	coverage,
	summary,
	frameworks = [],
}: QualityReportProps) {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const titleId = useId();
	const triggerRef = useRef<HTMLButtonElement>(null);
	const dialogRef = useRef<HTMLDivElement>(null);

	useEffect(() => setMounted(true), []);

	const close = useCallback(() => setOpen(false), []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open, close]);

	useEffect(() => {
		if (open) document.documentElement.style.overflow = 'hidden';
		else document.documentElement.style.overflow = '';
		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [open]);

	useEffect(() => {
		if (!open || !dialogRef.current) return;
		const node = dialogRef.current;
		const focusables = () =>
			Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
				(el) => !el.hasAttribute('disabled') && el.offsetParent !== null,
			);

		requestAnimationFrame(() => {
			const list = focusables();
			(list[0] ?? node).focus();
		});

		const onTab = (e: KeyboardEvent) => {
			if (e.key !== 'Tab') return;
			const list = focusables();
			if (list.length === 0) return;
			const first = list[0];
			const last = list[list.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};
		document.addEventListener('keydown', onTab);
		return () => document.removeEventListener('keydown', onTab);
	}, [open]);

	const wasOpen = useRef(false);
	useEffect(() => {
		if (wasOpen.current && !open) {
			triggerRef.current?.focus({ preventScroll: true });
		}
		wasOpen.current = open;
	}, [open]);

	const modal = (
		<AnimatePresence>
			{open && (
				<motion.div
					key="quality-overlay"
					className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
				>
					<div
						role="presentation"
						className="absolute inset-0 bg-white/70 backdrop-blur-sm"
						onClick={close}
						onKeyDown={(e) => e.key === 'Escape' && close()}
					/>
					<motion.div
						ref={dialogRef}
						role="dialog"
						aria-modal="true"
						aria-labelledby={titleId}
						tabIndex={-1}
						className="relative z-[1] w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg outline-none md:max-w-lg md:p-8"
						initial={{ opacity: 0, scale: 0.94, y: 16 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.94, y: 16 }}
						transition={{ type: 'spring', stiffness: 320, damping: 28 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-sky-100/90 blur-2xl" />
						<button
							type="button"
							className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
							aria-label="Close quality report"
							onClick={close}
						>
							<svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
								<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
							</svg>
						</button>
						<p className="font-sans pr-12 text-xs font-semibold tracking-[0.18em] text-blue-600 uppercase">
							Test summary
						</p>
						<h2 id={titleId} className="font-display mt-2 text-xl font-semibold tracking-tight text-slate-900">
							{projectTitle}
						</h2>
						<div className="mt-6 flex flex-wrap items-end gap-2">
							<span className="font-display text-5xl font-bold tracking-tight text-slate-900 tabular-nums md:text-6xl">
								{coverage}
							</span>
							<span className="mb-2 text-sm font-medium text-slate-600">coverage</span>
						</div>
						<p className="mt-5 text-sm leading-relaxed text-slate-600">{summary}</p>
						{frameworks.length > 0 && (
							<div className="mt-8">
								<p className="mb-3 text-xs font-semibold tracking-wider text-slate-600 uppercase">Tooling</p>
								<ul className="flex flex-wrap gap-3">
									{frameworks.map((key) => {
										const meta = frameworkMeta[key];
										return (
											<li
												key={key}
												className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 pr-4 shadow-sm"
											>
												<img
													src={meta.src}
													alt=""
													width={22}
													height={22}
													className="size-[22px] shrink-0"
													aria-hidden
												/>
												<span className="text-sm font-medium text-slate-900">{meta.label}</span>
											</li>
										);
									})}
								</ul>
							</div>
						)}
						<button
							type="button"
							className="mt-8 w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							onClick={close}
						>
							Close
						</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	return (
		<>
			<motion.button
				ref={triggerRef}
				type="button"
				className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-600 bg-blue-600 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.98 }}
				transition={{ type: 'spring', stiffness: 400, damping: 24 }}
				onClick={() => setOpen(true)}
				aria-haspopup="dialog"
				aria-expanded={open}
			>
				<span className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-sky-200 opacity-90" aria-hidden />
				<svg
					className="h-3.5 w-3.5 shrink-0 text-white"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					aria-hidden
				>
					<path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
					<rect x="3" y="3" width="18" height="18" rx="4" />
				</svg>
				Quality report
			</motion.button>
			{mounted ? createPortal(modal, document.body) : null}
		</>
	);
}

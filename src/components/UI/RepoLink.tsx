type Props = {
	url?: string;
};

export function RepoLink({ url }: Props) {
	if (!url) return null;

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group inline-flex min-h-10 w-fit max-w-full items-center gap-1.5 self-start rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm transition-colors hover:border-electric-200 hover:shadow-[var(--shadow-premium)] hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-0 sm:py-1.5"
		>
			<svg
				className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-slate-700"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				aria-hidden
			>
				<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			View repository
			<span className="sr-only">(opens in new tab)</span>
		</a>
	);
}

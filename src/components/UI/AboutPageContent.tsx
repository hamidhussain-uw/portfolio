import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { aboutContent } from '../../config/aboutContent';
import { contact } from '../../config/contact';
import { getStaggerContainer, getStaggerItem, getStaggerItemSpring } from './motion/staggerVariants';
import { AboutMeProfile } from './AboutMeProfile';
import { ProjectStackChips } from './ProjectStackChips';
import { resolveStackIconSrc } from './stackIconSrc';
import { IconUpwork, UpworkJobSuccessLogo, UpworkTopRatedPlusLogo } from './UpworkCredentialMarks';

function ReviewStarRow({ count, decorative }: { count: number; decorative?: boolean }) {
	const safe = Math.min(5, Math.max(0, Math.round(count)));
	return (
		<span
			className="inline-flex items-center gap-0.5 text-amber-500"
			{...(decorative
				? { 'aria-hidden': true as const }
				: { role: 'img' as const, 'aria-label': `${safe} out of 5 stars` })}
		>
			{Array.from({ length: safe }, (_, i) => (
				<svg
					key={i}
					className="size-3.5 shrink-0 sm:size-4"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden
				>
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
				</svg>
			))}
		</span>
	);
}

/** Quotes longer than this show “Show more” / “Show less” (line-clamp when collapsed). */
const REVIEW_QUOTE_COLLAPSE_AT_CHARS = 220;

const TOOLS_CATEGORY_ACCENTS = [
	'from-electric-500 via-electric-400 to-cyan-400',
	'from-navy-800 via-electric-600 to-electric-400',
	'from-peach-500 via-amber-400 to-orange-400',
	'from-violet-500 via-electric-500 to-teal-400',
] as const;

const AI_AGENTIC_CATEGORY_ACCENTS = [
	'from-violet-600 via-fuchsia-500 to-electric-400',
	'from-indigo-700 via-violet-600 to-fuchsia-400',
	'from-electric-600 via-violet-500 to-purple-400',
] as const;

type ToolCategory = { readonly name: string; readonly items: readonly string[] };

function AboutCategorizedToolsSection({
	reduceMotion,
	sectionId,
	headingId,
	eyebrow,
	intro,
	categories,
	container,
	item,
	head,
	panelTone,
	accents,
}: {
	reduceMotion: boolean | null;
	sectionId: string;
	headingId: string;
	eyebrow: string;
	intro?: string;
	categories: readonly ToolCategory[];
	container: Variants;
	item: Variants;
	head: Variants;
	panelTone: 'electric' | 'violet';
	accents: readonly string[];
}) {
	const tone =
		panelTone === 'violet'
			? {
					panel: 'from-white via-violet-50/40 to-violet-500/[0.08]',
					orbTR: 'from-violet-400/20',
					orbBL: 'from-electric-400/12',
					ring: 'ring-violet-100/90',
				}
			: {
					panel: 'from-white via-slate-50/40 to-electric-500/[0.06]',
					orbTR: 'from-electric-400/15',
					orbBL: 'from-peach-400/10',
					ring: 'ring-slate-100/80',
				};

	return (
		<motion.section
			id={sectionId}
			variants={container}
			initial={reduceMotion ? 'show' : 'hidden'}
			whileInView="show"
			viewport={{ once: true, margin: '-60px 0px', amount: 0.08 }}
			className="mt-16 scroll-mt-28 sm:mt-20"
			aria-labelledby={headingId}
		>
			<motion.p
				variants={head}
				id={headingId}
				className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
			>
				{eyebrow}
			</motion.p>
			{intro ? (
				<motion.p
					variants={head}
					className="mt-3 max-w-design-prose text-sm leading-relaxed text-slate-600 sm:text-base"
				>
					{intro}
				</motion.p>
			) : null}
			<motion.div
				variants={item}
				className={`relative ${intro ? 'mt-6' : 'mt-8'} overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br ${tone.panel} p-6 shadow-[var(--shadow-card)] ring-1 ${tone.ring} sm:p-8 md:p-10`}
			>
				<div
					className={`pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-gradient-to-br ${tone.orbTR} via-transparent to-transparent blur-3xl`}
					aria-hidden
				/>
				<div
					className={`pointer-events-none absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-gradient-to-tr ${tone.orbBL} via-transparent to-transparent blur-3xl`}
					aria-hidden
				/>
				<motion.div
					variants={container}
					className="relative grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7"
				>
					{categories.map((cat, i) => (
						<motion.article
							key={cat.name}
							variants={item}
							className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-electric-200/60 hover:shadow-lg hover:shadow-electric-500/[0.08] sm:p-6"
						>
							<div
								className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[i % accents.length]}`}
								aria-hidden
							/>
							<div className="flex items-start gap-3 pt-1">
								<span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/12 to-electric-500/5 font-display text-sm font-bold tabular-nums text-electric-700 ring-1 ring-electric-500/15 sm:size-10 sm:text-base">
									{String(i + 1).padStart(2, '0')}
								</span>
								<div className="min-w-0 flex-1">
									<h3 className="font-display text-lg font-semibold text-navy-900 sm:text-xl">{cat.name}</h3>
									<ul
										className="mt-4 flex flex-wrap gap-2.5"
										aria-label={`${cat.name} tools`}
									>
										{cat.items.map((tool) => (
											<ToolsTechPill key={tool} label={tool} />
										))}
									</ul>
								</div>
							</div>
						</motion.article>
					))}
				</motion.div>
			</motion.div>
		</motion.section>
	);
}

function ToolsTechPill({ label }: { label: string }) {
	const iconSrc = resolveStackIconSrc(label);
	return (
		<li>
			<span
				className={`group inline-flex max-w-full items-center rounded-full border border-slate-200/90 bg-white text-xs font-medium text-navy-900 shadow-sm transition-all duration-200 hover:border-electric-300/70 hover:bg-gradient-to-br hover:from-white hover:to-electric-500/[0.06] hover:shadow-md hover:shadow-electric-500/10 sm:text-sm ${iconSrc ? 'gap-2 px-3 py-2 sm:px-3.5 sm:py-2' : 'px-3.5 py-2 sm:px-4 sm:py-2.5'}`}
			>
				{iconSrc ? (
					<img
						src={iconSrc}
						alt=""
						width={18}
						height={18}
						className="size-4 shrink-0 object-contain opacity-90 transition-opacity group-hover:opacity-100 sm:size-[1.125rem]"
						loading="lazy"
					/>
				) : null}
				<span className="min-w-0 leading-snug">{label}</span>
			</span>
		</li>
	);
}

function ReviewQuoteExpandable({ quote }: { quote: string }) {
	const quoteId = useId();
	const [expanded, setExpanded] = useState(false);
	const collapsible = quote.length > REVIEW_QUOTE_COLLAPSE_AT_CHARS;

	return (
		<div className="mt-3">
			<p
				id={quoteId}
				className={`text-sm leading-relaxed text-slate-700 ${!expanded && collapsible ? 'line-clamp-5' : ''}`}
			>
				&ldquo;{quote}&rdquo;
			</p>
			{collapsible ? (
				<button
					type="button"
					className="mt-2 rounded-md text-xs font-semibold text-electric-600 underline-offset-2 hover:text-electric-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/40 focus-visible:ring-offset-2"
					aria-expanded={expanded}
					aria-controls={quoteId}
					onClick={() => setExpanded((e) => !e)}
				>
					{expanded ? 'Show less' : 'Show more'}
				</button>
			) : null}
		</div>
	);
}

type ReviewCarouselItem = {
	readonly quote: string;
	readonly attribution: string;
	readonly rating: number;
	readonly dateRange?: string;
};

function ReviewCardsCarousel({
	items,
	ariaLabel,
}: {
	items: readonly ReviewCarouselItem[];
	ariaLabel: string;
}) {
	const scrollerRef = useRef<HTMLUListElement>(null);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(true);

	const updateScroll = () => {
		const el = scrollerRef.current;
		if (!el) return;
		const { scrollLeft, scrollWidth, clientWidth } = el;
		setCanPrev(scrollLeft > 4);
		setCanNext(scrollLeft < scrollWidth - clientWidth - 4);
	};

	useEffect(() => {
		const el = scrollerRef.current;
		if (!el) return;
		updateScroll();
		el.addEventListener('scroll', updateScroll, { passive: true });
		const ro = new ResizeObserver(updateScroll);
		ro.observe(el);
		return () => {
			el.removeEventListener('scroll', updateScroll);
			ro.disconnect();
		};
	}, [items.length]);

	const scrollByStep = (dir: 'prev' | 'next') => {
		const el = scrollerRef.current;
		if (!el) return;
		const li = el.querySelector('li');
		if (!li) return;
		const gap = 16;
		const step = li.getBoundingClientRect().width + gap;
		el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' });
	};

	return (
		<div
			className="relative mt-4"
			role="region"
			aria-roledescription="carousel"
			aria-label={ariaLabel}
		>
			<div className="flex items-stretch gap-2 sm:gap-3">
				<button
					type="button"
					className="z-10 flex w-9 shrink-0 items-center justify-center self-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-electric-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/40 disabled:pointer-events-none disabled:opacity-35 sm:w-10"
					aria-label="Previous reviews"
					disabled={!canPrev}
					onClick={() => scrollByStep('prev')}
				>
					<svg
						className="size-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						aria-hidden
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
					</svg>
				</button>
				<ul
					ref={scrollerRef}
					className="min-w-0 flex flex-1 flex-nowrap gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === 'ArrowLeft') {
							e.preventDefault();
							scrollByStep('prev');
						}
						if (e.key === 'ArrowRight') {
							e.preventDefault();
							scrollByStep('next');
						}
					}}
				>
					{items.map((r, i) => (
						<li
							key={`about-review-${i}`}
							className="flex shrink-0 snap-start snap-always flex-col rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm sm:p-5 basis-full sm:basis-[calc((100%-2rem)/3)]"
						>
							<p className="text-sm font-semibold text-navy-900">{r.attribution}</p>
							<div className="mt-2 flex flex-wrap items-center gap-2">
								<span className="sr-only">Rating is {r.rating.toFixed(1)} out of 5.</span>
								<ReviewStarRow count={r.rating} decorative />
								<span className="text-sm font-semibold tabular-nums text-navy-900">
									{r.rating.toFixed(1)}
								</span>
							</div>
							{r.dateRange ? <p className="mt-2 text-xs text-slate-500">{r.dateRange}</p> : null}
							<ReviewQuoteExpandable quote={r.quote} />
						</li>
					))}
				</ul>
				<button
					type="button"
					className="z-10 flex w-9 shrink-0 items-center justify-center self-center rounded-full border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-electric-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/40 disabled:pointer-events-none disabled:opacity-35 sm:w-10"
					aria-label="Next reviews"
					disabled={!canNext}
					onClick={() => scrollByStep('next')}
				>
					<svg
						className="size-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						aria-hidden
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export function AboutPageContent() {
	const reduceMotion = useReducedMotion();
	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.1, 0.05), [reduceMotion]);
	const item = useMemo(() => getStaggerItemSpring(reduceMotion), [reduceMotion]);
	const head = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);

	const { hero, upwork, workHistory, tools, agenticAiTesting, reviews } = aboutContent;

	return (
		<div className="font-sans border-b border-slate-100 bg-white">
			<div className="mx-auto max-w-design-content px-5 pt-24 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] sm:pt-28 md:pt-28">
				<motion.header
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					animate="show"
					className="mx-auto flex w-full max-w-design-content flex-col items-center gap-8 md:flex-row md:items-start md:gap-10 lg:gap-12"
				>
					<AboutMeProfile showCaption={false} />
					<div className="min-w-0 w-full flex-1 md:max-w-design-md">
						<motion.p
							variants={item}
							className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
						>
							{hero.eyebrow}
						</motion.p>
						<motion.h1
							variants={item}
							className="font-display mt-3 text-5xl font-semibold tracking-tight text-balance text-navy-900 sm:text-6xl md:leading-[1.08]"
						>
							{hero.title}
						</motion.h1>
						<motion.p
							variants={item}
							className="mt-3 text-base font-medium leading-snug text-slate-600 sm:text-lg"
						>
							{hero.professionalTitle}
						</motion.p>
						<motion.p variants={item} className="mt-4 text-lg font-medium leading-relaxed text-navy-800 sm:text-xl">
							{hero.lead}
						</motion.p>
						{hero.paragraphs.map((p, i) => (
							<motion.p
								key={`about-hero-${i}`}
								variants={item}
								className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg"
							>
								{p}
							</motion.p>
						))}
					</div>
				</motion.header>

				<motion.section
					id="upwork-success"
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					whileInView="show"
					viewport={{ once: true, margin: '-60px 0px', amount: 0.12 }}
					className="mt-16 scroll-mt-28 sm:mt-20"
					aria-labelledby="about-upwork-heading"
				>
					<motion.div variants={item} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-[var(--shadow-card)] sm:p-8">
						<p
							id="about-upwork-heading"
							className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
						>
							{upwork.eyebrow}
						</p>
						<div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
							<div className="inline-flex items-center gap-2" title={upwork.jobSuccessHint}>
								<UpworkJobSuccessLogo className="size-10 sm:size-11" />
								<span className="text-sm font-bold text-[#001e00]">{upwork.jobSuccessLabel}</span>
							</div>
							<div className="inline-flex items-center gap-2" title={upwork.topRatedHint}>
								<UpworkTopRatedPlusLogo className="size-8 sm:size-9" />
								<span className="text-sm font-bold text-[#001e00]">{upwork.topRatedLabel}</span>
							</div>
							<a
								href={contact.upworkUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-emerald-200 hover:text-emerald-800"
							>
								<IconUpwork className="size-4 text-[#14a800]" />
								{upwork.cta}
								<span className="sr-only">(opens in new tab)</span>
							</a>
						</div>
						<p
							id="about-reviews-heading"
							className="mt-8 font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
						>
							{reviews.title}
						</p>
						<ReviewCardsCarousel items={reviews.items} ariaLabel={reviews.title} />
					</motion.div>
				</motion.section>

				<AboutCategorizedToolsSection
					reduceMotion={reduceMotion}
					sectionId="tools"
					headingId="about-tools-heading"
					eyebrow={tools.eyebrow}
					categories={tools.categories}
					container={container}
					item={item}
					head={head}
					panelTone="electric"
					accents={TOOLS_CATEGORY_ACCENTS}
				/>
				<AboutCategorizedToolsSection
					reduceMotion={reduceMotion}
					sectionId="agentic-ai-testing"
					headingId="about-agentic-ai-heading"
					eyebrow={agenticAiTesting.eyebrow}
					intro={agenticAiTesting.intro}
					categories={agenticAiTesting.categories}
					container={container}
					item={item}
					head={head}
					panelTone="violet"
					accents={AI_AGENTIC_CATEGORY_ACCENTS}
				/>

				<section
					id="work-history"
					className="mt-16 scroll-mt-28 sm:mt-20"
					aria-labelledby="about-work-history-heading"
				>
					<motion.div
						variants={container}
						initial={reduceMotion ? 'show' : 'hidden'}
						whileInView="show"
						viewport={{ once: true, margin: '-60px 0px', amount: 0.1 }}
					>
						<motion.p
							variants={head}
							className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
						>
							{workHistory.eyebrow}
						</motion.p>
						<motion.h2
							variants={head}
							id="about-work-history-heading"
							className="font-display mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl"
						>
							{workHistory.title}
						</motion.h2>
						<motion.h3 variants={head} className="mt-6 font-display text-lg font-semibold text-navy-900">
							Completed jobs
						</motion.h3>
						<motion.ul className="mt-4 space-y-6" variants={container}>
							{workHistory.completed.map((job, i) => (
								<motion.li
									key={`work-history-${i}`}
									variants={item}
									className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
								>
									<p className="font-display text-lg font-semibold text-navy-900">{job.title}</p>
									{'detail' in job && job.detail ? (
										<div className="mt-3 space-y-4">
											<div>
												<p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
													Project
												</p>
												<p className="mt-1.5 text-sm leading-relaxed text-slate-700 sm:text-base">
													{job.detail.description}
												</p>
											</div>
											<div>
												<p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
													My contributions
												</p>
												<p className="mt-1.5 text-sm leading-relaxed text-slate-700 sm:text-base">
													{job.detail.contributions}
												</p>
											</div>
											<div className="rounded-xl border border-electric-300/60 bg-gradient-to-br from-electric-500/10 via-white to-electric-500/5 px-4 py-4 shadow-sm sm:px-5 sm:py-5">
												<p className="text-xs font-semibold tracking-[0.15em] text-electric-700 uppercase">
													Outcomes
												</p>
												<ul className="mt-3 list-inside list-disc space-y-2 text-sm font-medium leading-relaxed text-navy-900 marker:text-electric-600 sm:text-base">
													{job.detail.outcomes.map((line) => (
														<li key={line} className="pl-0.5">
															{line}
														</li>
													))}
												</ul>
											</div>
										</div>
									) : job.feedback ? (
										<blockquote className="mt-3 border-l-2 border-electric-200 pl-4 text-sm leading-relaxed text-slate-600 sm:text-base">
											&ldquo;{job.feedback}&rdquo;
										</blockquote>
									) : null}
									<ProjectStackChips
										stack={job.stack}
										className="mt-4"
										ariaLabel={`Tools for ${job.title}`}
									/>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</section>
			</div>
		</div>
	);
}

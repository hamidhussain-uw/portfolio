import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import { contact, buildMailtoHref } from '../../config/contact';
import { getStaggerContainer, getStaggerItem, getStaggerItemPop, getStaggerItemSpring } from './motion/staggerVariants';

export function ContactPageContent() {
	const reduceMotion = useReducedMotion();
	const container = useMemo(() => getStaggerContainer(reduceMotion, 0.1, 0.06), [reduceMotion]);
	const item = useMemo(() => getStaggerItemSpring(reduceMotion), [reduceMotion]);
	const linkPop = useMemo(() => getStaggerItemPop(reduceMotion), [reduceMotion]);
	const formField = useMemo(() => getStaggerItem(reduceMotion), [reduceMotion]);
	const formFieldsContainer = useMemo(() => getStaggerContainer(reduceMotion, 0.07, 0.05), [reduceMotion]);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const onSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			const body = [`From: ${name || '(not provided)'}`, `Reply-to: ${email || '(not provided)'}`, '', message].join(
				'\n',
			);
			window.location.href = buildMailtoHref({
				subject: `Portfolio contact: ${name || 'Website form'}`,
				body,
			});
		},
		[name, email, message],
	);

	return (
		<div className="font-sans border-b border-slate-100 bg-white">
			<div className="mx-auto max-w-design-content px-5 pt-24 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] sm:pt-28 md:pt-28">
				<motion.div
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					animate="show"
					className="mx-auto max-w-3xl text-center md:max-w-none"
				>
					<motion.p
						variants={item}
						className="font-sans text-xs font-semibold tracking-[0.2em] text-electric-500 uppercase"
					>
						Contact
					</motion.p>
					<motion.h1
						variants={item}
						className="font-display mt-3 text-5xl font-semibold tracking-tight text-balance text-navy-900 sm:text-6xl md:leading-[1.08]"
					>
						Let’s talk about quality on your next release
					</motion.h1>
					<motion.p
						variants={item}
						className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
					>
						Automation, manual strategy, CI gates, or a second pair of eyes on test plans. Send a note and
						I’ll respond as soon as I can.
					</motion.p>
				</motion.div>

				<motion.div
					variants={container}
					initial={reduceMotion ? 'show' : 'hidden'}
					animate="show"
					className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:gap-12"
				>
					<motion.div variants={item}>
						<div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] transition-[box-shadow] duration-300 hover:shadow-[var(--shadow-premium)] sm:p-8">
							<h2 className="font-display text-lg font-semibold tracking-tight text-navy-900">
								Connect directly
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-slate-600">
								Fastest responses are usually on LinkedIn. GitHub is best for code and automation samples.
							</p>
							<motion.ul
								className="mt-6 flex flex-col gap-3"
								variants={formFieldsContainer}
								initial={reduceMotion ? 'show' : 'hidden'}
								animate="show"
							>
								<motion.li variants={linkPop}>
									<a
										href={contact.linkedinUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-electric-200 hover:bg-electric-500/5 hover:text-electric-700"
									>
										<span>LinkedIn</span>
										<span className="text-slate-400" aria-hidden>
											↗
										</span>
										<span className="sr-only">(opens in new tab)</span>
									</a>
								</motion.li>
								<motion.li variants={linkPop}>
									<a
										href={contact.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
									>
										<span>GitHub</span>
										<span className="text-slate-400" aria-hidden>
											↗
										</span>
										<span className="sr-only">(opens in new tab)</span>
									</a>
								</motion.li>
								<motion.li variants={linkPop}>
									<a
										href={buildMailtoHref({ subject: 'Hello', body: '' })}
										className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-electric-200 hover:bg-electric-500/5"
									>
										<span className="truncate">{contact.email}</span>
										<span className="shrink-0 text-xs font-medium text-electric-600">Email</span>
									</a>
								</motion.li>
							</motion.ul>
						</div>
					</motion.div>

					<motion.div variants={item}>
						<div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] transition-[box-shadow] duration-300 hover:shadow-[var(--shadow-premium)] sm:p-8">
							<h2 className="font-display text-lg font-semibold tracking-tight text-navy-900">
								Send a message
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-slate-600">
								Opens your email app with your text filled in. No backend required.
							</p>
							<motion.form
								className="mt-6 space-y-4"
								onSubmit={onSubmit}
								noValidate
								variants={formFieldsContainer}
								initial={reduceMotion ? 'show' : 'hidden'}
								animate="show"
							>
								<motion.div variants={formField}>
									<label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
										Name
									</label>
									<input
										id="contact-name"
										name="name"
										type="text"
										autoComplete="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-electric-300 focus:bg-white focus:ring-2 focus:ring-electric-500/20"
										placeholder="Your name"
									/>
								</motion.div>
								<motion.div variants={formField}>
									<label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
										Your email
									</label>
									<input
										id="contact-email"
										name="email"
										type="email"
										autoComplete="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-electric-300 focus:bg-white focus:ring-2 focus:ring-electric-500/20"
										placeholder="you@company.com"
									/>
								</motion.div>
								<motion.div variants={formField}>
									<label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-700">
										Message
									</label>
									<textarea
										id="contact-message"
										name="message"
										rows={5}
										required
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-electric-300 focus:bg-white focus:ring-2 focus:ring-electric-500/20"
										placeholder="Project context, timeline, tooling…"
									/>
								</motion.div>
								<motion.div variants={formField}>
									<motion.button
										type="submit"
										whileHover={reduceMotion ? undefined : { scale: 1.01 }}
										whileTap={reduceMotion ? undefined : { scale: 0.99 }}
										className="w-full rounded-xl bg-peach-500 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-peach-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 focus-visible:ring-offset-2"
									>
										Open in email app
									</motion.button>
								</motion.div>
							</motion.form>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

import { STACK_ICON_SRC } from './stackIconSrc';

type Props = {
	stack?: string[];
	/** Wrapper div classes (e.g. spacing from landing cards). */
	className?: string;
	ariaLabel?: string;
};

export function ProjectStackChips({ stack, className = '', ariaLabel = 'Tech stack' }: Props) {
	if (!stack?.length) return null;

	return (
		<div className={className}>
			<ul
				className="-mx-0.5 flex flex-nowrap gap-1 overflow-x-auto px-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				aria-label={ariaLabel}
			>
				{stack.map((tech) => {
					const icon = STACK_ICON_SRC[tech];
					return (
						<li
							key={tech}
							className="inline-flex shrink-0 items-center gap-px rounded-full border border-slate-200/60 bg-transparent py-px pl-px pr-1 text-[9px] font-medium leading-none text-slate-600 sm:text-[10px]"
						>
							{icon ? (
								<img
									src={icon}
									alt=""
									width={10}
									height={10}
									className="size-2.5 shrink-0 object-contain sm:size-3"
									loading="lazy"
								/>
							) : null}
							<span className="whitespace-nowrap">{tech}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

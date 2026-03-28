/** Shared Upwork glyph + credential marks (footer, About page). */

export function IconUpwork({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
		</svg>
	);
}

const UPWORK_SUCCESS_CIRC = 119.38052083641213;

export function UpworkJobSuccessLogo({ className }: { className?: string }) {
	return (
		<div
			className={[
				'relative inline-flex shrink-0 items-center justify-center',
				className ?? 'size-8 sm:size-9',
			].join(' ')}
		>
			<svg aria-hidden className="size-full" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="19" fill="none" stroke="#c5e3c8" strokeWidth="1.5" />
				<circle
					cx="20"
					cy="20"
					r="19"
					fill="none"
					stroke="#108a00"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeDasharray={`${UPWORK_SUCCESS_CIRC} ${UPWORK_SUCCESS_CIRC}`}
					transform="rotate(-90 20 20)"
				/>
			</svg>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
				<svg className="size-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
					<path
						fill="#001e00"
						fillRule="evenodd"
						d="M18.37 19.002H5.63v-1.867h12.74v1.867zm.02-3.736H5.608L3 8.314l4.992 1.664L12 5l4.008 4.978L21 8.314l-2.61 6.952z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
}

export function UpworkTopRatedPlusLogo({ className }: { className?: string }) {
	return (
		<svg className={['shrink-0', className ?? 'size-6'].join(' ')} viewBox="0 0 28 28" fill="none" aria-hidden>
			<path
				fill="#F66DBC"
				d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"
			/>
			<path
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth="1.5"
				d="M17.94 18.396c.2.73-.597 1.262-1.195.863l-2.723-1.793-2.724 1.793c-.598.399-1.395-.199-1.196-.863l.731-3.122-2.524-2.06c-.598-.465-.266-1.395.465-1.46l3.255-.2 1.196-3.056c.265-.664 1.262-.664 1.527 0l1.196 3.056m1.662.199v4.65M20 14.078h-4.65"
			/>
		</svg>
	);
}

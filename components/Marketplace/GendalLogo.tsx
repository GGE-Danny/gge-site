import { cn } from "@/lib/utils";

/**
 * The Gendal mark, ported from royal-storefront: a bold, straight G carrying
 * the Gambian flag's horizontal stripes (red/white/blue/white/green,
 * 6:1:4:1:6), wearing a slanted golden crown. Real vector geometry so it
 * renders identically everywhere.
 */
export function GendalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 -3 76 79"
      className={cn("logo-mark", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="gendal-stripes"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="19.5"
          x2="0"
          y2="72.5"
        >
          <stop offset="0" stopColor="#CE1126" />
          <stop offset="0.3333" stopColor="#CE1126" />
          <stop offset="0.3333" stopColor="#FFFFFF" />
          <stop offset="0.3889" stopColor="#FFFFFF" />
          <stop offset="0.3889" stopColor="#0C1C8C" />
          <stop offset="0.6111" stopColor="#0C1C8C" />
          <stop offset="0.6111" stopColor="#FFFFFF" />
          <stop offset="0.6667" stopColor="#FFFFFF" />
          <stop offset="0.6667" stopColor="#3A7728" />
          <stop offset="1" stopColor="#3A7728" />
        </linearGradient>
        <linearGradient id="gendal-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3CE6B" />
          <stop offset="1" stopColor="#C9962E" />
        </linearGradient>
      </defs>

      {/* The G: 315° arc opening upper-right, closed by a straight chin bar */}
      <path
        d="M49.4 31.1 A20 20 0 1 0 56 46 M62.5 46 H38"
        fill="none"
        stroke="url(#gendal-stripes)"
        strokeWidth="13"
        strokeLinecap="butt"
      />

      {/* Slanted golden crown, resting on the G */}
      <g className="logo-crown">
        <g transform="translate(20 3) rotate(-13 4 15)">
          <path
            d="M1 15 L7.5 4 L13 10.5 L18 1.5 L23 10.5 L28.5 4 L35 15 Q18 19 1 15 Z"
            fill="url(#gendal-gold)"
            stroke="#A87A1E"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="7.5" cy="3.4" r="2" fill="url(#gendal-gold)" stroke="#A87A1E" strokeWidth="1.1" />
          <circle cx="18" cy="0.9" r="2" fill="url(#gendal-gold)" stroke="#A87A1E" strokeWidth="1.1" />
          <circle cx="28.5" cy="3.4" r="2" fill="url(#gendal-gold)" stroke="#A87A1E" strokeWidth="1.1" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Full lockup: crowned G + "endal" in shining italic serif.
 * Size it with font-size on the parent — the mark scales with the type.
 * Wrap in a `.logo-animate` container to play the load sequence.
 */
export function GendalLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <GendalMark className="h-[1.6em] w-auto" />
      {/* "endal" aligns its baseline to the G's chin bar (y≈72.5 of 76),
          not the crowned box center, hence the em-based drop. */}
      <span className="wordmark -ml-[0.14em] translate-y-[0.32em] pr-[0.1em] text-[1em] leading-none">
        endal
      </span>
      <span className="sr-only">Gendal</span>
    </span>
  );
}

import { useState } from "react";

// Approximate coordinates on a 1000x500 equirectangular canvas
const MARKETS = [
  { c: "United States", x: 235, y: 200, flag: "🇺🇸" },
  { c: "Canada", x: 245, y: 160, flag: "🇨🇦" },
  { c: "Brazil", x: 350, y: 305, flag: "🇧🇷" },
  { c: "United Kingdom", x: 480, y: 165, flag: "🇬🇧" },
  { c: "Germany", x: 510, y: 170, flag: "🇩🇪" },
  { c: "France", x: 495, y: 180, flag: "🇫🇷" },
  { c: "Spain", x: 478, y: 195, flag: "🇪🇸" },
  { c: "Italy", x: 515, y: 195, flag: "🇮🇹" },
  { c: "Turkey", x: 575, y: 200, flag: "🇹🇷" },
  { c: "UAE", x: 625, y: 240, flag: "🇦🇪" },
  { c: "Saudi Arabia", x: 605, y: 240, flag: "🇸🇦" },
  { c: "Pakistan", x: 680, y: 220, flag: "🇵🇰", hub: true },
  { c: "India", x: 700, y: 245, flag: "🇮🇳" },
  { c: "China", x: 770, y: 215, flag: "🇨🇳" },
  { c: "Japan", x: 850, y: 215, flag: "🇯🇵" },
  { c: "South Korea", x: 825, y: 210, flag: "🇰🇷" },
  { c: "Malaysia", x: 790, y: 290, flag: "🇲🇾" },
  { c: "Australia", x: 855, y: 365, flag: "🇦🇺" },
  { c: "South Africa", x: 545, y: 365, flag: "🇿🇦" },
  { c: "Nigeria", x: 500, y: 290, flag: "🇳🇬" },
  { c: "Egypt", x: 565, y: 230, flag: "🇪🇬" },
  { c: "Russia", x: 660, y: 140, flag: "🇷🇺" },
];

const HUB = MARKETS.find((m) => m.hub)!;

export function WorldMap() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy-deep to-navy p-4 sm:p-6 shadow-elegant">
      <div aria-hidden className="absolute inset-0 bg-grid-luxury opacity-50" />
      <svg viewBox="0 0 1000 500" className="relative w-full h-auto" role="img" aria-label="Export markets map">
        <defs>
          <radialGradient id="dotGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.92 0.13 90)" />
            <stop offset="100%" stopColor="oklch(0.72 0.14 80)" />
          </radialGradient>
          <linearGradient id="routeGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.13 85 / 0.0)" />
            <stop offset="50%" stopColor="oklch(0.85 0.14 88 / 0.9)" />
            <stop offset="100%" stopColor="oklch(0.78 0.13 85 / 0.0)" />
          </linearGradient>
        </defs>

        {/* Subtle continents silhouette */}
        <g fill="oklch(1 0 0 / 0.04)" stroke="oklch(1 0 0 / 0.08)" strokeWidth="0.6">
          <path d="M150,150 Q230,110 320,140 T420,200 Q400,260 350,300 T280,360 Q210,340 170,290 Q140,230 150,150 Z" />
          <path d="M460,130 Q540,110 620,150 T720,200 Q700,250 650,260 T560,250 Q500,230 470,200 Q455,170 460,130 Z" />
          <path d="M540,260 Q600,260 640,290 T660,360 Q620,400 560,400 T490,380 Q470,330 510,290 Z" />
          <path d="M700,180 Q800,160 880,200 T940,260 Q900,300 820,300 T720,280 Q690,230 700,180 Z" />
          <path d="M810,340 Q860,330 900,360 T910,400 Q870,420 820,410 T790,380 Q790,360 810,340 Z" />
        </g>

        {/* Shipping arcs from Pakistan */}
        {MARKETS.filter((m) => !m.hub).map((m, i) => {
          const mx = (HUB.x + m.x) / 2;
          const my = Math.min(HUB.y, m.y) - 60 - Math.abs(HUB.x - m.x) * 0.05;
          return (
            <path
              key={`r-${i}`}
              d={`M${HUB.x},${HUB.y} Q${mx},${my} ${m.x},${m.y}`}
              stroke="url(#routeGrad)"
              strokeWidth="1"
              fill="none"
              opacity={hover && hover !== m.c ? 0.15 : 0.55}
            />
          );
        })}

        {/* Market dots */}
        {MARKETS.map((m) => (
          <g key={m.c} onMouseEnter={() => setHover(m.c)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
            {m.hub && (
              <circle cx={m.x} cy={m.y} r="10" fill="oklch(0.78 0.13 85 / 0.25)" className="animate-ping-soft" style={{ transformOrigin: `${m.x}px ${m.y}px` }} />
            )}
            <circle cx={m.x} cy={m.y} r={m.hub ? 6 : 3.5} fill="url(#dotGold)" />
            {hover === m.c && (
              <g>
                <rect x={m.x + 8} y={m.y - 22} rx="6" ry="6" width={(m.c.length * 6.2) + 30} height="22" fill="oklch(0.14 0.05 265 / 0.92)" stroke="oklch(0.78 0.13 85 / 0.5)" />
                <text x={m.x + 16} y={m.y - 7} fontSize="11" fill="oklch(0.97 0.01 95)" fontFamily="Inter, sans-serif">
                  {m.flag}  {m.c}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" /> Karachi HQ</span>
        <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-gold/80" /> Active export market</span>
        <span className="ml-auto text-white/60">Hover a dot to see the country</span>
      </div>
    </div>
  );
}
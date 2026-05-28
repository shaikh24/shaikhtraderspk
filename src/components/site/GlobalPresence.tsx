const HUBS = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
];

export function GlobalPresence() {
  return (
    <section aria-label="Global presence" className="border-y border-border bg-card/40">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gradient-gold">Global Presence</span>
            <h3 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
              Active export hubs across <span className="text-gradient-gold">4 continents</span>
            </h3>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {HUBS.map((h) => (
              <li
                key={h.name}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/85 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-foreground hover:shadow-gold"
              >
                <span aria-hidden className="text-base leading-none">{h.flag}</span>
                {h.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
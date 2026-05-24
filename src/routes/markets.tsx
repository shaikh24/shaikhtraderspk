import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

const REGIONS = [
  { region: "Middle East", flags: ["🇦🇪","🇸🇦","🇶🇦","🇰🇼","🇧🇭","🇴🇲","🇯🇴"] },
  { region: "Europe", flags: ["🇬🇧","🇩🇪","🇫🇷","🇮🇹","🇪🇸","🇳🇱","🇸🇪","🇵🇱"] },
  { region: "North America", flags: ["🇺🇸","🇨🇦","🇲🇽"] },
  { region: "Asia Pacific", flags: ["🇨🇳","🇯🇵","🇰🇷","🇸🇬","🇲🇾","🇦🇺","🇳🇿"] },
  { region: "Africa", flags: ["🇿🇦","🇳🇬","🇰🇪","🇪🇬","🇲🇦","🇹🇿","🇪🇹"] },
  { region: "South America", flags: ["🇧🇷","🇦🇷","🇨🇱","🇨🇴","🇵🇪","🇺🇾"] },
];

export const Route = createFileRoute("/markets")({
  head: () => ({ meta: [{ title: "Export Markets — Shaikh Traders" }, { name: "description", content: "We export from Pakistan to 60+ markets across six continents." }] }),
  component: () => (
    <Section eyebrow="Reach" title="Export Markets" subtitle="Pakistani exports delivered to 60+ countries across six continents." center>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {REGIONS.map((r) => (
          <div key={r.region} className="hover-lift rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{r.region}</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-2xl">
              {r.flags.map((f) => <span key={f} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted">{f}</span>)}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{r.flags.length}+ active routes</p>
          </div>
        ))}
      </div>
    </Section>
  ),
});
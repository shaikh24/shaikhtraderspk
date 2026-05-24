import { ShieldCheck, BadgeCheck, Award, Globe2, Container, Leaf } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "ISO 9001 Aligned QA" },
  { icon: BadgeCheck, label: "CE Compliant Goods" },
  { icon: Award, label: "FBR Registered Exporter" },
  { icon: Container, label: "FCL & LCL Worldwide" },
  { icon: Globe2, label: "60+ Export Markets" },
  { icon: Leaf, label: "Food-Safety Certified" },
];

export function TrustBar() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/60">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-10 py-5 will-change-transform">
        {doubled.map((it, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-muted-foreground">
            <it.icon className="h-4 w-4 text-gold" />
            <span className="tracking-wide">{it.label}</span>
            <span className="mx-2 h-1 w-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
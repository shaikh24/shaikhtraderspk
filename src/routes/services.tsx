import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Globe2, Boxes, Ship, Plane, ShieldCheck, Factory, Tag, FileCheck2 } from "lucide-react";

const SERVICES = [
  { icon: Globe2, title: "Global Export Solutions", desc: "End-to-end export from Pakistan to 60+ countries." },
  { icon: Boxes, title: "Product Sourcing", desc: "Curated supplier network with strict quality screening." },
  { icon: Ship, title: "International Logistics", desc: "Sea, air and rail freight with full visibility." },
  { icon: Plane, title: "Container Shipping", desc: "FCL & LCL consolidation with optimal routing." },
  { icon: ShieldCheck, title: "Quality Inspection", desc: "Pre-shipment QA, lab testing and compliance reports." },
  { icon: Factory, title: "OEM Manufacturing", desc: "Custom production at vetted Pakistani factories." },
  { icon: Tag, title: "Private Label Services", desc: "Your brand, packaged and shipped — turn-key." },
  { icon: FileCheck2, title: "Trade Documentation", desc: "LC, BL, certificates of origin, customs paperwork." },
];

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Shaikh Traders" }, { name: "description", content: "Full-service global trade: sourcing, manufacturing, quality control, shipping and documentation." }] }),
  component: () => (
    <Section eyebrow="Services" title="Full-service global trade" subtitle="One partner across sourcing, manufacturing, QA and door-to-door delivery." center>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <div key={s.title} className="group hover-lift rounded-2xl border border-border bg-card p-6">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-navy-deep shadow-gold">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  ),
});
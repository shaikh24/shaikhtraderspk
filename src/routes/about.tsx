import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Shaikh Traders" }, { name: "description", content: "About Shaikh Traders Private Limited — a Pakistani import & export company serving 60+ markets." }] }),
  component: () => (
    <Section eyebrow="About Us" title="A Pakistani export house, built on trust." subtitle="Over a decade connecting verified Pakistani manufacturers with serious global buyers.">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src={warehouse} alt="Warehouse" className="rounded-3xl shadow-elegant" loading="lazy" />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Shaikh Traders Private Limited was founded with a simple mission: make Pakistani-made goods accessible to the world without friction. From Karachi's port to buyers in Europe, the Gulf, North America and beyond — we handle sourcing, quality assurance, documentation, and logistics under one roof.</p>
          <p>Our team works directly with vetted factories across Karachi, Lahore, Faisalabad and Sialkot, giving you wholesale pricing with the safety of an experienced trade partner.</p>
          <ul className="grid gap-2 sm:grid-cols-2 pt-4">
            {["Direct factory access", "QA & lab testing", "Custom OEM production", "Door-to-door logistics", "Trade finance support", "60+ active markets"].map((x) => (
              <li key={x} className="rounded-xl border border-border bg-card p-3 text-sm text-foreground">{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  ),
});
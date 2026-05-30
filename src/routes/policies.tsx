import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SampleRequestDialog } from "@/components/site/SampleRequestDialog";
import { Package, Banknote, Truck, ShieldCheck } from "lucide-react";

const POLICIES = [
  {
    icon: Package,
    title: "Free Sample Policy",
    body:
      "Shaikh Traders offers ONE (1) product sample completely FREE of cost to verified B2B buyers to evaluate our premium export quality. The buyer is strictly responsible for covering all international courier and shipping charges (e.g. DHL, FedEx, UPS) via their own courier account number.",
  },
  {
    icon: Truck,
    title: "Multiple Samples / Kit Policy",
    body:
      "If a buyer requires MULTIPLE items or a complete sample kit, the additional items will be fully chargeable based on product specifications, along with international shipping costs. Sample charges are 100% adjustable and refundable upon placement of the first Full Container Load (FCL) or commercial bulk order.",
  },
  {
    icon: Banknote,
    title: "Advance Payment Policy",
    body:
      "Standard payment terms require an advance deposit (typically 30%–50% depending on the commodity) via secure Bank Telegraphic Transfer (T/T) or 100% Irrevocable Letter of Credit (L/C) at sight before production begins. The remaining balance is payable against submission of the Bill of Lading (B/L) and shipping documents.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    body:
      "Every shipment is pre-inspected against the signed proforma invoice. Independent third-party inspection (SGS, Bureau Veritas, Intertek) can be arranged at the buyer's request and cost. All goods are dispatched with full export documentation: commercial invoice, packing list, certificate of origin, and B/L.",
  },
];

function PoliciesPage() {
  return (
    <Section
      eyebrow="Trade Policies"
      title="Sample, Payment & Shipping Terms"
      subtitle="Transparent international trade terms used on every Shaikh Traders export shipment."
      center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {POLICIES.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-elegant transition hover:border-gold/60 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full gradient-gold text-navy-deep shadow-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-navy via-navy-deep to-navy p-8 sm:p-10 text-center shadow-gold">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">Evaluate our quality first</h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70">
          Request a complimentary sample today. Pay only the courier — we'll handle the rest.
        </p>
        <div className="mt-6 flex justify-center">
          <SampleRequestDialog />
        </div>
      </div>
    </Section>
  );
}

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Trade Policies — Shaikh Traders" },
      {
        name: "description",
        content:
          "Free sample policy, multi-sample policy, advance payment (T/T, L/C) terms and quality compliance for Shaikh Traders Pvt. Ltd. exports.",
      },
    ],
  }),
  component: PoliciesPage,
});
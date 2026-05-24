import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Shaikh Traders" }] }),
  component: () => (
    <Section eyebrow="Legal" title="Terms & Conditions">
      <div className="prose prose-sm max-w-3xl text-muted-foreground space-y-4">
        <p>By using this website you agree to the following terms. Content is provided for informational purposes and does not constitute a binding commercial offer.</p>
        <p>Pricing, lead times, MOQs and specifications are confirmed only via signed proforma invoice. Final terms are governed by the trade contract between Shaikh Traders Private Limited and the buyer.</p>
        <p>All trademarks and product images remain the property of their respective owners.</p>
      </div>
    </Section>
  ),
});
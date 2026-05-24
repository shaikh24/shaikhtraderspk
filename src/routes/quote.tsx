import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/quote")({
  head: () => ({ meta: [{ title: "Request a Quote — Shaikh Traders" }, { name: "description", content: "Request a competitive export quote from Shaikh Traders Private Limited." }] }),
  component: () => (
    <Section eyebrow="Request a Quote" title="Get a tailored export quote" subtitle="Share your requirement — we'll come back with pricing, lead time and shipping options within 24 hours.">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-elegant">
        <InquiryForm source="quote" />
      </div>
    </Section>
  ),
});
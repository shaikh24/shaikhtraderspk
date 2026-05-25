import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Shaikh Traders" }, { name: "description", content: `Get in touch with Shaikh Traders Private Limited at ${SITE.email} or ${SITE.phone} for inquiries, quotes and partnerships.` }] }),
  component: () => (
    <Section eyebrow="Contact" title="Let's start a conversation" subtitle="Tell us what you're sourcing — we respond within 24 hours.">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Head Office</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" />{SITE.address}</li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 text-gold" /><a href={`tel:${SITE.phone}`} className="transition-colors hover:text-gold">{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 text-gold" /><a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">{SITE.email}</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            <p>Business hours: Mon–Sat, 9:00 – 18:00 PKT.</p>
            <p className="mt-2">For urgent inquiries, use WhatsApp via the floating button.</p>
          </div>
        </aside>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <InquiryForm source="contact" />
        </div>
      </div>
    </Section>
  ),
});
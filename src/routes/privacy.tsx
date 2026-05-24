import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Shaikh Traders" }] }),
  component: () => (
    <Section eyebrow="Legal" title="Privacy Policy">
      <div className="prose prose-sm max-w-3xl text-muted-foreground space-y-4">
        <p>We respect your privacy. This page explains what information we collect when you submit an inquiry or subscribe to our newsletter, and how we use it.</p>
        <p>We collect only the information you provide directly (name, email, phone, company, country and inquiry details). We use it solely to respond to your request and to send relevant trade updates if you opt in.</p>
        <p>We do not sell or share your data with third parties. Data is stored securely and encrypted in transit. You may request deletion of your data at any time by contacting us.</p>
      </div>
    </Section>
  ),
});
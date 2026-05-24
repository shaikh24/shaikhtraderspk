import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "What is your minimum order quantity (MOQ)?", a: "MOQs vary by category — textile from 500 pcs, surgical instruments from 100 sets. Contact us for exact figures." },
  { q: "Which Incoterms do you support?", a: "EXW, FOB, CFR, CIF and DDP. We tailor terms to your destination and customs setup." },
  { q: "How do you handle quality inspection?", a: "Every order includes pre-shipment QA, photo documentation and (on request) third-party lab testing." },
  { q: "What's your payment policy?", a: "30% advance via wire/LC, 70% against shipping documents. LC at sight available for established buyers." },
  { q: "Average lead time?", a: "Ready stock: 5–10 days. OEM production: 30–60 days depending on category and order volume." },
  { q: "Do you ship samples?", a: "Yes — samples are available against courier charges and refundable sample fees for serious buyers." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Shaikh Traders" }, { name: "description", content: "Frequently asked questions about our export, pricing, MOQ and shipping." }] }),
  component: () => (
    <Section eyebrow="FAQ" title="Frequently asked questions" center>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  ),
});
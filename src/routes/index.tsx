import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Ship, Globe2, ShieldCheck, Boxes, Plane, FileCheck2, Factory, Tag, ClipboardCheck } from "lucide-react";
import heroCargo from "@/assets/hero-cargo.jpg";
import warehouse from "@/assets/warehouse.jpg";
import pTextile from "@/assets/p-textile.jpg";
import pSport from "@/assets/p-sportswear.jpg";
import pHome from "@/assets/p-home.jpg";
import pSurgical from "@/assets/p-surgical.jpg";
import pLeather from "@/assets/p-leather.jpg";
import pSalt from "@/assets/p-salt.jpg";
import pRice from "@/assets/p-rice.jpg";
import { Section } from "@/components/site/Section";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRODUCTS = [
  { name: "Textile & Fabrics", img: pTextile, desc: "Premium cotton, blends and woven fabrics for global apparel brands." },
  { name: "Sportswear & Gym Wear", img: pSport, desc: "Performance-grade activewear, custom branded and OEM ready." },
  { name: "Home Textile", img: pHome, desc: "Bed linens, towels, and cushions in luxury cotton finishes." },
  { name: "Surgical Instruments", img: pSurgical, desc: "ISO & CE compliant stainless instruments from Sialkot." },
  { name: "Leather Products", img: pLeather, desc: "Hand-finished jackets, bags, gloves and accessories." },
  { name: "Himalayan Pink Salt", img: pSalt, desc: "Edible salt, lamps and bath products, food-grade certified." },
  { name: "Rice & Spices", img: pRice, desc: "Basmati rice and premium spices, food-safety certified." },
];

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

const STATS = [
  { v: "60+", l: "Export Markets" },
  { v: "12+", l: "Years Experience" },
  { v: "500+", l: "Global Clients" },
  { v: "99.4%", l: "On-time Delivery" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroCargo}
          alt="Cargo ship at an international port at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, oklch(0.1 0.04 265 / 0.85) 0%, oklch(0.14 0.05 265 / 0.7) 60%, oklch(0.22 0.06 265 / 0.6) 100%)" }} />
        <div className="container-px mx-auto max-w-7xl py-28 sm:py-36 lg:py-44 text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Shipping Globally Since 2012
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] animate-fade-up" style={{ animationDelay: ".1s" }}>
            Global Trade Solutions From <span className="text-gradient-gold">Pakistan</span> To The World
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 animate-fade-up" style={{ animationDelay: ".2s" }}>
            Premium import & export of textiles, surgical instruments, leather, Himalayan salt, rice and spices —
            backed by quality inspection, transparent logistics and a worldwide buyer network.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: ".3s" }}>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 transition">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition">
              Request Quote
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Contact Us
            </Link>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Download Catalog
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: ".4s" }}>
            {STATS.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <dt className="text-2xl sm:text-3xl font-semibold text-gradient-gold">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PRODUCTS */}
      <Section eyebrow="Product Categories" title="Sourced. Inspected. Shipped." subtitle="From raw fabrics to finished goods — a curated catalog refined over a decade of export experience." center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group hover-lift overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/quote" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold transition-colors">
                  Inquire now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <div className="bg-muted/40 border-y border-border">
        <Section eyebrow="What We Do" title="Full-service global trade" subtitle="One partner across sourcing, manufacturing, QA and door-to-door delivery." center>
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
      </div>

      {/* ABOUT TEASER */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={warehouse} alt="Premium textile warehouse" loading="lazy" width={1280} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gradient-gold">About Shaikh Traders</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold">A trusted name in Pakistani exports.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Shaikh Traders Private Limited connects established Pakistani manufacturers with serious international buyers.
              We handle sourcing, quality control, documentation and shipping so you can focus on your market.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["ISO-aligned quality control", "Direct factory relationships", "Transparent pricing", "24-hour quote turnaround"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><ClipboardCheck className="mt-0.5 h-4 w-4 text-gold" />{f}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 transition">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section className="pt-0">
        <div className="rounded-3xl gradient-hero p-1">
          <div className="rounded-[calc(1.5rem-4px)] p-10 sm:p-14">
            <Newsletter variant="card" />
          </div>
        </div>
      </Section>
    </>
  );
}

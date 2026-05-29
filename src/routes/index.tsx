import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Ship, Globe2, ShieldCheck, Boxes, Plane, FileCheck2, Factory, Tag, ClipboardCheck, Quote, Star } from "lucide-react";
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
import { TrustBar } from "@/components/site/TrustBar";
import { WorldMap } from "@/components/site/WorldMap";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRODUCTS = [
  { name: "Textile & Fabrics", slug: "textile", img: pTextile, desc: "Premium cotton, blends and woven fabrics for global apparel brands." },
  { name: "Sportswear & Gym Wear", slug: "sportswear", img: pSport, desc: "Performance-grade activewear, custom branded and OEM ready." },
  { name: "Home Textile", slug: "home-textile", img: pHome, desc: "Bed linens, towels, and cushions in luxury cotton finishes." },
  { name: "Surgical Instruments", slug: "surgical", img: pSurgical, desc: "ISO & CE compliant stainless instruments from Sialkot." },
  { name: "Leather Products", slug: "leather", img: pLeather, desc: "Hand-finished jackets, bags, gloves and accessories." },
  { name: "Himalayan Pink Salt", slug: "himalayan-pink-salt", img: pSalt, desc: "Edible salt, lamps and bath products, food-grade certified." },
  { name: "Rice & Spices", slug: "rice-spices", img: pRice, desc: "Basmati rice and premium spices, food-safety certified." },
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

const TESTIMONIALS = [
  { q: "Reliable, transparent and consistent quality across every shipment. Our go-to Pakistani export partner.", a: "Daniel R.", r: "Procurement Director, Hamburg" },
  { q: "Shaikh Traders handled documentation and logistics flawlessly. Saved us weeks of back-and-forth.", a: "Aisha M.", r: "Operations Lead, Dubai" },
  { q: "Surgical instruments arrived perfectly packed and CE-compliant — exactly as quoted.", a: "Carlos V.", r: "Distributor, São Paulo" },
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
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, oklch(0.1 0.04 265 / 0.85) 0%, oklch(0.14 0.05 265 / 0.7) 60%, oklch(0.22 0.06 265 / 0.6) 100%)" }} />
        {/* Animated background layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-luxury opacity-60" />
          <div className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.78_0.13_85/0.35),transparent_60%)] blur-2xl animate-orb" />
          <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.32_0.08_265/0.6),transparent_60%)] blur-2xl animate-orb-2" />
        </div>
        <div className="container-px mx-auto max-w-7xl py-24 sm:py-32 lg:py-44 text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Shipping Globally Since 2012
          </span>
          <h1 className="mt-6 max-w-4xl text-balance text-[2.4rem] sm:text-5xl lg:text-7xl font-semibold leading-[1.05] animate-fade-up" style={{ animationDelay: ".1s" }}>
            Global Trade Solutions From <span className="text-gradient-gold">Pakistan</span> To The World
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base sm:text-lg text-white/80 animate-fade-up" style={{ animationDelay: ".2s" }}>
            Premium import & export of textiles, surgical instruments, leather, Himalayan salt, rice and spices —
            backed by quality inspection, transparent logistics and a worldwide buyer network.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: ".3s" }}>
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.78_0.13_85/0.6)]">
              Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:-translate-y-0.5">
              Request Quote
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Us
            </Link>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Download Catalog
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: ".4s" }}>
            {STATS.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <dt className="text-2xl sm:text-3xl font-semibold text-gradient-gold">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* GLOBAL PRESENCE */}
      <GlobalPresence />

      {/* PRODUCTS */}
      <Section eyebrow="Product Categories" title="Sourced. Inspected. Shipped." subtitle="From raw fabrics to finished goods — a curated catalog refined over a decade of export experience." center>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <Link
                to="/products/$category"
                params={{ category: p.slug }}
                className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_24px_60px_-24px_oklch(0.22_0.06_265/0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-navy-deep/70 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold border border-gold/30">
                    Export ready
                  </span>
                  <h3 className="absolute bottom-4 left-5 right-5 text-xl font-semibold text-white drop-shadow">{p.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                      Explore category <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">MOQ on request</span>
                  </div>
                </div>
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPORT MARKETS MAP */}
      <div className="bg-muted/30 border-y border-border">
        <Section eyebrow="Global Footprint" title="Trusted across 60+ export markets" subtitle="From our Karachi headquarters to ports in Europe, the Americas, GCC, Africa, and Asia-Pacific." center>
          <Reveal>
            <WorldMap />
          </Reveal>
        </Section>
      </div>

      {/* SERVICES */}
      <div className="bg-muted/40 border-y border-border">
        <Section eyebrow="What We Do" title="Full-service global trade" subtitle="One partner across sourcing, manufacturing, QA and door-to-door delivery." center>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-gold text-navy-deep shadow-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_85/0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* ABOUT TEASER */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={warehouse} alt="Premium textile warehouse" loading="lazy" width={1280} height={800} className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl glass-dark p-4 text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full gradient-gold text-navy-deep"><Ship className="h-4 w-4" /></span>
              <div>
                <div className="text-sm font-semibold">Karachi · Port Qasim</div>
                <div className="text-[11px] uppercase tracking-wider text-white/70">HQ & Consolidation Hub</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gradient-gold">About Shaikh Traders</span>
            <h2 className="mt-3 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold">A trusted name in Pakistani exports.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Shaikh Traders Private Limited connects established Pakistani manufacturers with serious international buyers.
              We handle sourcing, quality control, documentation and shipping so you can focus on your market.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["ISO-aligned quality control", "Direct factory relationships", "Transparent pricing", "24-hour quote turnaround"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><ClipboardCheck className="mt-0.5 h-4 w-4 text-gold" />{f}</li>
              ))}
            </ul>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold transition-all hover:-translate-y-0.5">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-muted/40 border-y border-border">
        <Section eyebrow="What Buyers Say" title="Backed by buyers in 25+ countries" center>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-elegant transition-all hover:-translate-y-1 hover:border-gold/50">
                  <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/30" />
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.q}"</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <div className="text-sm font-semibold">{t.a}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

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

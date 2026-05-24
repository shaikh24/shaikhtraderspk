import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import pTextile from "@/assets/p-textile.jpg";
import pSport from "@/assets/p-sportswear.jpg";
import pHome from "@/assets/p-home.jpg";
import pSurgical from "@/assets/p-surgical.jpg";
import pLeather from "@/assets/p-leather.jpg";
import pSalt from "@/assets/p-salt.jpg";
import pRice from "@/assets/p-rice.jpg";

const PRODUCTS = [
  { name: "Textile & Fabrics", img: pTextile, desc: "Cotton, blends, woven and knit fabrics for global apparel brands." },
  { name: "Sportswear & Gym Wear", img: pSport, desc: "Performance activewear, OEM and private-label ready." },
  { name: "Home Textile", img: pHome, desc: "Bed linens, towels, kitchen textile and cushions." },
  { name: "Surgical Instruments", img: pSurgical, desc: "ISO & CE compliant stainless instruments from Sialkot." },
  { name: "Leather Products", img: pLeather, desc: "Hand-finished jackets, bags, gloves and accessories." },
  { name: "Himalayan Pink Salt", img: pSalt, desc: "Edible salt, lamps and bath products, food-grade." },
  { name: "Rice & Spices", img: pRice, desc: "Basmati rice and premium spices, food-safety certified." },
];

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [{ title: "Products — Shaikh Traders" }, { name: "description", content: "Premium Pakistani exports: textile, sportswear, home textile, surgical, leather, Himalayan salt, rice & spices." }] }),
  component: () => (
    <Section eyebrow="Catalog" title="Our Product Categories" subtitle="Premium Pakistani exports, ready for global distribution." center>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article key={p.name} className="group hover-lift overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/quote" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-gold transition-colors">Inquire <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  ),
});
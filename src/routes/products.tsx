import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

type Category = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  subcategories: string[];
  images: { url: string; alt: string }[];
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const CATEGORIES: Category[] = [
  {
    id: "textile",
    name: "Textile & Fabrics",
    tagline: "Mill-direct fabrics for the world's leading apparel brands.",
    description:
      "Vertically integrated cotton, blended, woven and knit fabrics produced in Pakistan's finest mills. From combed yarn to finished rolls — consistent quality, full traceability and OEKO-TEX standards on every shipment.",
    specs: [
      { label: "GSM Range", value: "80 – 320 gsm" },
      { label: "Composition", value: "100% Cotton, CVC, PC, Modal" },
      { label: "Width", value: "58\" / 60\" / 72\"" },
      { label: "MOQ", value: "3,000 meters" },
      { label: "Certifications", value: "OEKO-TEX, BCI, GOTS" },
      { label: "Lead Time", value: "30 – 45 days" },
    ],
    subcategories: ["Combed Yarn", "Denim", "Jersey Knit", "Twill", "Poplin", "Fleece", "Canvas", "Greige Fabric"],
    images: [
      { url: u("photo-1528459801416-a9e53bbf4e17"), alt: "Stacked premium fabric rolls in showroom" },
      { url: u("photo-1452860606245-08befc0ff44b"), alt: "Indigo denim fabric close-up" },
      { url: u("photo-1558769132-cb1aea458c5e"), alt: "Folded textile swatches in earth tones" },
      { url: u("photo-1583744946564-b52ac1c389c8"), alt: "Combed cotton yarn cones on spindle" },
    ],
  },
  {
    id: "sportswear",
    name: "Sportswear & Gym Wear",
    tagline: "Performance activewear, OEM & private-label ready.",
    description:
      "High-performance athletic apparel manufactured in Sialkot and Karachi — moisture-wicking fabrics, 4-way stretch, sublimation and embroidery in-house. Trusted by international gym brands and pro teams.",
    specs: [
      { label: "Fabrics", value: "Polyester, Spandex, Dri-Fit" },
      { label: "Print", value: "Sublimation, Screen, DTF" },
      { label: "Sizes", value: "XS – 4XL custom" },
      { label: "MOQ", value: "100 pcs per design" },
      { label: "Customization", value: "Full OEM + Private Label" },
      { label: "Lead Time", value: "25 – 40 days" },
    ],
    subcategories: ["Hoodies", "Tracksuits", "Jerseys", "Compression Wear", "Shorts", "Leggings", "Tank Tops", "Cycling Kits"],
    images: [
      { url: u("photo-1571019613454-1cb2f99b2d8b"), alt: "Athlete training in performance gym wear" },
      { url: u("photo-1556906781-9a412961c28c"), alt: "Premium athletic hoodie product shot" },
      { url: u("photo-1517466787929-bc90951d0974"), alt: "Pro sports jersey lineup" },
      { url: u("photo-1517836357463-d25dfeac3438"), alt: "Compression and tracksuit performance wear" },
    ],
  },
  {
    id: "home",
    name: "Home Textile",
    tagline: "Hotel-grade linens, towels and decor.",
    description:
      "Luxury home textiles produced for 5-star hotel chains and premium retailers — long-staple cotton, double-stitched seams and dye-fast finishing. Bedding, bath and kitchen ranges available in white-label and custom palettes.",
    specs: [
      { label: "Cotton", value: "Long-staple, 200 – 1000 TC" },
      { label: "Towel GSM", value: "400 – 700 gsm" },
      { label: "MOQ", value: "500 sets" },
      { label: "Packaging", value: "Retail-ready, custom" },
      { label: "Certifications", value: "OEKO-TEX, BSCI" },
      { label: "Lead Time", value: "35 – 50 days" },
    ],
    subcategories: ["Bed Linen", "Bath Towels", "Bathrobes", "Kitchen Textile", "Cushions", "Curtains", "Table Linen", "Blankets"],
    images: [
      { url: u("photo-1631049307264-da0ec9d70304"), alt: "Crisp white hotel-grade bed linen" },
      { url: u("photo-1600369671236-e74521d4b6ad"), alt: "Stacked plush spa bath towels" },
      { url: u("photo-1505693416388-ac5ce068fe85"), alt: "Luxury bedroom interior with premium linens" },
      { url: u("photo-1616594039964-ae9021a400a0"), alt: "Elegant draped curtains in modern interior" },
    ],
  },
  {
    id: "surgical",
    name: "Surgical Instruments",
    tagline: "ISO & CE compliant precision instruments from Sialkot.",
    description:
      "German-standard stainless steel surgical and dental instruments crafted in Sialkot — the world's hub for medical instrument manufacturing. Every piece is hand-finished, passivated and individually inspected.",
    specs: [
      { label: "Material", value: "AISI 410 / 420 / 304 Steel" },
      { label: "Finish", value: "Mirror / Satin / Black" },
      { label: "Standards", value: "ISO 13485, CE, FDA" },
      { label: "MOQ", value: "50 pcs per SKU" },
      { label: "Packaging", value: "Sterile pouches, kits" },
      { label: "Lead Time", value: "30 – 60 days" },
    ],
    subcategories: ["Dental Kits", "Micro Scissors", "Forceps", "Scalpels", "Retractors", "Orthopedic Tools", "Veterinary", "Beauty Instruments"],
    images: [
      { url: u("photo-1666214280391-8ff5bd3c0bf0"), alt: "Stainless surgical instruments laid out" },
      { url: u("photo-1581595220892-b0739db3ba8c"), alt: "Precision dental instrument kit" },
      { url: u("photo-1583912267550-d6c2ac3196c0"), alt: "Surgeon holding stainless steel forceps" },
      { url: u("photo-1551601651-2a8555f1a136"), alt: "Medical-grade steel tools on dark surface" },
    ],
  },
  {
    id: "leather",
    name: "Leather Products",
    tagline: "Hand-finished genuine leather goods.",
    description:
      "Premium full-grain and top-grain leather products — jackets, bags, wallets, belts and industrial gloves. Vegetable-tanned hides, hand-stitched detailing and decades of Sialkot craftsmanship in every piece.",
    specs: [
      { label: "Leather", value: "Full-grain, Top-grain, Suede" },
      { label: "Tanning", value: "Vegetable & Chrome" },
      { label: "Hardware", value: "Brass, Nickel, Antique" },
      { label: "MOQ", value: "100 pcs / style" },
      { label: "Customization", value: "Embossing, Logo, Lining" },
      { label: "Lead Time", value: "40 – 60 days" },
    ],
    subcategories: ["Wallets", "Executive Belts", "Bags & Briefcases", "Jackets", "Gloves", "Industrial Gloves", "Accessories", "Wallets"],
    images: [
      { url: u("photo-1547949003-9792a18a2601"), alt: "Premium leather briefcase on desk" },
      { url: u("photo-1606503825008-909a67e63c3d"), alt: "Hand-stitched luxury leather wallet" },
      { url: u("photo-1553062407-98eeb64c6a62"), alt: "Executive leather belt detail" },
      { url: u("photo-1473445730015-841f29a9490b"), alt: "Tan leather goods flat lay" },
    ],
  },
  {
    id: "salt",
    name: "Himalayan Pink Salt",
    tagline: "From the Khewra mines — the world's purest pink salt.",
    description:
      "Mined directly from the Khewra Salt Range in Pakistan — the second-largest salt mine in the world. Food-grade edible salt, bath products, salt blocks and artisan-crafted glowing salt lamps for global retail and wholesale.",
    specs: [
      { label: "Purity", value: "98% NaCl + 84 minerals" },
      { label: "Grades", value: "Edible / Bath / Industrial" },
      { label: "Granulation", value: "Fine / Coarse / Chunks" },
      { label: "MOQ", value: "20 ft container" },
      { label: "Certifications", value: "ISO 22000, Halal, Kosher" },
      { label: "Lead Time", value: "20 – 30 days" },
    ],
    subcategories: ["Edible Salt", "Salt Lamps", "Salt Blocks", "Bath Salt", "Tea Light Holders", "Animal Lick", "Salt Tiles", "Inhalers"],
    images: [
      { url: u("photo-1615486511484-92e172cc4fe0"), alt: "Glowing amber Himalayan salt lamp" },
      { url: u("photo-1615486363973-f79d875780cf"), alt: "Pink Himalayan salt crystals close-up" },
      { url: u("photo-1518110925495-b37653bd2474"), alt: "Carved salt lamp warm glow" },
      { url: u("photo-1519864600265-abb23847ef2c"), alt: "Pink salt in wooden bowl" },
    ],
  },
  {
    id: "rice",
    name: "Rice & Spices",
    tagline: "Premium Basmati and farm-fresh organic spices.",
    description:
      "Long-grain Pakistani Basmati rice and a complete range of farm-direct spices — sortexed, fumigated and packaged to international food-safety standards. Bulk and retail packaging available worldwide.",
    specs: [
      { label: "Rice Length", value: "7.2 mm avg (Super Basmati)" },
      { label: "Moisture", value: "≤ 14%" },
      { label: "Broken", value: "≤ 5%" },
      { label: "MOQ", value: "20 / 40 ft container" },
      { label: "Packaging", value: "1 / 5 / 25 / 50 kg, custom" },
      { label: "Certifications", value: "ISO 22000, HACCP, Halal" },
    ],
    subcategories: ["Super Basmati", "1121 Basmati", "Red Chili", "Turmeric", "Cumin", "Coriander", "Black Pepper", "Cardamom"],
    images: [
      { url: u("photo-1586201375761-83865001e31c"), alt: "Premium long-grain Basmati rice" },
      { url: u("photo-1532336414038-cf19250c5757"), alt: "Vibrant bowls of organic spices" },
      { url: u("photo-1599909533730-c2e8e2c79994"), alt: "Cumin and coriander spices in scoops" },
      { url: u("photo-1509358271058-acd22cc93898"), alt: "Whole spices and chilies in market display" },
    ],
  },
];

function ProductsPage() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <Section
      eyebrow="Catalog"
      title="Our Product Categories"
      subtitle="Explore premium Pakistani exports — curated for global distribution."
      center
    >
      {/* Category tabs */}
      <div className="mb-10 -mx-4 px-4 overflow-x-auto">
        <div role="tablist" aria-label="Product categories" className="flex gap-2 sm:flex-wrap sm:justify-center min-w-max sm:min-w-0">
          {CATEGORIES.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(c.id)}
                className={[
                  "whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border-transparent bg-navy text-white shadow-gold scale-[1.02]"
                    : "border-border bg-card text-foreground/80 hover:border-gold/60 hover:text-gold",
                ].join(" ")}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active category panel */}
      <div key={active.id} className="animate-fade-in">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Image gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {active.images.map((img, i) => (
                <div
                  key={img.url + i}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-border bg-navy-deep/5",
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square",
                  ].join(" ")}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gradient-gold">
              {active.name}
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">{active.tagline}</h3>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{active.description}</p>

            {/* Specs */}
            <div className="mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/80 dark:text-gold">
                Export Specifications
              </h4>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {active.specs.map((s) => (
                  <div key={s.label} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-gold" />
                    <div>
                      <dt className="text-xs text-muted-foreground">{s.label}</dt>
                      <dd className="text-sm font-medium text-foreground">{s.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Sub-categories */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/80 dark:text-gold">
                Sub-Categories
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.subcategories.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-navy dark:text-gold transition-colors hover:bg-gold hover:text-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-gold transition-transform duration-300 hover:scale-[1.03] hover:bg-navy-deep"
            >
              Request a Quote for {active.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Shaikh Traders" },
      {
        name: "description",
        content:
          "Premium Pakistani exports: textile, sportswear, home textile, surgical, leather, Himalayan salt, rice & spices.",
      },
    ],
  }),
  component: ProductsPage,
});
export type Category = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  subcategories: string[];
  images: { url: string; alt: string }[];
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const CATEGORIES: Category[] = [
  {
    id: "textile",
    slug: "textile",
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
      { url: u("photo-1610725664285-7c57e6eeac3f"), alt: "Industrial weaving loom in textile mill" },
      { url: u("photo-1599643477877-530eb83abc8e"), alt: "Bulk denim fabric rolls in wholesale warehouse" },
      { url: u("photo-1605002123544-7c91d4f9c54c"), alt: "Cotton yarn spools on manufacturing spindle" },
      { url: u("photo-1620799140408-edc6dcb6d633"), alt: "Raw cotton fiber texture close-up" },
    ],
  },
  {
    id: "sportswear",
    slug: "sportswear",
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
    slug: "home-textile",
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
    slug: "surgical",
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
      { url: u("photo-1530026405186-ed1f139313f8"), alt: "Sterile stainless steel surgical tools set" },
      { url: u("photo-1609220136736-443140cffec6"), alt: "Precision dental instruments on clean tray" },
      { url: u("photo-1584515933487-779824d29309"), alt: "Medical forceps on minimalist background" },
      { url: u("photo-1631815588090-d4bfec5b1ccb"), alt: "Surgical scalpel and scissors on dark corporate surface" },
    ],
  },
  {
    id: "leather",
    slug: "leather",
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
    slug: "himalayan-pink-salt",
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
      { url: u("photo-1603199506016-b9a594b593c0"), alt: "Glowing Himalayan pink salt lamp with amber light" },
      { url: u("photo-1612257999829-7add0fc16df1"), alt: "Premium pink Himalayan salt crystals in bulk" },
      { url: u("photo-1593604572577-1c6c44fa2049"), alt: "Gourmet Himalayan pink salt blocks arrangement" },
      { url: u("photo-1623073864020-26a8c2436a1c"), alt: "Food-grade coarse pink salt crystals premium presentation" },
    ],
  },
  {
    id: "rice",
    slug: "rice-spices",
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

export const getCategoryBySlug = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);
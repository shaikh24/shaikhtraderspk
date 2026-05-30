import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CategoryDetail } from "@/components/site/CategoryDetail";
import { CATEGORIES } from "@/lib/categories";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SampleRequestDialog } from "@/components/site/SampleRequestDialog";

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

      <CategoryDetail category={active} />

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <SampleRequestDialog defaultCategory={active.name} />
        <Link
          to="/products/$category"
          params={{ category: active.slug }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-gold hover:underline"
        >
          View dedicated {active.name} page
          <ArrowRight className="h-4 w-4" />
        </Link>
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
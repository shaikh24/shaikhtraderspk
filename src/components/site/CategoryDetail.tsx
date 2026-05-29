import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Category } from "@/lib/categories";

export function CategoryDetail({ category }: { category: Category }) {
  return (
    <div key={category.id} className="animate-fade-in">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {category.images.map((img, i) => (
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

        <div className="lg:col-span-5">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-gradient-gold">
            {category.name}
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-foreground">{category.tagline}</h3>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">{category.description}</p>

          <div className="mt-6 rounded-2xl border border-border bg-card/60 backdrop-blur p-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/80 dark:text-gold">
              Export Specifications
            </h4>
            <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {category.specs.map((s) => (
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

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/80 dark:text-gold">
              Sub-Categories
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.subcategories.map((tag) => (
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
            Request a Quote for {category.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
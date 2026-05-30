import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Section } from "@/components/site/Section";
import { CategoryDetail } from "@/components/site/CategoryDetail";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { SampleRequestDialog } from "@/components/site/SampleRequestDialog";

function CategoryPage() {
  const { category: slug } = Route.useParams();
  const category = getCategoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!category) {
    return (
      <Section eyebrow="Not found" title="Category not found" center>
        <div className="text-center">
          <Link to="/products" className="inline-flex items-center gap-2 text-navy dark:text-gold font-semibold hover:underline">
            <ChevronLeft className="h-4 w-4" /> Back to all products
          </Link>
        </div>
      </Section>
    );
  }

  const others = CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <Section eyebrow="Product Category" title={category.name} subtitle={category.tagline} center>
      <div className="mb-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-gold transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> All Categories
        </Link>
      </div>

      <CategoryDetail category={category} />

      <div className="mt-10 flex justify-center">
        <SampleRequestDialog defaultCategory={category.name} />
      </div>

      <div className="mt-20 border-t border-border pt-12">
        <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gradient-gold">
          Explore Other Categories
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/products/$category"
              params={{ category: c.slug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:border-gold/60 hover:text-gold transition"
            >
              {c.name}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category?.name ?? "Product Category";
    const desc = loaderData?.category?.description ?? "Premium Pakistani exports.";
    return {
      meta: [
        { title: `${name} — Shaikh Traders` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} — Shaikh Traders` },
        { property: "og:description", content: desc },
        { property: "og:image", content: loaderData?.category?.images[0]?.url ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <Section eyebrow="Not found" title="Category not found" center>
      <div className="text-center">
        <Link to="/products" className="inline-flex items-center gap-2 text-navy dark:text-gold font-semibold hover:underline">
          <ChevronLeft className="h-4 w-4" /> Back to all products
        </Link>
      </div>
    </Section>
  ),
  errorComponent: ({ reset }) => (
    <Section eyebrow="Error" title="Something went wrong" center>
      <div className="text-center">
        <button onClick={reset} className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
          Try again
        </button>
      </div>
    </Section>
  ),
  component: CategoryPage,
});
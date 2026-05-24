import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import hero from "@/assets/hero-cargo.jpg";
import w from "@/assets/warehouse.jpg";
import a from "@/assets/p-textile.jpg";
import b from "@/assets/p-sportswear.jpg";
import c from "@/assets/p-home.jpg";
import d from "@/assets/p-surgical.jpg";
import e from "@/assets/p-leather.jpg";
import f from "@/assets/p-salt.jpg";
import g from "@/assets/p-rice.jpg";

const IMGS = [hero, w, a, b, c, d, e, f, g];

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Shaikh Traders" }, { name: "description", content: "Photos from our warehouses, products and global shipping operations." }] }),
  component: () => (
    <Section eyebrow="Gallery" title="Inside our operations" center>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {IMGS.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="mb-4 w-full rounded-2xl shadow-elegant hover:scale-[1.01] transition-transform" />
        ))}
      </div>
    </Section>
  ),
});
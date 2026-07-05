import { Link } from "@tanstack/react-router";
import { type Product, displayPrice } from "@/data/products";
import { waProduct } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ p }: { p: Product }) {
  const price = displayPrice(p);
  const specsShort = `${p.processor.toUpperCase()} ${p.generation}th Gen, ${p.ram}GB, ${p.storage}GB SSD`;
  const wa = waProduct(p.title, specsShort, price);

  return (
    <article className="card-lift group rounded-xl border border-border bg-card overflow-hidden flex flex-col">
      <Link
        to="/laptops/$slug"
        params={{ slug: p.slug }}
        className="block relative aspect-[4/3] bg-surface overflow-hidden"
      >
        <span className="absolute top-2 left-2 z-10 chip bg-white/95">{p.condition.split(" / ")[0]}</span>
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <Link to="/laptops/$slug" params={{ slug: p.slug }} className="block">
          <h3 className="font-display font-semibold text-[0.98rem] leading-snug text-ink line-clamp-2 min-h-[2.6em]">
            {p.title}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-1.5">
          <span className="chip">{p.processor.toUpperCase()} · Gen {p.generation}</span>
          <span className="chip">{p.ram}GB RAM</span>
          <span className="chip">{p.storage}GB SSD</span>
        </div>
        <div className="mt-auto">
          <div className="text-primary font-display font-bold text-lg">{price}</div>
          <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <a href={wa} target="_blank" rel="noopener" className="btn-wa text-sm !py-2.5">
              <WhatsAppIcon className="h-4 w-4" /> Order
            </a>
            <Link to="/laptops/$slug" params={{ slug: p.slug }} className="btn-outline-blue text-sm !py-2.5">
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

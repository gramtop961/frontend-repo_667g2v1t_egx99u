import { ArrowRight, ShoppingCart, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-indigo-950 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-700 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-700 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-10 lg:py-28">
        <div className="relative z-10 flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-wide ring-1 ring-white/20">
            Premium Indian Ethnic Wear
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Elevate Tradition with Modern Craft
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Unmatched Quality | Bulk Custom Orders | Best Price
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-rose-950 shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <ShoppingCart className="h-4 w-4" /> Shop Collections
            </a>
            <a
              href="#bulk"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <MessageCircle className="h-4 w-4" /> Bulk & Custom Orders
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              In-house Manufacturing
            </div>
            <div className="hidden sm:block h-1 w-1 rounded-full bg-white/40" />
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-400" />
              Pan-India Shipping
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex-1 lg:mt-0">
          <div className="mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ring-1 ring-white/10">
            <div className="h-full w-full bg-gradient-to-br from-rose-200/20 via-amber-200/20 to-indigo-200/20" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 rounded-xl bg-amber-500 px-4 py-2 text-rose-950 shadow-xl">
            Festive Sale: Up to 30% OFF
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

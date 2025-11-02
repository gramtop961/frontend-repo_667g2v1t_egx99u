import { Star } from "lucide-react";

export default function Story() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-rose-950">Crafted in India, Built for the World</h1>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We blend Indian craftsmanship with modern, agile manufacturing. From intricate handwork to high-speed production, our in-house team ensures precision at scale. Expect premium materials, consistent sizing, and on-time deliveries—every time.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-rose-950">
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> ISO-grade quality checks</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Ethical and sustainable sourcing</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Express dispatch for priority orders</li>
            </ul>
          </div>
          <div className="h-64 rounded-2xl border border-amber-200 bg-gradient-to-br from-rose-100 via-amber-100 to-indigo-100 shadow-sm md:h-full" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-rose-950">Certifications & Capabilities</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4">ISO-compliant QC</div>
            <div className="rounded-xl border border-slate-200 p-4">In-house CAD & patterning</div>
            <div className="rounded-xl border border-slate-200 p-4">Embroidery & handwork units</div>
            <div className="rounded-xl border border-slate-200 p-4">Bulk dyeing & finishing</div>
            <div className="rounded-xl border border-slate-200 p-4">Pan-India logistics partners</div>
            <div className="rounded-xl border border-slate-200 p-4">Custom branding & packaging</div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { BadgeCheck, Rocket, Tag, ShieldCheck, Truck, Wallet } from "lucide-react";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Best in Quality",
    desc: "Finest fabrics, rigorous QC, and expert craftsmanship.",
  },
  {
    icon: Rocket,
    title: "Fastest Delivery",
    desc: "Optimized production and dispatch for tight timelines.",
  },
  {
    icon: Tag,
    title: "Lowest Manufacturing Price",
    desc: "Factory-direct pricing with transparent quotes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Cards, UPI, Wallets, and Net Banking supported.",
  },
  {
    icon: Truck,
    title: "Real-time Tracking",
    desc: "End-to-end shipping updates across India.",
  },
  {
    icon: Wallet,
    title: "COD Available",
    desc: "Cash on Delivery in select serviceable regions.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-rose-950 md:text-3xl">
            Trusted by Boutiques, Brands & Event Planners
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            “Best in Quality, Fastest Delivery, Lowest Manufacturing Price”
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="rounded-xl bg-rose-900 p-2 text-amber-400 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-rose-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

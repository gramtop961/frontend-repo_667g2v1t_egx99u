import { Shirt, Gem, Sparkles, Baby, Layers } from "lucide-react";

const categories = [
  {
    id: "men",
    title: "Men",
    desc: "Kurtas, Sherwanis, Indo-Westerns",
    icon: Shirt,
    color: "from-rose-800 to-rose-600",
  },
  {
    id: "women",
    title: "Women",
    desc: "Lehengas, Sarees, Suits",
    icon: Sparkles,
    color: "from-amber-600 to-amber-400",
  },
  {
    id: "kids",
    title: "Kids",
    desc: "Traditional Wear for Little Stars",
    icon: Baby,
    color: "from-indigo-700 to-indigo-500",
  },
  {
    id: "materials",
    title: "Fabrics & Materials",
    desc: "Cloths, Borders, Embellishments, Accessories",
    icon: Layers,
    color: "from-slate-700 to-slate-500",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-rose-950 md:text-3xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Explore premium collections crafted with precision and care.
          </p>
        </div>
        <a
          href="#bulk"
          className="hidden rounded-lg bg-rose-900 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-rose-300 transition hover:bg-rose-800 md:block"
        >
          Bulk & Custom Orders
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20`} />
              <div className="relative p-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-white p-2 shadow-sm">
                    <Icon className="h-6 w-6 text-rose-900" />
                  </div>
                  <Gem className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-rose-950">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{cat.desc}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-rose-900">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                  >
                    <path d="M13.5 4.5l6 6-6 6M3 12h16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="relative h-32 w-full bg-gradient-to-br from-white/40 to-transparent" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

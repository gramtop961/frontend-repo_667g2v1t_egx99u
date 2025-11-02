import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Heritage Silk Kurta",
    price: 3499,
    badge: "Bestseller",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Regal Sherwani Set",
    price: 12999,
    badge: "Premium",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Embroidered Lehenga",
    price: 18999,
    badge: "New",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Handloom Saree",
    price: 5999,
    badge: "Organic",
    img: "https://images.unsplash.com/photo-1618932260643-687c4d1e49ce?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function SampleProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold text-rose-950">Featured Products</h3>
          <p className="mt-1 text-sm text-slate-600">Sample data — replace with your real catalog later.</p>
        </div>
        <a href="#" className="text-sm font-semibold text-rose-900 hover:text-rose-700">
          View all
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              {p.badge && (
                <span className="absolute left-3 top-3 rounded-md bg-rose-900 px-2 py-1 text-xs font-semibold text-white shadow">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="line-clamp-1 text-sm font-semibold text-rose-950">{p.title}</h4>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4" />
                </div>
                <div className="text-sm font-bold text-rose-900">₹{p.price.toLocaleString()}</div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-rose-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

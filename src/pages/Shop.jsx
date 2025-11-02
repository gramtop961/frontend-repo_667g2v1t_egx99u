import CategoryGrid from "../components/CategoryGrid";
import SampleProducts from "../components/SampleProducts";

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-bold text-rose-950">Shop Collections</h1>
        <p className="mt-2 text-sm text-slate-600">
          Explore men, women, kids, and premium fabrics. This page uses sample data you can replace later.
        </p>
      </div>
      <CategoryGrid />
      <SampleProducts />
    </div>
  );
}

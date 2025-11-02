import BulkCustomSection from "../components/BulkCustomSection";

export default function BulkOrders() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-rose-950 via-rose-900 to-indigo-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">Bulk & Custom Orders</h1>
          <p className="mt-2 max-w-2xl text-white/80">
            Get rapid quotes for events, boutiques, and brands. Attach reference images and specify your delivery timeline.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/10 p-4">MOQ-friendly production</div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-4">Express dispatch available</div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-4">Factory-direct pricing</div>
          </div>
        </div>
      </section>
      <BulkCustomSection />
    </div>
  );
}

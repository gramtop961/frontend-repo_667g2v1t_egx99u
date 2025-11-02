export default function Policies() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-rose-950">Policies</h1>
        <p className="mt-2 text-sm text-slate-600">Sample text — replace with your real policies later.</p>

        <div className="mt-8 space-y-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-950">Returns & Exchange Policy</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We offer hassle-free exchanges for size issues and manufacturing defects. Returns are accepted within the policy timeline from the date of delivery. Items should be unworn, unwashed, and with all tags intact.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-950">Privacy Policy</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              We respect your privacy. Your data is stored securely and used only to process orders, provide support, and share relevant offers. You can opt out of marketing communications at any time.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-950">Terms & Conditions</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              All orders are subject to availability and standard manufacturing timelines. Pricing, discounts, and COD availability may vary by region. By placing an order, you agree to our policies and service terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

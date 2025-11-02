import { Calendar, UploadCloud, Ruler, Package, Send } from "lucide-react";
import { useState } from "react";

export default function BulkCustomSection() {
  const [form, setForm] = useState({
    quantity: "",
    size: "",
    material: "",
    date: "",
    notes: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a future step, this will send data to the backend API
    console.log("Bulk inquiry submitted:", form);
    alert("Thanks! Our team will contact you shortly with a quote.");
    setForm({ quantity: "", size: "", material: "", date: "", notes: "", file: null });
  };

  return (
    <section id="bulk" className="relative bg-white py-16">
      <div className="absolute inset-x-0 -top-8 mx-auto h-16 max-w-2xl rounded-full bg-gradient-to-r from-rose-100 via-amber-100 to-indigo-100 blur-xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-rose-950 md:text-3xl">
            Bulk & Custom Orders
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Get fast quotes for events, boutiques, and corporate orders. Attach references and specify timelines.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-rose-950">Quantity</span>
              <div className="relative">
                <Package className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  type="number"
                  min="1"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-rose-300 placeholder:text-slate-400 focus:border-rose-400 focus:ring-2"
                  placeholder="e.g., 100"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-rose-950">Sizes</span>
              <div className="relative">
                <Ruler className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-rose-300 placeholder:text-slate-400 focus:border-rose-400 focus:ring-2"
                  placeholder="e.g., S-XXL or custom measurements"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1 sm:col-span-2">
              <span className="text-sm font-medium text-rose-950">Fabric / Material Details</span>
              <input
                required
                type="text"
                name="material"
                value={form.material}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-sm outline-none ring-rose-300 placeholder:text-slate-400 focus:border-rose-400 focus:ring-2"
                placeholder="Cloth type, border, embellishments, accessories"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-rose-950">Delivery Date</span>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-rose-300 focus:border-rose-400 focus:ring-2"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-rose-950">Attach Reference</span>
              <div className="relative">
                <UploadCloud className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full cursor-pointer rounded-lg border border-dashed border-slate-300 bg-white py-2 pl-9 pr-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-rose-900 file:px-3 file:py-1 file:text-sm file:font-medium file:text-white"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1 sm:col-span-2">
              <span className="text-sm font-medium text-rose-950">Notes</span>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-rose-300 placeholder:text-slate-400 focus:border-rose-400 focus:ring-2"
                placeholder="Measurements, embroidery, brand labels, packing, etc."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-600">
              Get an instant acknowledgement. Final quotes are shared after review.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-rose-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <Send className="h-4 w-4" /> Request Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

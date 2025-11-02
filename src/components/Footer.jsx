import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-rose-950">Royal Looms</div>
            <p className="mt-2 text-sm text-slate-600">
              Premium ethnic wear and materials. Direct manufacturing, pan-India delivery.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-950">Categories</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Fabrics & Materials</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-950">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Returns & Exchanges</li>
              <li>Shipping & Tracking</li>
              <li>Payment Options</li>
              <li>Bulk Orders</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-950">Newsletter</h4>
            <p className="mt-2 text-sm text-slate-600">Get festival sale alerts and exclusive coupons.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
              className="mt-3 flex gap-2"
            >
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-rose-300 placeholder:text-slate-400 focus:border-rose-400 focus:ring-2"
              />
              <button className="rounded-lg bg-rose-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Royal Looms. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made in India</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <a href="https://wa.me/910000000000" className="inline-flex items-center gap-1 hover:text-rose-800">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

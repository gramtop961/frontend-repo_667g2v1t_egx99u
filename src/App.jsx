import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import TrustSection from "./components/TrustSection";
import BulkCustomSection from "./components/BulkCustomSection";
import { Phone, MessageCircle, Instagram, Facebook, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <div className="bg-rose-950 py-2 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <span className="hidden sm:inline">Direct-from-manufacturer | Pan-India delivery</span>
          <div className="flex items-center gap-4">
            <a href="tel:+910000000000" className="inline-flex items-center gap-1 opacity-90 hover:opacity-100">
              <Phone className="h-3.5 w-3.5" /> +91 00000 00000
            </a>
            <a href="#" className="opacity-90 hover:opacity-100">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="opacity-90 hover:opacity-100">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight text-rose-950">
            Royal Looms
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-rose-950 md:flex">
            <a href="#categories" className="hover:text-rose-700">Shop</a>
            <a href="#bulk" className="hover:text-rose-700">Bulk Orders</a>
            <a href="#story" className="hover:text-rose-700">Our Story</a>
            <a href="#policies" className="hover:text-rose-700">Policies</a>
          </nav>
          <a
            href="#bulk"
            className="inline-flex items-center gap-2 rounded-lg bg-rose-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800"
          >
            <MessageCircle className="h-4 w-4" /> Get a Quote
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <CategoryGrid />
        <TrustSection />
        <BulkCustomSection />

        {/* Brand story */}
        <section id="story" className="bg-amber-50/50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-rose-950 md:text-3xl">Crafted in India, Built for the World</h2>
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
          </div>
        </section>

        {/* Policies preview */}
        <section id="policies" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-rose-950 md:text-3xl">Policies</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-rose-950">Easy Returns & Exchange</h3>
                <p className="mt-2 text-sm text-slate-600">Hassle-free exchanges for size and manufacturing defects within policy timelines.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-rose-950">Privacy Policy</h3>
                <p className="mt-2 text-sm text-slate-600">Your data is protected and only used to serve your orders and offers.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-rose-950">Terms & Conditions</h3>
                <p className="mt-2 text-sm text-slate-600">Transparent pricing, timelines, and service-level commitments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-lg font-extrabold tracking-tight text-rose-950">Royal Looms</div>
              <p className="mt-2 text-sm text-slate-600">Premium ethnic wear and materials. Direct manufacturing, pan-India delivery.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-rose-950">Categories</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="#men" className="hover:text-rose-800">Men</a></li>
                <li><a href="#women" className="hover:text-rose-800">Women</a></li>
                <li><a href="#kids" className="hover:text-rose-800">Kids</a></li>
                <li><a href="#materials" className="hover:text-rose-800">Fabrics & Materials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-rose-950">Support</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a href="#policies" className="hover:text-rose-800">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-rose-800">Shipping & Tracking</a></li>
                <li><a href="#" className="hover:text-rose-800">Payment Options</a></li>
                <li><a href="#bulk" className="hover:text-rose-800">Bulk Orders</a></li>
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
    </div>
  );
}

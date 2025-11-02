import { MessageCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-2 py-1 transition hover:text-rose-700 ${isActive ? "text-rose-800" : "text-rose-950"}`;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="bg-rose-950 py-2 text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <span className="hidden sm:inline">Direct-from-manufacturer | Pan-India delivery</span>
          <div className="flex items-center gap-4">
            <a href="tel:+910000000000" className="opacity-90 hover:opacity-100">
              +91 00000 00000
            </a>
            <a href="#" className="opacity-90 hover:opacity-100">Instagram</a>
            <a href="#" className="opacity-90 hover:opacity-100">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-rose-950">
          Royal Looms
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink to="/shop" className={linkClass} end>
            Shop
          </NavLink>
          <NavLink to="/bulk-orders" className={linkClass}>
            Bulk Orders
          </NavLink>
          <NavLink to="/story" className={linkClass}>
            Our Story
          </NavLink>
          <NavLink to="/policies" className={linkClass}>
            Policies
          </NavLink>
        </nav>
        <Link
          to="/bulk-orders"
          className="inline-flex items-center gap-2 rounded-lg bg-rose-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-800"
        >
          <MessageCircle className="h-4 w-4" /> Get a Quote
        </Link>
      </div>
    </header>
  );
}

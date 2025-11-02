import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import BulkOrders from "./pages/BulkOrders";
import Story from "./pages/Story";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bulk-orders" element={<BulkOrders />} />
        <Route path="/story" element={<Story />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </div>
  );
}

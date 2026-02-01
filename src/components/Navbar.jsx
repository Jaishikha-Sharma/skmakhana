import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone, Search, ArrowRight } from "lucide-react";
import logo from "../assets/SKI 1.png";
import products from "../data/products";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/makhana" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
  };

  const handleSearchSubmit = () => {
    if (!query.trim()) return;
    navigate("/makhana", { state: { search: query } });
    setResults([]);
    setOpen(false);
  };

  const handleSelect = (item) => {
    setQuery(item.name);
    setResults([]);
    navigate("/makhana", { state: { search: item.name } });
    setOpen(false);
  };

  return (
    <>
      {/* 🔝 Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#7fa34d] to-[#a4c06a] shadow">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between text-sm text-white">
          <p className="flex items-center gap-2 font-medium">
            <Phone size={16} className="text-yellow-300" />
            +91 7027651908
          </p>
        </div>
      </div>

      {/* 🌿 Navbar */}
      <nav className="fixed top-8 left-0 w-full z-40 bg-white/90 backdrop-blur shadow">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
          {/* Logo */}
          <NavLink to="/" className="shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-12 md:h-16 object-contain"
            />
          </NavLink>

          {/* 🔍 Search (Desktop + Mobile) */}
          <div className="relative flex w-full max-w-md">
            <div className="w-full flex items-center bg-white border border-[#d8e4c8] rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#85aa52]">
              <Search size={18} className="text-[#85aa52] mr-2 shrink-0" />

              <input
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search makhana..."
                className="w-full outline-none text-sm bg-transparent"
              />

              <button
                onClick={handleSearchSubmit}
                className="ml-2 flex items-center gap-1 bg-gradient-to-r from-[#85aa52] to-[#6f8f3f] text-white px-4 py-1.5 rounded-full text-sm hover:scale-105 transition"
              >
                Go <ArrowRight size={14} />
              </button>
            </div>

            {results.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border z-50 overflow-hidden">
                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="px-4 py-2 cursor-pointer hover:bg-[#f3f7ed] flex justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-[#85aa52] font-semibold">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-semibold transition ${
                    isActive
                      ? "bg-[#85aa52] text-white"
                      : "text-gray-700 hover:bg-[#e9f1dc]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-[#4c6b2a]"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl font-semibold text-gray-700 bg-[#f4f8ee]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

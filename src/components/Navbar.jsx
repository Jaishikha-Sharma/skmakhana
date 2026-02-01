import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone, Search, ArrowRight } from "lucide-react";
import logo from "../assets/SKI 1.png";
import products from "../data/products";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Makhana", path: "/makhana" },
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
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filtered.slice(0, 6));
  };

  const handleSearchSubmit = () => {
    if (!query.trim()) return;
    navigate("/makhana", { state: { search: query } });
    setResults([]);
  };

  const handleSelect = (item) => {
    setQuery(item.name);
    setResults([]);
    navigate("/makhana", { state: { search: item.name } });
  };

  return (
    <>
      {/* 🔝 Top Info Bar */}
      <div
        className="fixed top-0 left-0 w-full z-50 shadow"
        style={{ background: "linear-gradient(90deg, #7fa34d, #a4c06a)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-sm text-white">
          <p className="flex items-center gap-2 font-medium">
            <Phone size={16} className="text-yellow-300" />
            +91 7027651908
          </p>
        </div>
      </div>

      {/* 🌿 Main Navbar */}
      <nav className="fixed top-8 left-0 w-full z-40 bg-white/90 backdrop-blur border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-6">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group shrink-0">
            <img
              src={logo}
              alt="SK Makhana Logo"
              className="h-16 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* 🔍 Premium Search Bar + Button */}
          <div className="relative hidden md:flex flex-1 max-w-xl">
            <div className="w-full flex items-center bg-white/70 backdrop-blur-lg border border-[#d8e4c8] rounded-full px-5 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.06)] focus-within:ring-2 focus-within:ring-[#85aa52] transition-all duration-300 hover:shadow-lg">
              <Search size={18} className="text-[#85aa52] mr-3" />

              <input
                type="text"
                placeholder="Search premium makhana, flavours, combos..."
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full outline-none text-[15px] text-gray-700 placeholder-gray-400 bg-transparent"
              />

              {/* 🌟 SEARCH BUTTON */}
              <button
                onClick={handleSearchSubmit}
                className="ml-3 flex items-center gap-1 bg-linear-to-r from-[#85aa52] to-[#6f8f3f] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all"
              >
                Search
                <ArrowRight size={16} />
              </button>
            </div>

            {/* 🔥 Live Dropdown */}
            {results.length > 0 && (
              <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="px-6 py-3 cursor-pointer hover:bg-[#f3f7ed] transition flex justify-between items-center group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-[#4c6b2a]">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-[#85aa52]">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-[14px] font-semibold tracking-wide transition-all duration-300
                   ${
                     isActive
                       ? "bg-[#85aa52] text-white shadow-md scale-105"
                       : "text-gray-700 hover:bg-[#e9f1dc] hover:text-[#4c6b2a] hover:scale-105"
                   }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-[#4c6b2a]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* 🔍 Mobile Search + Button */}
        <div className="md:hidden px-6 pb-4">
          <div className="relative">
            <div className="flex items-center bg-white/80 backdrop-blur-lg border border-[#d8e4c8] rounded-full px-5 py-2 shadow-md focus-within:ring-2 focus-within:ring-[#85aa52] transition-all">
              <Search size={18} className="text-[#85aa52] mr-3" />

              <input
                type="text"
                placeholder="Search makhana..."
                value={query}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full outline-none text-[15px] text-gray-700 placeholder-gray-400 bg-transparent"
              />

              <button
                onClick={handleSearchSubmit}
                className="ml-2 bg-linear-to-r from-[#85aa52] to-[#6f8f3f] text-white px-4 py-2 rounded-full shadow-md"
              >
                Go
              </button>
            </div>

            {results.length > 0 && (
              <div className="absolute top-full mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="px-6 py-3 cursor-pointer hover:bg-[#f3f7ed] transition flex justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-sm font-semibold text-[#85aa52]">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

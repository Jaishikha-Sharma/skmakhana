import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "../assets/SKI 1.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Makhana", path: "/makhana" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔝 Top Info Bar */}
      <div
        className="fixed top-0 left-0 w-full z-50 shadow"
        style={{
          background: "linear-gradient(90deg, #7fa34d, #a4c06a)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-sm text-white">
          <p className="flex items-center gap-2 font-medium">
            <Phone size={16} className="text-yellow-300" />
            +91 98765 43210
          </p>
        </div>
      </div>

      {/* 🌿 Main Navbar */}
      <nav className="fixed top-8 left-0 w-full z-40 bg-white/90 backdrop-blur border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img
              src={logo}
              alt="SK Makhana Logo"
              className="h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-xl text-[15px] font-semibold tracking-wide transition-all duration-300
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 transition-all duration-500
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="flex flex-col items-start gap-3 py-4 px-6">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `w-full px-5 py-3 rounded-xl text-[16px] font-semibold transition-all duration-300
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;

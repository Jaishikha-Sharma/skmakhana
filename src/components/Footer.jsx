import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/SKI 1.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#07140f] to-[#0c1a12] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-20 md:h-24 lg:h-28 mb-5 drop-shadow-lg"
          />
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Premium quality makhana for healthy & smart snacking.
            Fresh, crunchy and delicious — delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5 tracking-wide text-lg">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Makhana", "Contact"].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[#a4c06a] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-5 tracking-wide text-lg">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-[#a4c06a] transition cursor-pointer hover:translate-x-1">
              Privacy Policy
            </li>
            <li className="hover:text-[#a4c06a] transition cursor-pointer hover:translate-x-1">
              Terms & Conditions
            </li>
            <li className="hover:text-[#a4c06a] transition cursor-pointer hover:translate-x-1">
              Shipping Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5 tracking-wide text-lg">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[#a4c06a]" />
              Sonipat, Haryana
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#a4c06a]" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#a4c06a]" />
              support@skmakhana.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-14 py-5 text-center text-xs text-gray-500">
        © 2026 <span className="text-[#a4c06a] font-medium">SKMakhana</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

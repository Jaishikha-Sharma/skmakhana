import { NavLink } from "react-router-dom";
import logo from "../assets/SKI 1.png";

const Footer = () => {
  return (
    <footer className="bg-[#020b08] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <img src={logo} alt="logo" className="h-10 mb-3" />
          <p className="text-sm leading-relaxed text-gray-400">
            Premium quality makhana for healthy & smart snacking.
            Fresh, crunchy and delicious — delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><NavLink to="/" className="hover:text-[#facc15]">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-[#facc15]">About</NavLink></li>
            <li><NavLink to="/makhana" className="hover:text-[#facc15]">Makhana</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#facc15]">Contact</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-[#facc15] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#facc15] cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#facc15] cursor-pointer">Shipping Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Sonipat, Haryana</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ support@skmakhana.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-8 py-3 text-center text-xs text-gray-500">
        © 2026 SKMakhana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import peri from "../assets/peri.jpg";
import onion from "../assets/salt.jpg";
import pudina from "../assets/pudina.jpg";

const productsData = [
  {
    id: 1,
    name: "Peri Peri Makhana",
    short: "Hot • Crunchy • Bold",
    price: 149,
    desc: "Spicy & Crunchy Delight",
    img: peri,
    tag: "Spicy",
  },
  {
    id: 2,
    name: "Onion & Pudina Makhana",
    short: "Tangy • Fresh • Light",
    price: 139,
    desc: "Tangy & Refreshing Taste",
    img: pudina,
    tag: "Fresh",
  },
  {
    id: 3,
    name: "Salt & Pepper Makhana",
    short: "Classic • Crispy • Daily Snack",
    price: 129,
    desc: "Classic Crunchy Snack",
    img: onion,
    tag: "Classic",
  },
];

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.state?.search) {
      setSearch(location.state.search);
    }
  }, [location.state]);

  const filteredProducts = productsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative bg-[#f6f8f1] min-h-screen py-12 sm:py-16">

      {/* 🔙 Mobile Back Button */}
  {/* 🔙 Premium Mobile Back Button */}
<button
  onClick={() => navigate(-1)}
  className="absolute top-3 left-3 md:hidden z-40 flex items-center gap-1.5 
  bg-white/80 backdrop-blur-md text-[#4c6b2c] px-3 py-1.5 rounded-full 
  shadow-lg hover:shadow-xl hover:scale-105 transition"
>
  <ArrowLeft size={14} />
  <span className="text-[11px] font-semibold">Back</span>
</button>


      {/* 🔥 Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#4c6b2c]">
          Our <span className="text-[#85aa52]">Premium Makhana</span>
        </h1>
        <p className="mt-2 text-[#5f7a3c] text-sm sm:text-base">
          Healthy • Fresh • Crunchy • Delicious
        </p>
      </div>

      {/* 🛍️ Products Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-[#e5edd7]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-36 sm:h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-2 left-2 bg-[#85aa52] text-white text-[10px] sm:text-[11px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 text-center">
                <h3 className="text-sm sm:text-lg font-semibold text-[#4c6b2c] leading-tight">
                  {item.name}
                </h3>

                <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-wide text-[#85aa52] mt-1">
                  {item.short}
                </p>

                <p className="text-[11px] sm:text-sm text-[#5f7a3c] mt-1 leading-snug">
                  {item.desc}
                </p>

                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <span className="text-base sm:text-xl font-bold text-[#85aa52]">
                    ₹{item.price}
                  </span>

                  <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#85aa52] hover:bg-[#6f9141] text-white transition shadow hover:scale-105 text-xs sm:text-base">
                    <ShoppingCart size={14} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-[#6f9141] text-lg">
            No products found 😢
          </p>
        )}

      </div>
    </div>
  );
};

export default Category;

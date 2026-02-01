import React from "react";
import heroImage from "../assets/hero image.jpg";

import { Truck, Leaf, Headphones, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import peri from "../assets/peri.jpg";
import onion from "../assets/salt.jpg";
import pudina from "../assets/pudina.jpg";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#f6f8f1]">
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[75vh] md:h-screen overflow-hidden">
        {/* 📱 Mobile Quick Top Links */}
<div className="absolute top-0 left-0 w-full md:hidden z-30">
  <div className="flex justify-center gap-2 bg-black/40 backdrop-blur px-2 py-1">
    <NavLink to="/" className="text-[11px] text-white/90 font-medium">
      Home
    </NavLink>
    <span className="text-white/40">|</span>

    <NavLink to="/about" className="text-[11px] text-white/90 font-medium">
      About
    </NavLink>
    <span className="text-white/40">|</span>

    <NavLink to="/makhana" className="text-[11px] text-white/90 font-medium">
      Products
    </NavLink>
    <span className="text-white/40">|</span>

    <NavLink to="/contact" className="text-[11px] text-white/90 font-medium">
      Contact
    </NavLink>
  </div>
</div>

        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover animate-zoom-slow"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-xl">
            Premium <span className="text-[#c8e06d]">Makhana</span>
          </h1>

          <p className="text-white/90 mt-5 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            100% Natural • Healthy • Fresh • Direct from Farmers
          </p>

          <button className="mt-8 px-7 py-3 rounded-full bg-[#85aa52] hover:bg-[#6f9141] text-white font-semibold flex items-center gap-2 transition-all duration-300 shadow-xl hover:scale-105">
            Shop Now <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 🌿 Feature Cards */}
      <section className="bg-[#dfe8cd] py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold text-[#4c6b2c] mb-8">
            Why Choose <span className="text-[#85aa52]">Us</span>
          </h2>

          {/* 👇 Mobile pe bhi 3 cards ek row me */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="group bg-[#f3f7ea] border border-[#c5d9a6] rounded-2xl sm:rounded-3xl p-3 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:bg-[#e9f1da]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 flex items-center justify-center rounded-full bg-linear-to-br from-[#85aa52] to-[#6f9141] text-white shadow-lg group-hover:scale-110 transition">
                <Truck size={18} />
              </div>
              <h3 className="text-xs sm:text-lg font-semibold text-[#4c6b2c]">
                Free Shipping
              </h3>
              <p className="text-[10px] sm:text-sm text-[#5f7a3c]">
                Above ₹299
              </p>
            </div>

            <div className="group bg-[#f3f7ea] border border-[#c5d9a6] rounded-2xl sm:rounded-3xl p-3 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:bg-[#e9f1da]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 flex items-center justify-center rounded-full bg-linear-to-br from-[#85aa52] to-[#6f9141] text-white shadow-lg group-hover:scale-110 transition">
                <Leaf size={18} />
              </div>
              <h3 className="text-xs sm:text-lg font-semibold text-[#4c6b2c]">
                Premium Quality
              </h3>
              <p className="text-[10px] sm:text-sm text-[#5f7a3c]">
                Natural & Fresh
              </p>
            </div>

            <div className="group bg-[#f3f7ea] border border-[#c5d9a6] rounded-2xl sm:rounded-3xl p-3 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:bg-[#e9f1da]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-4 flex items-center justify-center rounded-full bg-linear-to-br from-[#85aa52] to-[#6f9141] text-white shadow-lg group-hover:scale-110 transition">
                <Headphones size={18} />
              </div>
              <h3 className="text-xs sm:text-lg font-semibold text-[#4c6b2c]">
                24/7 Support
              </h3>
              <p className="text-[10px] sm:text-sm text-[#5f7a3c]">
                Customer Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🛍️ Product Showcase Slider */}
      {/* 🛍️ Product Showcase Slider */}
      <section className="bg-[#f6f8f1] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-[#4c6b2c] mb-3">
            Our <span className="text-[#85aa52]">Best Sellers</span>
          </h2>

          <p className="text-center text-[#5f7a3c] mb-8">
            Handpicked flavours, loved by customers 💚
          </p>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={18}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {[
              {
                img: peri,
                name: "Peri Peri Makhana",
                desc: "Spicy & Crunchy Delight",
              },
              {
                img: pudina,
                name: "Onion & Pudina Makhana",
                desc: "Tangy & Refreshing Taste",
              },
              {
                img: onion,
                name: "Salt & Pepper Makhana",
                desc: "Classic Crunchy Snack",
              },
            ].map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-[#0c1a12] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#b7d789] mt-1">{item.desc}</p>
                    <NavLink
                      to="/makhana"
                      className="inline-block mt-4 px-5 py-2 bg-[#85aa52] hover:bg-[#6f9141] text-white rounded-full transition shadow-md hover:scale-105"
                    >
                      View Product
                    </NavLink>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* 🏭 About SK Industries + Interactive Stats */}
      <section className="relative bg-[#f6f8f1] py-16 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#85aa52]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4c6b2c]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-[#4c6b2c] leading-tight">
              Premium Quality Makhana by{" "}
              <span className="text-[#85aa52]">SK Industries</span>
            </h2>

            <p className="mt-5 text-[#5f7a3c] leading-relaxed text-justify md:text-left">
              SK Industries is a growing brand dedicated to delivering premium
              quality, fresh and healthy Makhana snacks. We carefully source,
              process and pack our products to ensure exceptional taste,
              nutrition and freshness in every bite.
            </p>

            <p className="mt-4 text-[#5f7a3c] leading-relaxed text-justify md:text-left">
              As a fresh business in the industry, our focus is on quality,
              hygiene and customer satisfaction. Our mission is simple — to make
              healthy snacking delicious, affordable and trustworthy for
              everyone.
            </p>

            <NavLink
              to="/makhana"
              className="group mt-7 inline-flex items-center gap-2 px-7 py-3 bg-[#85aa52] hover:bg-[#6f9141] text-white rounded-full transition shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </NavLink>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
            {[
              { num: "10+", label: "Happy Customers" },
              { num: "2+", label: "Products" },
              { num: "100%", label: "Natural & Fresh" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#85aa52] group-hover:scale-110 transition">
                  {item.num}
                </h3>
                <p className="mt-1 text-[11px] sm:text-sm text-[#5f7a3c]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

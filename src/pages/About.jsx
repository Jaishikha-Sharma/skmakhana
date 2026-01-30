import React from "react";
import heroImage from "../assets/hero image.jpg";
import peri from "../assets/peri.jpg";
import pudina from "../assets/pudina.jpg";

import { ArrowRight, Leaf, Shield, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#f6f8f1]">

      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="About skMakhana"
          className="w-full h-full object-cover animate-zoom-slow"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide">
            About <span className="text-[#c8e06d]">skMakhana</span>
          </h1>

          <p className="text-white/90 mt-4 text-sm sm:text-lg max-w-2xl leading-relaxed">
            Premium Quality • Fresh • Healthy • Trusted Brand
          </p>
        </div>
      </section>

      {/* 🏭 About Content */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#4c6b2c]">
              Who We Are
            </h2>

            <p className="mt-4 text-[#5f7a3c] leading-relaxed text-justify">
              skMakhana is a growing premium brand focused on delivering high
              quality, fresh and healthy makhana snacks. Our aim is to build a
              clean, honest and customer-first brand.
            </p>

            <p className="mt-3 text-[#5f7a3c] leading-relaxed text-justify">
              As fresh entrepreneurs, we carefully source, roast and pack every
              batch to ensure purity, crunch and nutrition in every bite.
            </p>

            <button className="group mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#85aa52] hover:bg-[#6f9141] text-white rounded-full transition shadow-lg hover:scale-105">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={peri}
              alt="Peri Makhana"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
            <img
              src={pudina}
              alt="Pudina Makhana"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
          </div>

        </div>
      </section>

      {/* 👑 Owners Section (Compact & Clean) */}
      <section className="py-12 bg-[#dfe8cd]">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#4c6b2c]">
            Our Founders
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-6">

            {[
              {
                name: "Aditya Sharma",
                role: "Co-Founder",
                desc: "Focused on building a premium, clean & customer-first brand."
              },
              {
                name: "Anudeep",
                role: "Co-Founder",
                desc: "Ensuring quality control, smooth operations & customer trust."
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-linear-to-br from-[#85aa52] to-[#4c6b2c] flex items-center justify-center text-white text-3xl font-bold shadow-md">
                  {p.name[0]}
                </div>

                <h3 className="mt-3 font-semibold text-[#4c6b2c] text-lg">
                  {p.name}
                </h3>

                <p className="text-xs text-[#85aa52] font-medium uppercase">
                  {p.role}
                </p>

                <p className="mt-2 text-sm text-[#5f7a3c] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ✨ Values */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { icon: <Leaf />, title: "100% Natural" },
              { icon: <Shield />, title: "Premium Quality" },
              { icon: <Sparkles />, title: "Fresh Processing" },
              { icon: <Sparkles />, title: "Trusted Brand" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#85aa52] text-white shadow">
                  {item.icon}
                </div>
                <h3 className="mt-3 font-semibold text-[#4c6b2c]">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 📊 Stats */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">

          {[
            { num: "10+", label: "Happy Customers" },
            { num: "2+", label: "Products" },
            { num: "100%", label: "Natural & Fresh" },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-[#85aa52]">
                {item.num}
              </h3>
              <p className="text-sm text-[#5f7a3c] mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default AboutUs;

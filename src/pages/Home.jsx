import React from "react";
import heroImage from "../assets/hero image.jpg";

const Home = () => {
  return (
    <div className="w-full">

      {/* 🌟 Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Zooming Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover transform scale-100 animate-zoom-slow"
        />
      </section>

      {/* 🌿 Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-gray-600">On orders above ₹299</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">100% Natural & Fresh</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Customer Care Service</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;

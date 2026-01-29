const Home = () => {
  return (
<section className="min-h-[85vh] flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#064e3b] to-[#02100b]">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-6">
          Premium Quality Makhana
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          Healthy, crunchy and delicious makhana for smart snacking.
          Freshly packed and delivered to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#facc15] text-black font-semibold rounded-full hover:scale-105 transition">
            Explore Products
          </button>

          <button className="px-8 py-3 border border-[#facc15] text-[#facc15] rounded-full hover:bg-[#facc15] hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";

const Popular = () => {
  return (
    <main className="min-h-screen bg-[#fce8e8] p-6">
      <h1 className="text-3xl font-bold text-gray-700">Popular Flowers</h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover our most popular flower arrangements for various occasions!
      </p>

      {/* Flower Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Sunshine Bouquet */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/w1.jpg" // Use your own image source here
              alt="Sunshine Bouquet"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Sunshine Bouquet</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱500</p>
            </div>
          </a>
        </article>

        {/* Roses Bouquet */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/g2.webp" // Use your own image source here
              alt="Roses Bouquet"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Roses Bouquet</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱100</p>
            </div>
          </a>
        </article>

        {/* Floral Rose Bouquet */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/w3.jpg" // Use your own image source here
              alt="Floral Rose Bouquet"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Floral Rose Bouquet</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱500</p>
            </div>
          </a>
        </article>

        {/* Elegant Roses Bouquet */}
        <article className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
          <a href="#" className="block">
            <img
              src="img/w4.jpg" // Use your own image source here
              alt="Elegant Roses Bouquet"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Elegant Roses Bouquet</h3>
              <p className="text-lg font-bold text-gray-600 mt-2">₱100</p>
            </div>
          </a>
        </article>

        {/* Add more articles for other popular flowers */}
      </div>
    </main>
  );
};

export default Popular;

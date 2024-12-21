import React from "react";

const Main = () => {
  const sections = [
    {
      title: "Popular in Weddings",
      description: "Here are one of our popular flowers for weddings",
      bannerImage: "img/w6.jpg",
      flowers: [
        {
          name: "Sunshine Bouquet",
          image: "img/w1.jpg",
          price: "₱500",
        },
        {
          name: "White Roses Bouquet",
          image: "img/w2.jpg",
          price: "₱500",

        },
        {
          name: "Floral Rose Bouquet",
          image: "img/w3.jpg",
          price: "₱500",

        },
        {
          name: "Elegant Roses Bouquet",
          image: "img/w4.jpg",
          price: "₱100",
        },
      ],
    },
    {
      title: "Popular in Occasions",
      description: "Here are one of our popular flowers for occasions",
      bannerImage: "img/g5.avif",
      flowers: [
        {
          name: "Rose Bouquet With Chocolate",
          image: "img/g1.jpg",
          price: "₱1,500",

        },
        {
          name: "Roses Bouquet",
          image: "img/g2.webp",
          price: "₱100",

        },
        {
          name: "Pink Rose Bouquet",
          image: "img/g3.webp",
          price: "₱100",

        },
        {
          name: "Elegant Roses Bouquet With Teddy Bear",
          image: "img/g4.jpg",
          price: "₱2,000",

        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#fce8e8] p-6 space-y-12">
      {sections.map((section, index) => (
        <section key={index} className="space-y-8">
          <div className="flex items-center justify-between bg-[#e4f1e9] p-6 rounded-lg shadow-md">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-700">{section.title}</h2>
              <p className="text-gray-600 mt-2">{section.description}</p>
            </div>
            <img
              src={section.bannerImage}
              alt={`${section.title} Banner`}
              className="w-full md:w-80 h-auto rounded-lg shadow-md" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.flowers.map((flower, idx) => (
              <article
                key={idx}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <a href={flower.link} className="block">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{flower.name}</h3>
                    <p className="text-lg font-bold text-gray-600 mt-2">{flower.price}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Main;

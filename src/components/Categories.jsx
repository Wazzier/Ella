import React from 'react';

const Categories = () => {
  const categories = [
    {
      name: "Occasions",
      description: "Flowers for various occasions, including birthdays, anniversaries, and more.",
      image: "img/occasions.jpg", // Replace with actual image path
    },
    {
      name: "Birthdays",
      description: "Celebrate birthdays with a beautiful bouquet.",
      image: "img/birthdays.jpg", // Replace with actual image path
    },
    {
      name: "Weddings",
      description: "Elegant flowers for your wedding day.",
      image: "img/weddings.jpg", // Replace with actual image path
    },
    {
      name: "Valentine's",
      description: "Romantic flowers for Valentine's Day.",
      image: "img/valentines.jpg", // Replace with actual image path
    },
    // Add more categories as needed
  ];

  return (
    <div className="min-h-screen bg-[#fce8e8] p-6">
      <div className="categories-container max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:transform hover:-translate-y-2"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-2xl font-semibold text-[#f8b097]">{category.name}</h3>
                <p className="text-gray-700 mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#f8b097] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between space-x-8">
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Customer Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Flower Care Tips
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Delivery Information
              </a>
            </li>
          </ul>
        </div>

        {/* Flower Categories */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Flower Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Roses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Tulips
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Lilies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Orchids
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Seasonal Bouquets
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Sustainability Promise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Same-Day Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Custom Arrangements
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Wedding Flowers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                Event Decor
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="flex-1 mb-8">
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-pinterest"></i>
                Pinterest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-[#f8b097] transition px-2 py-1 rounded-md"
              >
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 PetalPixel. Bringing Blooms to Life.</p>
      </div>
    </footer>
  );
};

export default Footer;

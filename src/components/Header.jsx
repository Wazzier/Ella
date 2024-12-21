import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = ({ setShowModal }) => { // Accept setShowModal as a prop
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="flex flex-col items-center bg-[#f8b097] p-5 shadow-md">
      <div className="flex justify-between items-center w-full max-w-[1200px] mb-4">
        <div className="logo">
          <a className="text-2xl font-bold text-white no-underline">
            PetalPixel
          </a>
        </div>

        <nav className="main-nav">
          <ul className="flex gap-5 list-none m-0">
            <li>
              <Link
                to="/" // Home route
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/popular" // Most Popular route
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                Most Popular
              </Link>
            </li>
            <li>
              <Link
                to="/categories" // Categories route
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/help" // Help route
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                Help
              </Link>
            </li>
            <li>
              {/* Keep the button for Sign In but align with the links */}
              <button
                onClick={() => setShowModal(true)} // Trigger modal on click
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                Sign In
              </button>
            </li>
            <li>
              <Link
                to="/cart" // Cart route
                className="text-white text-lg hover:bg-white hover:text-[#f8b097] transition px-4 py-2 rounded-md"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search-bar w-full flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 px-4 py-2 text-lg border border-white rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f8b097]"
        />
      </div>

      <nav className="secondary-nav">
        <ul className="flex gap-4 list-none">
          <li>
            <Link
              to="/popular" // Most Popular route
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Most Popular
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Occasions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Birthdays
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Weddings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Plants
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-sm hover:bg-white hover:text-[#f8b097] transition px-3 py-1 rounded-md"
            >
              Valentine's
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

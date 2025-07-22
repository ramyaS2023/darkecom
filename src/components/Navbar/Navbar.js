import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/logo (5).png";
import DarkMode from "./DarkMode";

export default function Navbar({ handleOrderPopup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-40">
      {/* Upper Navbar */}
      <div className="bg-blue-200 py-1">
        <div className="container mx-auto px-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl flex items-center gap-2 shrink-0 logo-text"
          >
            <img src={Logo} alt="Logo" className="w-12 logo-img" />
            <span className="text-blue-800">Shopsy</span>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-3 flex-wrap justify-end min-w-0 right-section">
            {/* Search */}
            <div className="relative">
              {/* Desktop search */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[180px] hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 text-base focus:outline-none focus:ring focus:ring-blue-300 text-black search-input"
                />
                <BsSearch className="text-gray-500 hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-2" />
              </div>

              {/* Mobile search */}
              <div
                className="sm:hidden relative"
                onMouseEnter={() => setShowSearch(true)}
                onMouseLeave={() => setShowSearch(false)}
                onTouchStart={() => setShowSearch(true)}
              >
                {!showSearch && (
                  <BsSearch className="text-lg text-gray-500 cursor-pointer" />
                )}
                {showSearch && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full mt-1 rounded-full border border-gray-300 px-2 py-[2px] text-xs focus:outline-none focus:ring focus:ring-blue-300 text-black search-input"
                    autoFocus
                  />
                )}
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1 px-4 text-base rounded-full flex items-center gap-2 hover:scale-105 transition-all shrink-0 order-btn"
            >
              <span>Order</span>
              <BsCart4 className="text-xl" />
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-xl text-blue-800"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        className={`bg-white dark:bg-gray-800 shadow-sm ${
          mobileMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <ul
          className="lower-navbar flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 py-1 sm:py-2 text-sm sm:text-lg text-gray-700 dark:text-gray-300"
        >
          <li>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/top-rated"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Top Rated
            </Link>
          </li>
          <li>
            <Link
              to="/kids-wear"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Kids Wear
            </Link>
          </li>
          <li>
            <Link
              to="/mens-wear"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Mens Wear
            </Link>
          </li>
          <li>
            <Link
              to="/electronics"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
            >
              Electronics
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700">
              Trending
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </div>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded mt-1 z-50">
              <ul>
                <li>
                  <Link
                    to="/trending-products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-600"
                  >
                    Trending Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/best-selling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-600"
                  >
                    Best Selling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/top-rated"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-600"
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

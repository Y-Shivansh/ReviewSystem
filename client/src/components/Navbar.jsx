import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import rateLogo from "../assets/RateLogo.jpg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800 p-1 text-heading static w-full top-0 z-10">
      <div className="px-3 py-1 flex justify-between items-center">
        {/* Logo Section */}
        <div className=" flex space-x-2 items-center text-xl font-semibold">
          <img className="w-8 rounded-lg" src={rateLogo} alt="" />
          <Link
            to="/"
            className="text-white hover:text-gray-200 no-underline"
          >
            ReviewSystem
          </Link>
        </div>

        {/* Hamburger Menu Icon (for small screens) */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-headingCol focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (for large screens) */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 text-sm cursor-pointer no-underline"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Footer"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 text-sm cursor-pointer no-underline"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 text-sm cursor-pointer no-underline"
            >
              Contact Us
            </ScrollLink>
          </li>
          <li>
            <Link
              to="/admin/login"
              className="text-white hover:text-gray-200 text-sm cursor-pointer no-underline"
            >
              Admin
            </Link>
          </li>
        </ul>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-200 text-headingCol p-4`}
      >
        <ul>
          <li className="py-2">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="block text-headingCol hover:text-secondaryColHover cursor-pointer no-underline"
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li className="py-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block text-headingCol hover:text-secondaryColHover cursor-pointer no-underline"
              onClick={toggleMenu}
            >
              About Us
            </ScrollLink>
          </li>
          <li className="py-2">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block text-headingCol hover:text-secondaryColHover cursor-pointer no-underline"
              onClick={toggleMenu}
            >
              Contact Us
            </ScrollLink>
          </li>
          <li className="py-2">
            <Link
              to="/admin/login"
              className="block text-headingCol hover:text-secondaryColHover cursor-pointer no-underline"
            >
              Admin
            </Link>
          </li>

          {/* User Info or Auth Links in Mobile Menu */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

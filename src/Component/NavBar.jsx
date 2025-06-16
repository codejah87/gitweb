import React, { useState } from "react";
import { assert } from "../assets/imag/ImageFile"; // Assuming this path is correct
import { Link, NavLink } from "react-router-dom"; // Ensure you import from 'react-router-dom'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // Use boolean for clearer state management

  // Define common Tailwind/CSS classes for all NavLink items
  const baseNavLinkClass = "text-[var(--t-c)] text-[19px] hover:text-[var(--m-c)] transition";
  // Define the active class to highlight the text
  const activeNavLinkClass = "text-indigo-600"; // Example: vibrant blue text and bold

  return (
    <div className="flex bg-white items-center h-25 lg:py-5 z-100 justify-between fixed top-0 left-0 md:w-full w-full px-5 sm:px-8 xl:px-29">
      {/* Logo Section */}
      <div className="relative w-60">
        <Link to="/">
          <img
            src={assert.logomain}
            alt="logo"
            className="w-50 absolute -left-200px -top-26" // Ensure these Tailwind/custom classes are defined
          />
        </Link>
      </div>

      {/* Mobile Menu Open Icon (Hamburger) */}
      <i
        onClick={() => setNavOpen(true)}
        className="ri-menu-fold-line text-slate-800 font-semibold border-[2px] border-indigo-300 p-2 rounded-md text-[21px] block lg:hidden"
      ></i>

      {/* Mobile Menu Overlay/Layer */}
      {/* This div creates a clickable overlay to close the mobile menu */}
      <div onClick={() => setNavOpen(false)} className={navOpen ? 'layer block' : 'hidden layer'}></div>

      {/* Navigation Links Container */}
      <div className={navOpen ? "translate-x-[0] flex gap-7 items-center navLink lg:flex " : "-translate-x-[260px] lg:translate-x-0 flex gap-7 items-center navLink lg:flex "}>
        {/* Mobile Menu Close Icon */}
        <i
          onClick={() => setNavOpen(false)}
          className="ri-contract-left-line absolute right-6 top-6 text-gray-800 border-[1px] border-gray-200 p-2 rounded-md text-[20px] lg:hidden"
        ></i>

        {/* Home NavLink */}
        <NavLink
          to="/"
          onClick={() => setNavOpen(false)} // Close nav on link click
           className={({ isActive })=>
            isActive ? `${baseNavLinkClass} ${activeNavLinkClass}` : baseNavLinkClass
          }
        >
          Home
        </NavLink>

        {/* Services NavLink */}
        <NavLink
          to="/service"
          onClick={() => setNavOpen(false)}
          className={({ isActive }) =>
            isActive ? `${baseNavLinkClass} ${activeNavLinkClass}` : baseNavLinkClass
          }
        >
          Services
        </NavLink>

        {/* View Products NavLink */}
        <NavLink
          to="/product"
          onClick={() => setNavOpen(false)}
          className={({ isActive }) =>
            isActive ? `${baseNavLinkClass} ${activeNavLinkClass}` : baseNavLinkClass
          }
        >
          View Products
        </NavLink>

        {/* Contact Us Button (regular Link, as it's a button and typically doesn't need active state highlighting) */}
        <Link to='/contact' onClick={() => setNavOpen(false)}>
          <button className="border-none py-3 text-white px-9 bg-indigo-600 cursor-pointer hover:bg-indigo-500 transition-all rounded-md">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
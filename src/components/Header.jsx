import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-1 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-blue-900 text-lg leading-tight">
              Divine Healing
            </span>
            <br />
            <span className="text-xs text-gray-500 tracking-widest">
              BY SHVETA
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8"></nav>

        {/* Contact/CTA */}
        <div className="hidden md:flex gap-2 items-center">
          <FaWhatsapp className="text-green-500 w-7 h-7" />
          <span className="text-red-700 font-semibold">Contact Us</span>
          <a
            href="https://api.whatsapp.com/send?phone=919999753539"
            className="flex items-center text-black font-bold text-lg gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 99 9975 3539
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-blue-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <div className="flex items-center gap-2 mt-4">
            <FaWhatsapp className="text-green-500 w-7 h-7" />
              <span className="text-red-700 font-semibold">Contact Us</span>
              <a
                href="https://api.whatsapp.com/send?phone=919999753539"
                className="text-black font-bold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 99 9975 3539
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

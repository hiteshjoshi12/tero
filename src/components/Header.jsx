import React, { useState } from "react";

const navLinks = [
  "HOME",
  "ABOUT ME",
  "SERVICES",
  "MEDIA",
  "CERTIFICATION",
  "CONTACT",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-1 py-0.5">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="h-28 w-28" />
          <div>
            <span className="font-bold text-blue-900 text-lg leading-tight">
              Divine Healing
            </span>
            <br />
            <span className="text-xs text-gray-500 tracking-widest">
              BY SHVETA SHARMA
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              className="text-black font-medium hover:text-red-700 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact/CTA */}
        <div className="hidden md:flex items-center gap-2">
          <span className="bg-blue-700 text-white rounded-full p-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.16 19h7.68a2 2 0 001.51-3.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"
              />
            </svg>
          </span>
          <span className="text-red-700 font-semibold">Have Question?</span>
          <a
            href="https://api.whatsapp.com/send?phone=919999753539"
            className="text-black font-bold text-lg"
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
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-black font-medium hover:text-red-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <span className="bg-blue-700 text-white rounded-full p-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.16 19h7.68a2 2 0 001.51-3.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"
                  />
                </svg>
              </span>
              <span className="text-red-700 font-semibold">Have Question?</span>
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

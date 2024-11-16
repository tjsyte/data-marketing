import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        Marketing Dashboard
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <Link to="/table" className="p-2 hover:text-gray-200">Data Table</Link>
        <Link to="/charts" className="p-2 hover:text-gray-200">Charts</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={toggleMobileNav}
      >
        &#9776;
      </button>

      {/* Sliding Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 transform ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-3xl text-gray-200"
            onClick={toggleMobileNav}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-6 text-2xl">
          <li>
            <Link
              to="/table"
              className="hover:text-teal-400"
              onClick={toggleMobileNav}
            >
              Data Table
            </Link>
          </li>
          <li>
            <Link
              to="/charts"
              className="hover:text-teal-400"
              onClick={toggleMobileNav}
            >
              Charts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import profileImg from "../../static/profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg p-4 border-4 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
          <h1 className="text-white font-bold text-lg">Bright Tavonga Bunhu</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-blue-100">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-100">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-100">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-100">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cv" className="hover:text-blue-100">
              CV
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden text-white text-2xl">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 gap-4 text-white font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cv" onClick={() => setIsOpen(false)}>
              CV
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

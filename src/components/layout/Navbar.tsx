import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-primary-700">
          <Smartphone className="h-8 w-8" />
          <span className="text-xl font-heading font-bold">I-Phone</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary-600 ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-accent-400 text-gray-800 hover:bg-accent-500 transition-colors py-2 px-4 rounded-md font-medium"
          >
            <Phone size={18} />
            <span>Get Quote</span>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-accent-400 text-gray-800 hover:bg-accent-500 transition-colors py-3 px-4 rounded-md font-medium w-full"
            >
              <Phone size={18} />
              <span>Get Quote</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
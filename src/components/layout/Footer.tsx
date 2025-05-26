import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Mail, 
  MapPin, 
  Clock, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 text-primary-400 mb-4">
              <Smartphone className="h-6 w-6" />
              <span className="text-xl font-heading font-bold">I-Phone</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional mobile device repair services with a focus on quality, 
              speed, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Screen Replacement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Battery Replacement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Water Damage Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Software Issues
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Repair Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">contact@I-Phonerepair.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Saturday: 10AM-5PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} I-Phone Mobile Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
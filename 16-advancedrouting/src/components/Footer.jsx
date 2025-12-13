import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-700 w-full mt-10">
      <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-bold text-blue-400 mb-4">
              Souvik Biswas
            </h4>
            <p className="text-sm text-gray-400">
              Building high-performance websites and strategic digital solutions for ambitious clients.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Me</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Email: <a href="mailto:info@souvikdev.com" className="hover:text-blue-400 transition-colors">info@souvikdev.com</a>
              </li>
              <li className="text-gray-400">
                Phone: <a href="tel:+918918818386" className="hover:text-blue-400 transition-colors">(+91) 8918818386</a>
              </li>
              <li className="text-gray-400">
                Location: Siliguri, India
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
               <img  class="h-10 w-auto" alt="Dzikwa Trust Logo Inverted" src="https://images.unsplash.com/photo-1689773132527-bcabdc88a395" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, wellbeing programs, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/programs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Programs
              </Link>
              <Link to="/news" className="block text-gray-300 hover:text-white transition-colors text-sm">
                News
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/donate" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Donate
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Programs</span>
            <div className="space-y-2">
              <span className="block text-gray-300 text-sm">Education</span>
              <span className="block text-gray-300 text-sm">Wellbeing</span>
              <span className="block text-gray-300 text-sm">Edu4Talent</span>
              <span className="block text-gray-300 text-sm">Reforestation</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-custom flex-shrink-0" />
                <span className="text-gray-300 text-sm">Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-custom flex-shrink-0" />
                <span className="text-gray-300 text-sm">+263 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-custom flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@dzikwatrust.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dzikwa Trust. All rights reserved. | Registered Charity Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
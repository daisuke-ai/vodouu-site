import React from 'react';
import { Drum, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Drum className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-red-600">LAKOU VODOU</span>
            </div>
            <p className="text-gray-400">
              Celebrating and preserving Haiti's intangible heritage through cultural exchange and education.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Exhibition</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Museum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Support Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500">Workshops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Artist Residencies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Cultural Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Research</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@lakouvodou.org
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +509 123 456 789
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Port-au-Prince, Haiti
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-900/30">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lakou Vodou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
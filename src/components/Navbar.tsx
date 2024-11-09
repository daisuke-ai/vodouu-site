import React, { useState } from 'react';
import { Menu, X, Drum } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50 border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Drum className="h-8 w-8 text-red-600" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-red-600 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Exhibition</a>
                <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Museum</a>
                <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                <a href="#" className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Support Us</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Exhibition</a>
            <a href="#" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Museum</a>
            <a href="#" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
            <a href="#" className="text-gray-300 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">Support Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
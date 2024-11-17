import React, { useState } from 'react';
import { Menu, X, Drum, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActivePath = (path: string) => {
    return location.pathname === path ? "text-red-600" : "text-gray-300";
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/exhibition', label: t('nav.exhibition') },
    { href: '/museum', label: t('nav.museum') },
    { href: '/shop', label: t('nav.shop') },
    { href: '/support', label: t('nav.support') }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-red-600 font-bold text-xl">
              LAKOU HOÛTO
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition duration-300 ${
                      location.pathname === item.href ? 'text-red-600' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="px-3 py-1 text-sm text-gray-300 hover:text-white transition duration-300"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-4 text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-sm border-t border-red-900/30">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium transition duration-300 ${
                location.pathname === item.href ? 'text-red-600' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setLanguage(language === 'en' ? 'fr' : 'en');
              setIsOpen(false);
            }}
            className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300"
          >
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
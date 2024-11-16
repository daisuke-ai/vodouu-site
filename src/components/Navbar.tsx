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
    <nav className="bg-black/95 fixed w-full z-50 border-b border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Drum className="h-8 w-8 text-red-600" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map(item => (
                  <Link key={item.href} to={item.href} className={`${isActivePath(item.href)} hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium`}>
                    {item.label}
                  </Link>
                ))}
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
          <div className="hidden md:flex items-center ml-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-950/30 border border-red-900/50 hover:bg-red-950/50 transition-colors"
            >
              <Globe className="h-5 w-5 text-red-600" />
              <span className="text-gray-300 uppercase text-sm font-medium">
                {language === 'en' ? 'FR' : 'EN'}
              </span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <Link key={item.href} to={item.href} className={`${isActivePath(item.href)} hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
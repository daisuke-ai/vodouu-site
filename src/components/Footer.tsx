import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('footer.quickLinks.exhibition'), path: '/exhibition' },
    { name: t('footer.quickLinks.museum'), path: '/museum' },
    { name: t('footer.quickLinks.shop'), path: '/shop' },
    { name: t('footer.quickLinks.support'), path: '/support' }
  ];

  const programs = [
    { name: t('footer.programs.workshops'), path: '/programs/workshops' },
    { name: t('footer.programs.artistResidencies'), path: '/programs/residencies' },
    { name: t('footer.programs.culturalEvents'), path: '/programs/events' },
    { name: t('footer.programs.research'), path: '/programs/research' }
  ];

  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-red-600">LAKOU HOÛTO</h2>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-black-500 font-semibold mb-4">
              {t('footer.programs.title')}
            </h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name} className="text-black-300">
                  {program.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                {t('footer.contact.email')}
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                {t('footer.contact.phone')}
              </li>
              {(Array.isArray(t('footer.contact.address'))
                ? t('footer.contact.address')
                : [t('footer.contact.address')])
                .map((line, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
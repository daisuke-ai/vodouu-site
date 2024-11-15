import React from 'react';
import { Drum, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Exhibition', path: '/exhibition' },
    { name: 'Museum', path: '/museum' },
    { name: 'Shop', path: '/shop' },
    { name: 'Support', path: '/support' }
  ];

  const programs = [
    { name: 'Workshops', path: '/programs/workshops' },
    { name: 'Artist Residencies', path: '/programs/residencies' },
    { name: 'Cultural Events', path: '/programs/events' },
    { name: 'Research', path: '/programs/research' }
  ];

  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-600">LAKOU VODOU</h3>
            <p className="text-gray-400">
              Celebrate and preserve Haiti's intangible heritage through cultural exchange and education.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() => navigate(program.path)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@lakouvodou.org
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +509 3909 8079
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Port-au-Prince, Haiti
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Cap-Haïtien, Haiti
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
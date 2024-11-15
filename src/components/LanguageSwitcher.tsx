import { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('en');

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    setCurrentLang(newLang);
    // Trigger language change in the app
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-950/30 border border-red-900/50 hover:bg-red-950/50 transition-colors"
    >
      <Globe className="h-5 w-5 text-red-600" />
      <span className="text-gray-300 uppercase text-sm font-medium">
        {currentLang === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ExhibitionHeroProps {
  scrollY: number;
}

const ExhibitionHero = ({ scrollY }: ExhibitionHeroProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[90vh] overflow-hidden bg-white-100">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://sites.duke.edu/lawandhousinginhaiti/files/2012/04/cropped-haitian-girls-442639-sw.jpg")',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-black-500"></div>
              <span className="text-black-500 uppercase tracking-wider text-sm font-semibold">
                {t('exhibition.hero.badge')}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
              {t('exhibition.hero.title')}
            </h1>
            <p className="text-black-300 text-xl mb-12 leading-relaxed">
              {t('exhibition.hero.subtitle')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white-200 backdrop-blur-sm p-4 rounded-lg border border-black-200">
                <Calendar className="h-6 w-6 text-black-500 mb-2" />
                <p className="text-black-500 font-bold">2025-2027</p>
                <p className="text-black-300 text-sm">Exhibition Period</p>
              </div>
              <div className="bg-white-200 backdrop-blur-sm p-4 rounded-lg border border-black-200">
                <Clock className="h-6 w-6 text-black-500 mb-2" />
                <p className="text-black-500 font-bold">Daily</p>
                <p className="text-black-300 text-sm">10AM - 6PM</p>
              </div>
              <div className="bg-white-200 backdrop-blur-sm p-4 rounded-lg border border-black-200">
                <MapPin className="h-6 w-6 text-black-500 mb-2" />
                <p className="text-black-500 font-bold">Two Locations</p>
                <p className="text-black-300 text-sm">Port-au-Prince & Cap-Haïtien</p>
              </div>
              <div className="bg-white-200 backdrop-blur-sm p-4 rounded-lg border border-black-200">
                <Users className="h-6 w-6 text-black-500 mb-2" />
                <p className="text-black-500 font-bold">Virtual Tours</p>
                <p className="text-black-300 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionHero;
import React from 'react';
import { Globe, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  { key: 'virtualTours', icon: Globe },
  { key: 'mobileExhibition', icon: Smartphone },
  { key: 'digitalArchive', icon: BookOpen }
];

const FeaturedExhibits = () => {
  const { t } = useLanguage();
  
  return (
<section className="py-24 bg-white-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-black-200 to-black-300 rounded-xl blur opacity-25"></div>
        <img 
          src="https://i.imgur.com/A7JbB6N.jpeg" 
          alt={t('exhibition.featured.imageAlt')} 
          className="relative rounded-lg shadow-2xl"
        />
      </div>
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black-200 rounded-full">
          <span className="text-white font-semibold">
            {t('exhibition.featured.badge')}
          </span>
        </div>
        <h2 className="text-4xl font-bold text-black-500">
          {t('exhibition.featured.title')}
        </h2>
        <p className="text-black-300 text-lg leading-relaxed">
          {t('exhibition.featured.description')}
        </p>
        <div className="grid gap-6">
          {features.map((feature) => (
            <div key={feature.key} className="flex items-start gap-4 p-4 bg-white-200 rounded-lg border border-black-200">
              <feature.icon className="h-6 w-6 text-black-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black-500">
                  {t(`exhibition.featured.features.${feature.key}.title`)}
                </h3>
                <p className="text-black-300">
                  {t(`exhibition.featured.features.${feature.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default FeaturedExhibits;
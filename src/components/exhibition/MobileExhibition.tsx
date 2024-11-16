import React from 'react';
import { Globe, Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const features = [
  { key: 'virtualTours', icon: Globe },
  { key: 'mobileExhibition', icon: Smartphone },
  { key: 'digitalArchive', icon: BookOpen }
];

const MobileExhibition = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              {t('exhibition.mobile.title')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('exhibition.mobile.description')}
            </p>
            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.key} className="flex items-start gap-4 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
                  <feature.icon className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t(`exhibition.mobile.features.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-400">
                      {t(`exhibition.mobile.features.${feature.key}.description`)}
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

export default MobileExhibition;
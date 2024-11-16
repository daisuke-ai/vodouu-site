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
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiM5MjAwMDAiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25"></div>
            <img 
              src="https://i.imgur.com/A7JbB6N.jpeg" 
              alt={t('exhibition.featured.imageAlt')} 
              className="relative rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/50 rounded-full">
              <span className="text-red-600 font-semibold">
                {t('exhibition.featured.badge')}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              {t('exhibition.featured.title')}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('exhibition.featured.description')}
            </p>
            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.key} className="flex items-start gap-4 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
                  <feature.icon className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {t(`exhibition.featured.features.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-400">
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
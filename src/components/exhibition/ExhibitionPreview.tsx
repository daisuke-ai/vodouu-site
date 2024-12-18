import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const exhibits = [
  {
    key: 'drapo',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nAwWD_FfRQQtZSyphK29VFwHCrx8a-l1XHk6l3qyYap77q6xmjD1g0o8NfQY9Sxalsg",
    category: "Sacred Objects"
  },
  {
    key: 'loa',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDn3fUWSAFR8uyraiIWNiRyZ82r8asKdIqQ&s",
    category: "Spiritual Heritage"
  },
  {
    key: 'ritual',
    image: "https://images.squarespace-cdn.com/content/v1/631b640f7f3d3d303fe92fa1/17df5d10-99c3-43e3-a8e4-c5c779b28337/53573654506_4484997919_k.jpg",
    category: "Ceremonies"
  }
];

const ExhibitionPreview = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-black-500 uppercase tracking-wider text-sm font-semibold">
            {t('exhibition.preview.badge')}
          </span>
          <h2 className="text-4xl font-bold text-black-700 mb-6">
            {t('exhibition.preview.title')}
          </h2>
          <p className="text-black-500">
            {t('exhibition.preview.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {exhibits.map((exhibit) => (
            <div key={exhibit.key} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={exhibit.image} 
                  alt={t(`exhibition.exhibits.${exhibit.key}.title`)}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-black-600/20 text-black-1000 text-sm rounded-full mb-3">
                  {t(`exhibition.exhibits.${exhibit.key}.category`)}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`exhibition.exhibits.${exhibit.key}.title`)}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t(`exhibition.exhibits.${exhibit.key}.description`)}
                </p>
                <button className="flex items-center text-black-1000 hover:text-black-1000 transition duration-300">
                  {t('exhibition.exhibits.viewDetails')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionPreview;
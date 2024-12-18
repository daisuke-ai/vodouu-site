import React from 'react';
import { ScrollText, Camera, Book, Users, ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Museum = () => {
  const { t } = useLanguage();
  
  const features = [
    { icon: ScrollText, key: 'artifacts' },
    { icon: Camera, key: 'virtualTours' },
    { icon: Book, key: 'library' },
    { icon: Users, key: 'guidedTours' },
    { icon: Calendar, key: 'exhibitions' }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-white-100">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://rustytraveltrunk.com/wp-content/uploads/2017/08/Voodoo-Museum-4.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-red-600"></div>
                <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">
                  {t('museum.hero.badge')}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('museum.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t('museum.hero.subtitle')}
              </p>
              <button className="btn-primary flex items-center group">
                {t('museum.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Overview */}
      <section className="py-24 bg-white-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-black-500">
                {t('museum.overview.title')}
              </h2>
              <p className="text-black-300 text-lg leading-relaxed">
                {t('museum.overview.description')}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white-100 p-6 rounded-lg border border-black-200">
                  <p className="text-black-500 text-3xl font-bold mb-1">200+</p>
                  <p className="text-black-300">{t('museum.overview.stats.artifacts')}</p>
                </div>
                <div className="bg-white-100 p-6 rounded-lg border border-black-200">
                  <p className="text-black-500 text-3xl font-bold mb-1">50+</p>
                  <p className="text-black-300">{t('museum.overview.stats.events')}</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src="https://rustytraveltrunk.com/wp-content/uploads/2017/08/Voodoo-Museum-header.jpg"
                alt="Museum interior"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black-500 mb-6">
              {t('museum.features.title')}
            </h2>
            <p className="text-black-300 max-w-2xl mx-auto text-lg">
              {t('museum.features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-black-300 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white-100 p-8 rounded-lg border border-black-200">
                  <feature.icon className="h-8 w-8 text-black-500 mb-4" />
                  <h3 className="text-xl font-bold text-black-500 mb-3">{t(`museum.features.items.${feature.key}.title`)}</h3>
                  <p className="text-black-300">{t(`museum.features.items.${feature.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-900 to-red-600 rounded-3xl blur opacity-25 animate-gradient-x"></div>
            <div className="relative bg-red-950/50 rounded-2xl p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    {t('museum.visit.title')}
                  </h2>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">
                        {t('museum.visit.hours.title')}
                      </h3>
                      <p>
                        {t('museum.visit.hours.schedule')}
                      </p>
                      <p>
                        {t('museum.visit.hours.closed')}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">
                        {t('museum.visit.admission.title')}
                      </h3>
                      <p>
                        {t('museum.visit.admission.adult')}
                      </p>
                      <p>
                        {t('museum.visit.admission.student')}
                      </p>
                      <p>
                        {t('museum.visit.admission.children')}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">
                        {t('museum.visit.location.title')}
                      </h3>
                      <p>
                        {t('museum.visit.location.address')[0]}
                      </p>
                      <p>
                        {t('museum.visit.location.address')[1]}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://hamoc.org/wp-content/uploads/2024/02/HAMOC_GenImg3-scaled.jpg"
                    alt="Museum entrance"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Museum;
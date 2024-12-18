import React from 'react';
import { ShoppingBag, Bell, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Shop = () => {
  const [email, setEmail] = React.useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const categories = [
    { key: 'artifacts' },
    { key: 'books' },
    { key: 'artPrints' }
  ];

  return (
    <main className="pt-16">
      <section className="min-h-[80vh] relative flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-9/157644340_119613213466403_2725001124378123699_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFkQt6jhWz3QuJjLSHraL2NXuX6WQnSq_Je5fpZCdKr8gRDXF6pqUytYa6Ny5GL4pIQS5FHvuAjnSxx4RhZ8BXr&_nc_ohc=nP-PJW2WDJEQ7kNvgFUgG3X&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=A6sJSAAWpHVYfdCtbg1Ecze&oh=00_AYAVQ08EdjsrJCNbqYHCzDXHkyLSCg9dDcqY5CKMAexAng&oe=675D69CF")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="relative w-full py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-black-200 border border-black-500">
              <ShoppingBag className="h-10 w-10 text-black-500" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('shop.hero.title')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('shop.hero.subtitle')}
            </p>
            
            <div className="relative max-w-md mx-auto mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-black-500 to-black-700 rounded-lg blur opacity-25"></div>
              <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-black-500">
                <div className="flex items-center gap-3 mb-4 text-black-500">
                  <Bell className="h-5 w-5" />
                  <span className="font-semibold">{t('shop.hero.notification.title')}</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('shop.hero.notification.placeholder')}
                    className="w-full px-4 py-3 bg-black/50 border border-black-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-black-600 transition duration-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center group"
                  >
                    {t('shop.hero.notification.button')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {categories.map((item, index) => (
                <div 
                  key={index}
                  className="bg-black-200 border border-black-500 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-black-500 mb-2">
                    {t(`shop.categories.${item.key}.title`)}
                  </h3>
                  <p className="text-black-300 text-sm">
                    {t(`shop.categories.${item.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
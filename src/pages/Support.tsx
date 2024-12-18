import React, { useState } from 'react';
import { Heart, Gift, Users, Brush, ArrowRight, Check, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Support = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const supportCategories = [
    { key: 'preservation', icon: Gift },
    { key: 'programs', icon: Users },
    { key: 'residencies', icon: Brush }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/631b640f7f3d3d303fe92fa1/17df5d10-99c3-43e3-a8e4-c5c779b28337/53573654506_4484997919_k.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="h-6 w-6 text-black-600" />
                <span className="text-black-600 uppercase tracking-wider text-sm font-semibold">
                  {t('support.hero.badge')}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('support.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t('support.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">{t('support.donation.title')}</h2>
              <p className="text-gray-300 text-lg">
                {t('support.donation.description')}
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[50, 100, 250, 500].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-lg border ${
                        selectedAmount === amount
                          ? 'border-black-600 bg-black-950/50 text-white'
                          : 'border-black-900/30 text-gray-400 hover:border-black-600 hover:bg-black-950/30'
                      } transition duration-300`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('custom');
                    }}
                    className="w-full px-4 py-3 bg-black border border-black-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-black-600 transition duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center group"
                >
                  {t('support.donation.amounts.button')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {showThankYou && (
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="h-5 w-5" />
                  <span>{t('support.donation.thankYou')}</span>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="grid gap-6">
                {supportCategories.map((category) => (
                  <div key={category.key} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-black-600 to-black-900 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-black p-6 rounded-lg border border-black-900/30">
                      <category.icon className="h-8 w-8 text-black-600 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        {t(`support.categories.${category.key}.title`)}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {t(`support.categories.${category.key}.description`)}
                      </p>
                      <div className="flex items-center gap-2 text-black-500">
                        <Check className="h-5 w-5" />
                        <span>{t(`support.categories.${category.key}.impact`)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-black-200 via-black-300 to-black-200 rounded-3xl blur opacity-25 animate-gradient-x"></div>
            <div className="relative bg-white-200 backdrop-blur-sm rounded-2xl p-12">
              <div className="max-w-2xl mx-auto text-center">
                <Mail className="h-12 w-12 text-black-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-black-500 mb-4">
                  {t('support.newsletter.title')}
                </h2>
                <p className="text-black-300 mb-8">
                  {t('support.newsletter.description')}
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder={t('support.newsletter.placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white-100 border border-black-200 rounded-lg text-black-500 placeholder-black-300 focus:outline-none focus:border-black-400 transition duration-300"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    {t('support.newsletter.button')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
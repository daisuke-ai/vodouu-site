import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://th-thumbnailer.cdn-si-edu.com/dB7m2Rl4d4u3q0yGTahjNhE4_t0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/de/d6/ded6c936-6194-4eec-af5f-2866cd9f1c9a/julaug2017_d03_photopackagevodou.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/museum')}
              className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition duration-300"
            >
              Explore Museum
            </button>
            <button 
              onClick={() => navigate('/support')}
              className="border-2 border-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-700/20 transition duration-300"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
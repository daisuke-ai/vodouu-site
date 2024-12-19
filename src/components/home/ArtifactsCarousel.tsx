import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

// Import images
import image1 from '/assets/images/1.jpg';
import image2 from '/assets/images/2.jpg';
import image4 from '/assets/images/4.jpg';
import image5 from '/assets/images/5.jpg';
import image6 from '/assets/images/6.jpg';
import image7 from '/assets/images/7.jpg';
import image8 from '/assets/images/8.jpg';
import image9 from '/assets/images/9.jpg';
import image10 from '/assets/images/10.jpg';
import image11 from '/assets/images/11.jpg';

const artifacts = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
];

const ArtifactsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === artifacts.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artifacts.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-24 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-black-500 uppercase tracking-wider text-sm font-semibold">
            {t('home.artifacts.badge')}
          </span>
          <h2 className="text-4xl font-bold text-black-500 mt-4 mb-6">
            {t('home.artifacts.title')}
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {artifacts.map((artifact) => (
                <div 
                  key={artifact.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="relative group">
                    <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden">
                      <img 
                        src={artifact.image}
                        alt="Vodou artifact"
                        className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white-200/80 backdrop-blur-sm p-3 rounded-full border border-black-200 hover:bg-white-300 transition duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-black-500" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white-200/80 backdrop-blur-sm p-3 rounded-full border border-black-200 hover:bg-white-300 transition duration-300"
          >
            <ChevronRight className="h-6 w-6 text-black-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtifactsCarousel; 
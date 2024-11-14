import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface ExhibitionHeroProps {
  scrollY: number;
}

const ExhibitionHero = ({ scrollY }: ExhibitionHeroProps) => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1590452224879-867e8012a828?auto=format&fit=crop&q=80")',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-red-600"></div>
              <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">2025-2027 Major Exhibition</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none">
              Sacred Traditions of <span className="text-red-600">Haitian Vodou</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Journey through centuries of spiritual heritage, from the roots of Vodou to its profound influence on human freedom and cultural identity
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
                <Calendar className="h-6 w-6 text-red-600 mb-2" />
                <p className="text-red-600 font-bold">2025-2027</p>
                <p className="text-gray-400 text-sm">Exhibition Period</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
                <Clock className="h-6 w-6 text-red-600 mb-2" />
                <p className="text-red-600 font-bold">Daily</p>
                <p className="text-gray-400 text-sm">10AM - 6PM</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
                <MapPin className="h-6 w-6 text-red-600 mb-2" />
                <p className="text-red-600 font-bold">Two Locations</p>
                <p className="text-gray-400 text-sm">Port-au-Prince & Cap-Haïtien</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-red-900/20">
                <Users className="h-6 w-6 text-red-600 mb-2" />
                <p className="text-red-600 font-bold">Virtual Tours</p>
                <p className="text-gray-400 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionHero;
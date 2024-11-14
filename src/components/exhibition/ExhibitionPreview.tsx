import React from 'react';
import { ArrowRight } from 'lucide-react';

const exhibits = [
  {
    title: "Drapo Vodou",
    description: "Sacred ceremonial flags embodying spiritual symbolism",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80",
    category: "Sacred Objects"
  },
  {
    title: "Loa Spirits",
    description: "Exploring the divine spirits of Vodou tradition",
    image: "https://images.unsplash.com/photo-1590452224879-867e8012a828?auto=format&fit=crop&q=80",
    category: "Spiritual Heritage"
  },
  {
    title: "Ritual Objects",
    description: "Ceremonial artifacts and their sacred significance",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80",
    category: "Ceremonies"
  }
];

const FeaturedExhibits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Featured Exhibits</h2>
          <p className="text-gray-300">
            Discover our most significant artifacts and sacred objects, each telling a unique story of Vodou heritage
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {exhibits.map((exhibit, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={exhibit.image} 
                  alt={exhibit.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full mb-3">
                  {exhibit.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{exhibit.title}</h3>
                <p className="text-gray-300 mb-4">{exhibit.description}</p>
                <button className="flex items-center text-red-500 hover:text-red-400 transition duration-300">
                  View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExhibits;
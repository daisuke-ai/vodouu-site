import React from 'react';
import { ArrowRight, Star, Calendar, Users } from 'lucide-react';

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80")',
            transform: 'scale(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="text-red-600">LAKOU</span>
                <br />
                <span className="text-white">VODOU</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-8 max-w-2xl">
                Experience the profound spiritual and cultural heritage of Haiti through our immersive cultural center
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center">
                  Explore Museum
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="btn-secondary">
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibition */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-red-600" />
                <span className="text-red-600 font-semibold">Featured Exhibition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Sacred Traditions of Haitian Vodou</h2>
              <p className="text-gray-300 text-lg">
                Immerse yourself in our latest exhibition showcasing the rich tapestry of Vodou traditions, featuring sacred artifacts, ceremonial objects, and contemporary interpretations.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-red-600 text-2xl font-bold">2025-2027</p>
                  <p className="text-gray-400">Exhibition Period</p>
                </div>
                <div className="h-12 w-px bg-red-900"></div>
                <div>
                  <p className="text-red-600 text-2xl font-bold">Port-au-Prince</p>
                  <p className="text-gray-400">Main Location</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80" 
                alt="Sacred artifacts"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-950 p-6 rounded-lg">
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-gray-300">Artifacts on Display</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cultural Programs</h2>
            <p className="text-gray-300">
              Join our diverse range of programs designed to preserve and share the rich heritage of Haitian Vodou
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1596568960638-96245aa83583?auto=format&fit=crop&q=80" 
                alt="Workshops" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <Calendar className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Cultural Workshops</h3>
                <p className="text-gray-300">Immersive learning experiences led by Vodou practitioners</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1534210802159-12e7c89b64a6?auto=format&fit=crop&q=80" 
                alt="Ceremonies" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <Users className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Community Events</h3>
                <p className="text-gray-300">Celebrations and ceremonies that honor our traditions</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1597890741009-f57f17e776ac?auto=format&fit=crop&q=80" 
                alt="Research" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <Star className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Research Center</h3>
                <p className="text-gray-300">Preserving and documenting our spiritual heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-red-950">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Us in Preserving Haiti's Sacred Heritage
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Support our mission to protect and share the rich traditions of Haitian Vodou for future generations
              </p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
                Become a Supporter
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
import React from 'react';
import { ScrollText, Camera, Book, Users, ArrowRight, Calendar } from 'lucide-react';

const Museum = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
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
                <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">Holicha Vodou Museum</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Preserving Sacred Heritage
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Journey through centuries of Haitian Vodou tradition, art, and spirituality in our immersive museum experience.
              </p>
              <button className="btn-primary flex items-center group">
                Plan Your Visit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Experience the Living Tradition of Vodou
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Interpretation Center, with an indigenous character, is classified under the category of ethnology museums; serving as a college, sanctuary, and center of intellectual research. It ambitiously aims, among other things, to bring knowledge and understanding through a new approach to cultural dissemination of our spiritual practices, outlined within an educational framework.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <p className="text-red-600 text-3xl font-bold mb-1">200+</p>
                  <p className="text-gray-400">Sacred Artifacts</p>
                </div>
                <div className="bg-red-950/30 p-6 rounded-lg border border-red-900/50">
                  <p className="text-red-600 text-3xl font-bold mb-1">50+</p>
                  <p className="text-gray-400">Annual Events</p>
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
      <section className="py-24 bg-gradient-to-b from-black to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Museum Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Discover our comprehensive collection and educational programs designed to preserve and share Vodou heritage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ScrollText,
                title: "Sacred Artifacts",
                description: "Explore our collection of authentic Vodou ceremonial objects and ritual items."
              },
              {
                icon: Camera,
                title: "Virtual Tours",
                description: "Experience the museum from anywhere through our immersive virtual exhibitions."
              },
              {
                icon: Book,
                title: "Research Library",
                description: "Access our extensive archive of documents and scholarly resources."
              },
              {
                icon: Users,
                title: "Guided Tours",
                description: "Learn from expert guides who share deep knowledge of Vodou traditions."
              },
              {
                icon: Calendar,
                title: "Special Exhibitions",
                description: "Rotating exhibitions showcasing different aspects of Vodou culture."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-black p-8 rounded-lg border border-red-900/50">
                  <feature.icon className="h-8 w-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Plan Your Visit</h2>
                  <div className="space-y-6 text-gray-300">
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">Hours</h3>
                      <p>Tuesday - Sunday: 10:00 AM - 6:00 PM</p>
                      <p>Closed on Mondays</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">Admission</h3>
                      <p>Adults: $15</p>
                      <p>Students & Seniors: $10</p>
                      <p>Children under 12: Free</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-red-500 mb-2">Location</h3>
                      <p>123 Heritage Avenue</p>
                      <p>Port-au-Prince, Haiti</p>
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
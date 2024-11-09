import React from 'react';
import { Calendar, Users, BookOpen, Music } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-red-600" />,
      title: "Cultural Events",
      description: "Exhibitions, performances, and festivals following the Vodou calendar"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Community Workshops",
      description: "Participatory activities and cultural education programs"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      title: "Research Center",
      description: "Academic resources and documentation of oral traditions"
    },
    {
      icon: <Music className="h-8 w-8 text-red-600" />,
      title: "Artist Residencies",
      description: "Supporting artists exploring Vodou heritage through their work"
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            Our Offerings
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the various ways we preserve and share Haitian Vodou culture through our programs and services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border border-red-900 rounded-lg hover:bg-red-950/30 transition duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
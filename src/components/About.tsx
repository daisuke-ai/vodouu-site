import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600">
              Cultural Center of Excellence
            </h2>
            <p className="text-gray-300 text-lg">
              This center is also an archival laboratory of oral traditions, serving as a behavioral compass for the intangible heritage of the Black race. Through our sacred celebrations, we honor and keep alive the breath of our heritage.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-red-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-red-500 mb-2">Events</h3>
                <p className="text-gray-400">Workshops, concerts, exhibitions & performances</p>
              </div>
              <div className="border border-red-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-red-500 mb-2">Heritage</h3>
                <p className="text-gray-400">Preserving and sharing Vodou traditions</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596568960638-96245aa83583?auto=format&fit=crop&q=80" 
                alt="Cultural artifacts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1534210802159-12e7c89b64a6?auto=format&fit=crop&q=80" 
                alt="Cultural celebration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const ExhibitionPreview = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-900 to-red-600 rounded-3xl blur opacity-25 animate-gradient-x"></div>
          <div className="relative bg-red-950/50 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-6 w-6 text-red-600" />
                  <span className="text-red-600 font-semibold">2025-2027 Preview</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Journey Through Time: Origins to Present</h2>
                <p className="text-gray-300 mb-8">
                  Our upcoming major exhibition traces the evolution of Vodou from its African roots to its present-day significance, with a special focus on the loa (spirits) and their role in Haitian culture.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-red-500">5+</p>
                    <p className="text-gray-400">Exhibition Halls</p>
                  </div>
                  <div className="bg-black/50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-red-500">100+</p>
                    <p className="text-gray-400">Unique Artifacts</p>
                  </div>
                </div>
                <button className="group flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300">
                  Register for Preview
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
                  <img 
                    src="https://beadsofparadisenyc.com/cdn/shop/products/CeremonyHaitianFlag.webp?v=1655172962&width=1788" 
                    alt="Exhibition Preview" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black/90 p-6 rounded-lg">
                  <p className="text-2xl font-bold text-red-500">2025</p>
                  <p className="text-gray-300">Opening Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionPreview;
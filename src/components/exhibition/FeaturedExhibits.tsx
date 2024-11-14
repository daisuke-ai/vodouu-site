import React from 'react';
import { Globe, Smartphone, BookOpen } from 'lucide-react';

const MobileExhibition = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiM5MjAwMDAiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25"></div>
            <img 
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80" 
              alt="Mobile Exhibition" 
              className="relative rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/50 rounded-full">
              <span className="text-red-600 font-semibold">Mobile & Virtual Access</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Experience Vodou Heritage Anywhere</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mobile and virtual exhibitions bring the rich traditions of Haitian Vodou directly to you, making cultural education accessible to everyone, everywhere.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
                <Globe className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Virtual Tours</h3>
                  <p className="text-gray-400">Immersive 360° experiences of our exhibitions</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
                <Smartphone className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Mobile Exhibition</h3>
                  <p className="text-gray-400">Traveling displays at museums and universities</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-red-950/20 rounded-lg border border-red-900/20">
                <BookOpen className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Digital Archive</h3>
                  <p className="text-gray-400">Comprehensive online collection database</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExhibition;
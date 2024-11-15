import React from 'react';
import { ShoppingBag, Bell, ArrowRight } from 'lucide-react';

const Shop = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    setEmail('');
  };

  return (
    <main className="pt-16">
      <section className="min-h-[80vh] relative flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-9/157644340_119613213466403_2725001124378123699_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFkQt6jhWz3QuJjLSHraL2NXuX6WQnSq_Je5fpZCdKr8gRDXF6pqUytYa6Ny5GL4pIQS5FHvuAjnSxx4RhZ8BXr&_nc_ohc=nP-PJW2WDJEQ7kNvgFUgG3X&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=A6sJSAAWpHVYfdCtbg1Ecze&oh=00_AYAVQ08EdjsrJCNbqYHCzDXHkyLSCg9dDcqY5CKMAexAng&oe=675D69CF")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="relative w-full py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-red-950/50 border border-red-600">
              <ShoppingBag className="h-10 w-10 text-red-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Shop Coming Soon
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Our curated collection of authentic Vodou artifacts, educational materials, and cultural merchandise will be available soon.
            </p>
            
            <div className="relative max-w-md mx-auto mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25"></div>
              <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-red-900/50">
                <div className="flex items-center gap-3 mb-4 text-red-500">
                  <Bell className="h-5 w-5" />
                  <span className="font-semibold">Get Notified</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-black/50 border border-red-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition duration-300"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center group"
                  >
                    Notify Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { title: 'Artifacts', description: 'Authentic replicas and cultural items' },
                { title: 'Books', description: 'Educational materials and literature' },
                { title: 'Art Prints', description: 'Contemporary Vodou-inspired artwork' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-red-950/20 border border-red-900/30 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-red-500 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
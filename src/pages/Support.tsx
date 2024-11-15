import React, { useState } from 'react';
import { Heart, Gift, Users, Brush, ArrowRight, Mail, Check } from 'lucide-react';

const Support = () => {
  const [email, setEmail] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const supportCategories = [
    {
      icon: Gift,
      title: "Cultural Preservation",
      description: "Support the preservation and documentation of Vodou artifacts and traditions",
      impact: "Helps preserve 10+ artifacts"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Fund educational workshops and community engagement initiatives",
      impact: "Supports 5 workshop sessions"
    },
    {
      icon: Brush,
      title: "Artist Residencies",
      description: "Enable artists to explore and create works inspired by Vodou heritage",
      impact: "Sponsors 1 artist for a month"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/631b640f7f3d3d303fe92fa1/17df5d10-99c3-43e3-a8e4-c5c779b28337/53573654506_4484997919_k.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="h-6 w-6 text-red-600" />
                <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">Support Our Mission</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Preserve Our Sacred Heritage
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your support helps us maintain and share Haiti's rich Vodou traditions for future generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">Make a Donation</h2>
              <p className="text-gray-300 text-lg">
                Your contribution directly supports our mission to preserve and share Haiti's spiritual heritage
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[50, 100, 250, 500].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-lg border ${
                        selectedAmount === amount
                          ? 'border-red-600 bg-red-950/50 text-white'
                          : 'border-red-900/30 text-gray-400 hover:border-red-600 hover:bg-red-950/30'
                      } transition duration-300`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('custom');
                    }}
                    className="w-full px-4 py-3 bg-black border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center group"
                >
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {showThankYou && (
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="h-5 w-5" />
                  <span>Thank you for your support!</span>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div className="grid gap-6">
                {supportCategories.map((category, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-black p-6 rounded-lg border border-red-900/30">
                      <category.icon className="h-8 w-8 text-red-600 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      <div className="flex items-center gap-2 text-red-500">
                        <Check className="h-5 w-5" />
                        <span>{category.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-black to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-900 to-red-600 rounded-3xl blur opacity-25 animate-gradient-x"></div>
            <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-12">
              <div className="max-w-2xl mx-auto text-center">
                <Mail className="h-12 w-12 text-red-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
                <p className="text-gray-300 mb-8">
                  Subscribe to our newsletter for updates on exhibitions, events, and ways to support our mission
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition duration-300"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
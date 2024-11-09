import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Calendar, Users, ChevronRight } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Advanced Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://th-thumbnailer.cdn-si-edu.com/dB7m2Rl4d4u3q0yGTahjNhE4_t0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/de/d6/ded6c936-6194-4eec-af5f-2866cd9f1c9a/julaug2017_d03_photopackagevodou.jpg")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-red-600"></div>
                <span className="text-red-600 uppercase tracking-wider text-sm font-semibold">Cultural Center of Excellence</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-bold leading-none">
                <span className="text-red-600 block transform hover:scale-105 transition-transform duration-300">LAKOU</span>
                <span className="text-white block transform hover:scale-105 transition-transform duration-300 mt-2">VODOU</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-8 mb-10 max-w-2xl leading-relaxed">
                Journey into the heart of Haiti's spiritual heritage through our immersive cultural sanctuary
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group btn-primary flex items-center justify-center">
                  Explore Museum
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group btn-secondary flex items-center justify-center">
                  Support Our Mission
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="text-center px-6 py-4 bg-black/50 backdrop-blur-sm rounded-lg">
            <p className="text-red-600 text-2xl font-bold">200+</p>
            <p className="text-gray-400 text-sm">Artifacts</p>
          </div>
          <div className="text-center px-6 py-4 bg-black/50 backdrop-blur-sm rounded-lg">
            <p className="text-red-600 text-2xl font-bold">50+</p>
            <p className="text-gray-400 text-sm">Events</p>
          </div>
          <div className="text-center px-6 py-4 bg-black/50 backdrop-blur-sm rounded-lg">
            <p className="text-red-600 text-2xl font-bold">1000+</p>
            <p className="text-gray-400 text-sm">Visitors</p>
          </div>
        </div>
      </section>

      {/* Featured Exhibition with Animated Elements */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/50 rounded-full">
                <Star className="h-5 w-5 text-red-600" />
                <span className="text-red-600 font-semibold">Featured Exhibition</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Sacred Traditions of Haitian Vodou
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                Immerse yourself in our latest exhibition showcasing the rich tapestry of Vodou traditions, featuring sacred artifacts, ceremonial objects, and contemporary interpretations.
              </p>
              <div className="flex items-center gap-12">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-black p-6 rounded-lg border border-red-800">
                    <p className="text-red-600 text-3xl font-bold">2025-2027</p>
                    <p className="text-gray-400">Exhibition Period</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-black p-6 rounded-lg border border-red-800">
                    <p className="text-red-600 text-3xl font-bold">Port-au-Prince</p>
                    <p className="text-gray-400">Main Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img 
                  src="https://www.learnreligions.com/thmb/5ZQLLjlRhMd48natOB1vDbA8X6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-755658891-5ae9cf3c8023b900369b5553.jpg" 
                  alt="Sacred artifacts"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition duration-300"
                />
                <div className="absolute -bottom-8 -left-8 bg-red-950 p-8 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold text-white">200+</p>
                  <p className="text-gray-300">Artifacts on Display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Programs with Hover Effects */}
      <section className="py-32 bg-gradient-to-b from-black to-red-950 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiM5MjAwMDAiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Cultural Programs</h2>
            <p className="text-gray-300 text-xl">
              Immerse yourself in our diverse range of programs designed to preserve and share the rich heritage of Haitian Vodou
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Cultural Workshops",
                description: "Immersive learning experiences led by Vodou practitioners",
                image: "https://universes.art/fileadmin/user_upload/Specials/Vodou/Temples-Rituals-400-267.jpg",
                icon: Calendar
              },
              {
                title: "Community Events",
                description: "Celebrations and ceremonies that honor our traditions",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bi-34JXGUM11DtBqbFTr6hSiAmF8lRSatQ&s",
                icon: Users
              },
              {
                title: "Research Center",
                description: "Preserving and documenting our spiritual heritage",
                image: "https://scontent.fisb17-1.fna.fbcdn.net/v/t39.30808-6/305575360_392769853024297_1522914858424423692_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhSvTROzddxqxeVtpW4S63bJQFu0P8ZrZslAW7Q_xmtoIP53HVn_cAwUXkX__6HFyRLCOl3L8CQw7_4MlMpn4S&_nc_ohc=XqzEG3WVfn0Q7kNvgEqOncx&_nc_zt=23&_nc_ht=scontent.fisb17-1.fna&_nc_gid=AYaQWzOVizGXPRCRFZ3KXHx&oh=00_AYCgl_T9OHnX32oBJie17lR7McNVfCHoT3Rik4Be8X-iFw&oe=67354CD9",
                icon: Star
              }
            ].map((program, index) => (
              <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative h-full bg-black rounded-2xl overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <program.icon className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-300">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Gradient Animation */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-900 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300 animate-gradient-x"></div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950 to-black">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative px-8 py-20 md:px-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Join Us in Preserving Haiti's<br />Sacred Heritage
                </h2>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12">
                  Support our mission to protect and share the rich traditions of Haitian Vodou for future generations
                </p>
                <button className="group bg-white text-red-900 px-12 py-4 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-lg flex items-center mx-auto">
                  Become a Supporter
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
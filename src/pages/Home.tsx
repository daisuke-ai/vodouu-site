import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Calendar, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ArtifactsCarousel from '../components/home/ArtifactsCarousel';
import image12 from '/images/12.jpg'
import image3 from '/images/3.jpg'


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();

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
      <section className="relative h-screen overflow-hidden bg-white-100">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${image12})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-20 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-black-500"></div>
                <span className="text-white-500 uppercase tracking-wider text-sm font-bold">Cultural Center of Excellence</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-bold leading-none mb-4">
                <span className="text-black-500 block transform hover:scale-105 transition-transform duration-300">
                  {t('home.hero.title')}
                </span>
              </h1>
              <div className="bg-white/50 p-4 rounded-lg inline-block">
                <p className="text-2xl md:text-3xl font-semibold text-white-500 mt-8 mb-10 max-w-2xl leading-relaxed shadow-lg">
                  Travel to the heart of Haiti's spiritual heritage through our cultural education sanctuary.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => navigate('/museum')}
                  className="group btn-primary flex items-center justify-center"
                >
                  {t('home.hero.exploreButton')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/support')}
                  className="group bg-black-500 hover:bg-black-400 text-white-100 border-2 border-black-500 px-8 py-3 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  {t('home.hero.supportButton')}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="text-center px-6 py-4 bg-white-200/80 backdrop-blur-sm rounded-lg border border-black-200">
            <p className="text-black-500 text-2xl font-bold">200+</p>
            <p className="text-black-300 text-sm">Artifacts</p>
          </div>
          <div className="text-center px-6 py-4 bg-white-200/80 backdrop-blur-sm rounded-lg border border-black-200">
            <p className="text-black-500 text-2xl font-bold">50+</p>
            <p className="text-black-300 text-sm">Events</p>
          </div>
          <div className="text-center px-6 py-4 bg-white-200/80 backdrop-blur-sm rounded-lg border border-black-200">
            <p className="text-black-500 text-2xl font-bold">1000+</p>
            <p className="text-black-300 text-sm">Visitors</p>
          </div>
        </div>
      </section>

      {/* Featured Exhibition with Animated Elements */}
      <section className="py-32 bg-white-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white-300 rounded-full">
                <Star className="h-5 w-5 text-black-500" />
                <span className="text-black-500 font-semibold">{t('home.featured.badge')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black-500 leading-tight">
                {t('home.featured.title')}
              </h2>
              <p className="text-black-300 text-xl leading-relaxed">
                {t('home.featured.description')}
              </p>
              <div className="flex items-center gap-12">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-black-300 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white-100 p-6 rounded-lg border border-black-200">
                    <p className="text-black-500 text-3xl font-bold">{t('home.featured.period')}</p>
                    <p className="text-black-300">{t('home.featured.period')}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-black-300 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-white-100 p-6 rounded-lg border border-black-200">
                    <p className="text-black-500 text-3xl font-bold">{t('home.featured.location')}</p>
                    <p className="text-black-300">{t('home.featured.location')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-black-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img 
                  src="https://i.imgur.com/ETf4619.png"
                  alt="Sacred artifacts"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition duration-300"
                />
                <div className="absolute -bottom-8 -left-8 bg-white-200 p-8 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold text-black-500">200+</p>
                  <p className="text-black-300">Artifacts on Display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArtifactsCarousel /> 

      {/* Cultural Programs with Hover Effects */}
      <section className="py-32 bg-gradient-to-b from-black to-red-950 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiM5MjAwMDAiIG9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black-500 mb-8">
              {t('home.culturalPrograms.title')}
            </h2>
            <p className="text-black-300 text-xl">
              Immerse yourself in our diverse range of programs designed to preserve and share the rich heritage of Haitian Vodou. Access, conservation, and promotion of heritage and culture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                key: 'workshops',
                image: "https://media.istockphoto.com/id/156823289/vector/papa-legba-for-voodoo.jpg?s=612x612&w=0&k=20&c=oXaAN9KRm4410wS-i6tqDh2pT0tthgQZRNjENd9Ou6w=",
                icon: Calendar
              },
              {
                key: 'events',
                image: "https://i.guim.co.uk/img/media/720f564a9ecf5009a8029ac895b7fef271d71ca5/0_70_2500_1500/master/2500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d664e1550e7b5a83b781729994e3e258",
                icon: Users
              },
              {
                key: 'research',
                image: image3,
                icon: Star
              }
            ].map((program) => (
              <div key={program.key} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-black-200 to-black-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative h-full bg-white-200 rounded-2xl overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={program.image}
                      alt={t(`home.culturalPrograms.programs.${program.key}.title`)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <program.icon className="h-8 w-8 text-black-500 mb-4" />
                    <h3 className="text-2xl font-bold text-black-500 mb-3">
                      {t(`home.culturalPrograms.programs.${program.key}.title`)}
                    </h3>
                    <p className="text-black-300">
                      {t(`home.culturalPrograms.programs.${program.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Gradient Animation */}
      <section className="py-32 bg-white-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-black-200 via-black-300 to-black-200 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300 animate-gradient-x"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white-100">
              <div className="absolute inset-0 bg-white-200/30"></div>
              <div className="relative px-8 py-20 md:px-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-black-500 mb-8 leading-tight">
                  {t('home.cta.title')}
                </h2>
                <p className="text-black-300 text-xl max-w-2xl mx-auto mb-12">
                  {t('home.cta.description')}
                </p>
                <button 
                  onClick={() => navigate('/support')} 
                  className="group bg-black-500 text-white-100 px-12 py-4 rounded-lg hover:bg-black-400 transition duration-300 font-semibold text-lg flex items-center mx-auto"
                >
                  {t('home.cta.button')}
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
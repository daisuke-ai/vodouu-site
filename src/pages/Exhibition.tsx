import React, { useEffect, useState } from 'react';
import ExhibitionHero from '../components/exhibition/ExhibitionHero';
import FeaturedExhibits from '../components/exhibition/FeaturedExhibits';
import ExhibitionPreview from '../components/exhibition/ExhibitionPreview';

const Exhibition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="pt-16">
      <ExhibitionHero scrollY={scrollY} />
      <FeaturedExhibits />
      <ExhibitionPreview />
    </main>
  );
};

export default Exhibition;
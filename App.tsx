import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrawberrySection from './components/StrawberrySection';
import GrapeSection from './components/GrapeSection';
import FlavorSelector from './components/FlavorSelector';
import LifestyleSection from './components/LifestyleSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StrawberrySection />
        <GrapeSection />
        <FlavorSelector />
        <LifestyleSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, ChevronRight, Menu as MenuIcon, X, Award, Calendar } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Clean Unsplash image links for Pyin Oo Lwin vibes
  const slides = [
    { 
      url: "https://images.unsplash.com/photo-1582512398402-984e4f8ec8a1?auto=format&fit=crop&q=80&w=2000", 
      subtitle: "The pride of Maymyo, blooming in every cup." 
    },
    { 
      url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=2000", 
      subtitle: "A timeless landmark in the heart of our city." 
    },
    { 
      url: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&q=80&w=2000", 
      subtitle: "Exploring the sacred depths of the Highlands." 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amber-800 p-2 rounded-lg">
              <Coffee className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-800 uppercase">Barista Khaing</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-amber-800 transition">Home</a>
            <a href="#locations" className="hover:text-amber-800 transition">Locations</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.url} className="w-full h-full object-cover" alt="Pyin Oo Lwin Landscape" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">
                A Taste of the Highlands
              </h1>
              <p className="text-xl md:text-2xl text-white italic drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-24 px-4 bg-stone-900 text-white text-center">
        <h2 className="text-4xl font-serif font-bold mb-12">Our Locations</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Central Branch <Award className="text-amber-500" size={20} />
            </h3>
            <p className="text-stone-300 flex items-center gap-2 mb-2">
              <MapPin size={18} /> Near Circular Road, Pyin Oo Lwin
            </p>
            <p className="text-stone-300 flex items-center gap-2">
              <Clock size={18} /> 8:00 AM – 6:00 PM
            </p>
          </div>
          <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Ye Nge Branch
            </h3>
            <p className="text-stone-300 flex items-center gap-2 mb-2">
              <MapPin size={18} /> Ye Nge Area, Pyin Oo Lwin
            </p>
            <p className="text-stone-300 flex items-center gap-2">
              <Clock size={18} /> 8:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-stone-500 bg-white border-t border-stone-200">
        <p className="text-sm">© 2026 Barista Khaing. Designed for Pyin Oo Lwin's best cafe.</p>
      </footer>
    </div>
  );
};

export default App;

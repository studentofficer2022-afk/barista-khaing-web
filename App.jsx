

import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Clock, ChevronRight, Menu as MenuIcon, X, Award, Calendar } from 'lucide-react';

const App = () => {
const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
{ url: "https://www.google.com/search?q=https://images.unsplash.com/photo-1582512398402-984e4f8ec8a1%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2000", subtitle: "The pride of Maymyo, blooming in every cup." },
{ url: "https://www.google.com/search?q=https://images.unsplash.com/photo-1508672019048-805c876b67e2%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2000", subtitle: "A timeless landmark in the heart of our city." },
{ url: "https://www.google.com/search?q=https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2000", subtitle: "Exploring the sacred depths of the Highlands." }
];

useEffect(() => {
const timer = setInterval(() => {
setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
}, 5000);
return () => clearInterval(timer);
}, [slides.length]);

return (
<div className="min-h-screen bg-stone-50 font-sans text-stone-900 scroll-smooth">
<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="bg-amber-800 p-2 rounded-lg"><Coffee className="text-white" size={24} /></div>
<span className="text-xl font-bold tracking-tight text-stone-800 uppercase">Barista Khaing</span>
</div>
</div>
</nav>

  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {slides.map((slide, index) => (
      <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img src={slide.url} className="w-full h-full object-cover" alt="Pyin Oo Lwin" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">A Taste of the Highlands</h1>
          <p className="text-xl text-white italic">{slide.subtitle}</p>
        </div>
      </div>
    ))}
  </section>

  <section className="py-24 px-4 bg-stone-900 text-white text-center">
    <h2 className="text-4xl font-serif font-bold mb-12">Our Locations</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
      <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
        <h3 className="text-2xl font-bold mb-4">Central Branch</h3>
        <p className="text-stone-300">Near Circular Road, Pyin Oo Lwin</p>
      </div>
      <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
        <h3 className="text-2xl font-bold mb-4">Ye Nge Branch</h3>
        <p className="text-stone-300">Ye Nge Area, Pyin Oo Lwin</p>
      </div>
    </div>
  </section>

  <footer className="py-12 text-center text-stone-500 bg-white border-t border-stone-200">
    <p>© 2026 Barista Khaing. Designed for Pyin Oo Lwin's best cafe.</p>
  </footer>
</div>

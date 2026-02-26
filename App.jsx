import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  Award,
  Users,
  Star,
  Calendar,
  Send,
  CheckCircle,
  ChevronLeft
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [formStatus, setFormStatus] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    },
    {
      url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=2000",
      subtitle: "Freshly harvested from our local plantations."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const menuItems = [
    { id: 1, name: 'Signature Espresso', price: '3,500 MMK', category: 'Coffee', desc: 'Rich, full-bodied blend roasted in-house.' },
    { id: 2, name: 'Shan Hills Drip', price: '4,000 MMK', category: 'Coffee', desc: 'Single origin beans from local Shan plantations.' },
    { id: 3, name: 'Matcha Latte', price: '4,500 MMK', category: 'Tea', desc: 'Premium green tea with silky steamed milk.' },
    { id: 4, name: 'Classic Iced Coffee', price: '3,000 MMK', category: 'Cold', desc: 'Perfect for the sunny Pyin Oo Lwin afternoons.' },
    { id: 5, name: 'Butter Croissant', price: '2,500 MMK', category: 'Bakery', desc: 'Flaky, buttery, and baked fresh every morning.' },
    { id: 6, name: 'Avocado Toast', price: '5,500 MMK', category: 'Bakery', desc: 'Local avocados on sourdough with chili flakes.' },
    { id: 7, name: 'Strawberry Espresso Tonic', price: '5,000 MMK', category: 'Cold', desc: 'Seasonal specialty using local Pyin Oo Lwin strawberries.' },
  ];

  const categories = ['All', 'Coffee', 'Tea', 'Cold', 'Bakery'];
  const filteredMenu = activeTab === 'All' ? menuItems : menuItems.filter(item => item.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 scroll-smooth">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-amber-800 p-2 rounded-lg">
                <Coffee className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-800 uppercase">Barista Khaing</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-amber-800 transition">Home</a>
              <a href="#menu" className="hover:text-amber-800 transition">Menu</a>
              <a href="#reservations" className="hover:text-amber-800 transition">Book Table</a>
              <a href="#locations" className="hover:text-amber-800 transition">Locations</a>
              <a href="#contact" className="bg-amber-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition">Visit Us</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.url} className="w-full h-full object-cover transform scale-100 transition-transform duration-[5000ms] ease-linear" style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)' }} alt="Highlands" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-2xl">A Taste of the Highlands</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light text-white drop-shadow-lg">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#menu" className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition flex items-center justify-center gap-2 shadow-lg">View Menu <ChevronRight size={20} /></a>
                <a href="#reservations" className="bg-amber-800 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-900 transition flex items-center justify-center gap-2 shadow-lg">Book a Table <Calendar size={20} /></a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="menu" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-amber-800 font-bold tracking-widest uppercase text-sm mb-4">Fresh Daily</h2>
            <h3 className="text-4xl font-serif font-bold mb-8">The Selection</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveTab(cat)} className={`px-6 py-2 rounded-full border transition ${activeTab === cat ? 'bg-amber-800 text-white border-amber-800 shadow-md' : 'bg-transparent text-stone-500 border-stone-200 hover:border-amber-800'}`}>
                  {cat}
                </button>
              ))}
            </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
            {filteredMenu.map(item => (
              <div key={item.id} className="flex justify-between items-start border-b border-stone-100 pb-6 group">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-stone-800 group-hover:text-amber-800 transition">{item.name}</h4>
                  <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                </div>
                <span className="font-serif font-bold text-amber-900 ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="py-24 px-4 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">Central Branch <Award className="text-amber-500" size={20} /></h3>
              <p className="text-stone-300 mb-2 flex items-center gap-2"><MapPin size={18} /> Near Circular Road, Pyin Oo Lwin</p>
              <p className="text-stone-300 mb-8 flex items-center gap-2"><Clock size={18} /> Daily: 8:00 AM – 6:00 PM</p>
              <button className="w-full bg-stone-700 py-3 rounded-xl font-bold">Directions</button>
            </div>
            <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
              <h3 className="text-2xl font-bold mb-4">Ye Nge Branch</h3>
              <p className="text-stone-300 mb-2 flex items-center gap-2"><MapPin size={18} /> Ye Nge Area, Pyin Oo Lwin</p>
              <p className="text-stone-300 mb-8 flex items-center gap-2"><Clock size={18} /> Daily: 8:00 AM – 8:00 PM</p>
              <button className="w-full bg-stone-700 py-3 rounded-xl font-bold">Directions</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-stone-200 py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-amber-800 p-1.5 rounded-md"><Coffee className="text-white" size={18} /></div>
            <span className="font-bold uppercase tracking-widest text-stone-800">Barista Khaing</span>
          </div>
          <p className="text-stone-500 text-sm">© 2026 Barista Khaing. Designed for Pyin Oo Lwin's best cafe.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

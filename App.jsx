import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Award, 
  Calendar, 
  Star, 
  Send, 
  CheckCircle,
  Facebook,
  Instagram
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [formStatus, setFormStatus] = useState(null);
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

  const menuItems = [
    { id: 1, name: 'Signature Espresso', price: '3,500 MMK', category: 'Coffee', desc: 'Rich, full-bodied blend roasted in-house.' },
    { id: 2, name: 'Shan Hills Drip', price: '4,000 MMK', category: 'Coffee', desc: 'Single origin beans from local Shan plantations.' },
    { id: 3, name: 'Matcha Latte', price: '4,500 MMK', category: 'Tea', desc: 'Premium green tea with silky steamed milk.' },
    { id: 4, name: 'Classic Iced Coffee', price: '3,000 MMK', category: 'Cold', desc: 'Perfect for the sunny Pyin Oo Lwin afternoons.' },
    { id: 5, name: 'Butter Croissant', price: '2,500 MMK', category: 'Bakery', desc: 'Flaky, buttery, and baked fresh every morning.' },
    { id: 6, name: 'Strawberry Espresso Tonic', price: '5,000 MMK', category: 'Cold', desc: 'Seasonal specialty using local Pyin Oo Lwin strawberries.' },
  ];

  const reviews = [
    { id: 1, name: "Thiri Kyaw", rating: 5, comment: "Best coffee in town! The atmosphere is so peaceful, perfect for studying.", date: "2 days ago" },
    { id: 2, name: "Mark Wilson", rating: 5, comment: "Authentic Shan beans. Their drip coffee is a must-try for any traveler.", date: "1 week ago" },
    { id: 3, name: "Aung Myo", rating: 4, comment: "Love the Ye Nge branch for late night coffee. Very friendly staff.", date: "2 weeks ago" }
  ];

  const categories = ['All', 'Coffee', 'Tea', 'Cold', 'Bakery'];

  const filteredMenu = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

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
            <a href="#menu" className="hover:text-amber-800 transition">Menu</a>
            <a href="#reservations" className="hover:text-amber-800 transition">Reservations</a>
            <a href="#locations" className="hover:text-amber-800 transition">Locations</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 py-6 space-y-4 shadow-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg px-4 py-2 hover:bg-stone-50">Home</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block text-lg px-4 py-2 hover:bg-stone-50">Menu</a>
            <a href="#reservations" onClick={() => setIsMenuOpen(false)} className="block text-lg px-4 py-2 hover:bg-stone-50">Reservations</a>
            <a href="#locations" onClick={() => setIsMenuOpen(false)} className="block text-lg px-4 py-2 hover:bg-stone-50">Locations</a>
          </div>
        )}
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
              <p className="text-xl md:text-2xl text-white italic drop-shadow-md mb-8">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#menu" className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition flex items-center justify-center gap-2">
                  View Menu <ChevronRight size={20} />
                </a>
                <a href="#reservations" className="bg-amber-800 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-900 transition flex items-center justify-center gap-2">
                  Book a Table <Calendar size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-amber-800 font-bold tracking-widest uppercase text-sm mb-4">Fresh Daily</h2>
            <h3 className="text-4xl font-serif font-bold mb-4">The Selection</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full border transition ${
                    activeTab === cat 
                      ? 'bg-amber-800 text-white border-amber-800' 
                      : 'bg-transparent text-stone-500 border-stone-200 hover:border-amber-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {filteredMenu.map(item => (
              <div key={item.id} className="flex justify-between items-start border-b border-stone-100 pb-6">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-stone-800">{item.name}</h4>
                  <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
                </div>
                <span className="font-serif font-bold text-amber-900 ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="py-24 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold mb-4">Plan Your Visit</h3>
            <p className="text-stone-600">Reserve a table at your favorite branch.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-amber-800" required />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-amber-800" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="date" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-amber-800" required />
              <select className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-amber-800">
                <option>Central Branch</option>
                <option>Ye Nge Branch</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-amber-800 text-white font-bold py-4 rounded-2xl hover:bg-amber-900 transition flex items-center justify-center gap-2">
              Confirm Booking <Send size={18} />
            </button>
            {formStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100 justify-center">
                <CheckCircle size={20} />
                <span>Reservation sent! We will call you to confirm.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Guest Feedback</h2>
            <div className="flex justify-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-stone-500">4.9/5 stars based on local reviews</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="italic text-stone-700 mb-6 font-serif">"{review.comment}"</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-stone-900">— {review.name}</span>
                  <span className="text-stone-400">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <footer className="py-12 text-center text-stone-500 bg-white border-t border-stone-200 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-amber-800 p-1.5 rounded-md">
              <Coffee className="text-white" size={18} />
            </div>
            <span className="font-bold uppercase tracking-widest text-stone-800">Barista Khaing</span>
          </div>
          <p className="text-sm">© 2026 Barista Khaing. Designed for Pyin Oo Lwin's best cafe.</p>
          <div className="flex gap-4">
            <Facebook className="hover:text-amber-800 cursor-pointer" size={20} />
            <Instagram className="hover:text-amber-800 cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

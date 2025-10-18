import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Modern Informatikai Megoldások',
    subtitle: 'Üdvözöljük az Eu-Tech Informatika Kft weboldalán!',
    description: 'Célunk, hogy ügyfeleink számára a legjobb és legmegfizethetőbb szolgáltatásokat nyújtsuk.',
    imageUrl: '/images/hero-modern-tech.jpg',
    ctaText: 'Kérjen árajánlatot',
    ctaLink: '/contact'
  },
  {
    id: 2,
    title: 'Professzionális Rendszerüzemeltetés',
    subtitle: 'Megbízható IT infrastruktúra',
    description: 'Gondoskodunk rendszerei zökkenőmentes működéséről, hogy Ön a vállalkozására koncentrálhasson.',
    imageUrl: '/images/hero-server-room.jpg',
    ctaText: 'Szolgáltatásaink',
    ctaLink: '/about'
  },
  {
    id: 3,
    title: 'Szakértő Számítógép Szerviz',
    subtitle: 'Gyors és hatékony javítás',
    description: 'Problémája van a számítógépével? Szakértő csapatunk gyorsan megoldja!',
    imageUrl: '/images/hero-computer-repair.jpg',
    ctaText: 'Kapcsolat',
    ctaLink: '/contact'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [current]);
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={slide.imageUrl} 
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
            style={{
              transform: index === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out'
            }}
          />
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                <h2 
                  className={`text-sm md:text-base text-blue-500 font-medium mb-2 ${
                    index === current ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: '0.1s' }}
                >
                  {slide.subtitle}
                </h2>
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${
                    index === current ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: '0.2s' }}
                >
                  {slide.title}
                </h1>
                <p 
                  className={`text-lg text-gray-300 mb-8 ${
                    index === current ? 'animate-slide-up' : ''
                  }`}
                  style={{ animationDelay: '0.3s' }}
                >
                  {slide.description}
                </p>
                <div 
                  className={`${index === current ? 'animate-slide-up' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <Link 
                    to={slide.ctaLink} 
                    className="btn-primary mr-4"
                  >
                    {slide.ctaText}
                  </Link>
                  <Link 
                    to="/about" 
                    className="btn-secondary"
                  >
                    Tudj meg többet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrent(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-blue-500 w-10' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
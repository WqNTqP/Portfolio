import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-600 to-blue-700'} text-white py-20`}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section" ref={heroRef}>
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <img
              src="/profile.jpg"
              alt="Kim Charles A. Emping"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          Kim Charles A. Emping
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-gray-300 animate-fade-in-up font-medium" style={{ animationDelay: '0.4s' }}>
          Bachelor of Science in Information Technology | Software Developer
        </p>

        <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-50 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Passionate about building innovative web applications and database systems.
          Currently interning at PhilHealth Region XI with expertise in PHP, JavaScript, Python, and MySQL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="btn-hover bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-hover border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

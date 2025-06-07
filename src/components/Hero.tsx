import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const [typedText, setTypedText] = useState('');
  
  const fullText = "I build modern websites that work.";

  useEffect(() => {
    if (inView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView]);

  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
          
          // Hide watermark after initialization
          setTimeout(() => {
            const watermarkElements = document.querySelectorAll(
              '[data-us-project] a[href*="unicornstudio"], ' +
              '[data-us-project] .us-watermark, ' +
              '[data-us-project] .unicorn-watermark, ' +
              '[data-us-project] .us-logo, ' +
              '[data-us-project] .us-branding'
            );
            watermarkElements.forEach(el => {
              (el as HTMLElement).style.display = 'none';
            });
          }, 1000);
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* UnicornStudio Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      >
        <div 
          data-us-project="PrBsX7i7Wj5IEovQMYbA" 
          style={{ 
            width: '100%', 
            height: '100%',
            minWidth: '1440px',
            minHeight: '900px'
          }}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" style={{ zIndex: 1 }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Aman R Saini
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-white mb-8 h-12">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional freelance web developer specializing in creating responsive, 
            visually appealing, and user-friendly websites that help businesses grow online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#projects"
              className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white/30 flex items-center gap-2"
            >
              View My Work
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-gray-50 overflow-hidden pt-16">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Modern Greenhouse Facility"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-tm-green font-bold tracking-wider uppercase text-sm">
            Maximum Yield, Simplified.
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-tm-dark leading-[1.05]">
            Cultivate Your <br /> Perfect Future.
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-800 pt-2">
            Achieve Precision. Automate Everything.
          </p>
          <p className="text-base text-gray-600 md:pr-12 leading-relaxed">
            We believe that professional cultivation should be defined by precision and peace of mind. 
            Achieving maximum yield requires consistent, finely-tuned climate and nutrient delivery. 
            TrolMaster delivers the performance and reliability you expect, transforming complex technical 
            functions into seamless operational efficiency.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-tm-dark text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2 group shadow-lg">
              Explore Systems
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 text-gray-800 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-tm-dark hover:bg-white transition-all bg-white/50 backdrop-blur-sm">
              Watch Video
            </button>
          </div>
        </div>

        {/* Hero Product Visual */}
        <div className="hidden md:flex justify-center items-center fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-lg">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-tm-green rounded-full filter blur-[100px] opacity-15 animate-pulse"></div>
                <img 
                    src="https://picsum.photos/600/600?random=99" 
                    alt="TrolMaster Controller Ecosystem" 
                    className="relative w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
            </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hidden md:block">
        <span className="text-xs uppercase tracking-widest opacity-60">Scroll to Explore</span>
      </div>
    </section>
  );
};
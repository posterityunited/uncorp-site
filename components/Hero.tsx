
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
         <span className="text-[40vw] font-black leading-none select-none">UC</span>
      </div>

      <div className="z-10 max-w-5xl">
        <div className="mb-8 inline-block brutalist-border p-4 bg-white text-black font-black text-6xl md:text-8xl transform -rotate-1">
          UNCORP.
        </div>
        
        <h1 className="text-2xl md:text-4xl font-black mb-12 tracking-tight uppercase leading-none">
          Not maximizing <span className="text-red-600">shareholder values.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-medium mb-12 leading-relaxed">
          The corporate machine is broken. We are here to dismantle the philosophy that puts capital before conscience. 
          A movement for the rest of us.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#manifesto" className="w-full md:w-auto px-10 py-4 bg-white text-black font-black text-lg hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 uppercase">
            Join the Uprising
          </a>
          <button className="w-full md:w-auto px-10 py-4 border-2 border-white text-white font-black text-lg hover:bg-white hover:text-black transition-all uppercase">
            Read the Charter
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

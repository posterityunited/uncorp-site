
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">
          UC
        </div>
        <span className="font-black text-xl tracking-tighter uppercase">uncorp</span>
      </div>
      
      <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest">
        <a href="#manifesto" className="hover:text-red-500 transition-colors">Manifesto</a>
        <a href="#principles" className="hover:text-red-500 transition-colors">Principles</a>
        <Link to="/deploy" className="text-red-600 hover:text-white border border-red-600 hover:bg-red-600 px-3 py-1 transition-all">Launch Guide</Link>
      </div>

      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

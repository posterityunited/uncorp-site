
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t-2 border-white/10 px-6 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center space-x-3 opacity-50">
          <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center font-black text-[8px]">
            UC
          </div>
          <span className="font-black text-sm tracking-tighter uppercase">uncorp</span>
        </div>
        
        <div className="mono text-xs text-neutral-600 uppercase tracking-widest text-center">
          &copy; {new Date().getFullYear()} uncorp. No rights reserved. Distributed under Creative Commons.
        </div>

        <div className="flex gap-6 text-neutral-500 text-sm font-bold uppercase">
          <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Github</a>
        </div>
      </div>
      <div className="text-center mt-8 opacity-20 mono text-[10px] uppercase">
        Built to outlast the systems that seek to contain us.
      </div>
    </footer>
  );
};

export default Footer;

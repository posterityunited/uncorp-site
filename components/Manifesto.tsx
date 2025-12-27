
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-neutral-900 px-6 border-y-2 border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-red-600 flex-grow"></div>
          <h2 className="text-red-600 font-black tracking-widest uppercase text-sm">Our Manifesto</h2>
          <div className="h-px bg-red-600 flex-grow"></div>
        </div>

        <div className="space-y-12 text-2xl md:text-4xl font-bold leading-tight">
          <p>
            For too long, the boardrooms of <span className="line-through decoration-red-600 decoration-4">Corporate America</span> have prioritized short-term gains over long-term humanity.
          </p>
          <p className="text-neutral-500">
            We reject the notion that a company's only duty is to its investors. 
          </p>
          <p>
            We propose a new model: <span className="bg-white text-black px-2">Un-doing the corporate hierarchy.</span> Prioritizing workers, community, and ecological balance.
          </p>
          <div className="p-8 border-l-4 border-red-600 bg-black/50 mono text-lg font-normal text-neutral-400">
            <p className="mb-4">SYSTEM_STATUS: CORRUPT</p>
            <p className="mb-4">MISSION: REDEFINING_VALUE</p>
            <p>ACTION: [IN_PROGRESS]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

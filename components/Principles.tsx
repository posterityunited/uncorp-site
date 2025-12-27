
import React from 'react';

const principles = [
  {
    title: "Zero Waste of Soul",
    desc: "Work should empower the individual, not drain their humanity for a quarterly report."
  },
  {
    title: "Radical Transparency",
    desc: "No hidden agendas. No back-room deals. Every decision is open for collective scrutiny."
  },
  {
    title: "Community Equity",
    desc: "We measure success by the health of our surroundings, not the weight of our wallets."
  },
  {
    title: "Circular Responsibility",
    desc: "The cost of production includes the cost of restoration. No externalized damages."
  },
  {
    title: "Flat Intelligence",
    desc: "Dismantling top-down structures in favor of horizontal, collaborative power."
  },
  {
    title: "Anti-Exponentialism",
    desc: "Infinite growth on a finite planet is a delusion. We aim for stability and health."
  }
];

const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase italic">
          New Rules.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {principles.map((p, i) => (
            <div key={i} className="group border-2 border-white/10 p-10 hover:bg-white hover:text-black transition-all cursor-default">
              <span className="mono text-red-600 group-hover:text-red-600 mb-6 block text-sm font-bold tracking-widest uppercase">
                Directive 0{i + 1}
              </span>
              <h3 className="text-3xl font-black mb-6 uppercase leading-none">{p.title}</h3>
              <p className="text-neutral-400 group-hover:text-black font-medium leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 border-4 border-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-3xl font-black uppercase mb-2">Join the Resistance</h4>
            <p className="text-neutral-400">Get updates on our workshops and direct action events.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR_EMAIL@RESISTANCE.COM" 
              className="bg-neutral-900 border-2 border-white px-6 py-4 mono text-white focus:outline-none focus:border-red-600 w-full md:w-80"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 uppercase transition-all">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;

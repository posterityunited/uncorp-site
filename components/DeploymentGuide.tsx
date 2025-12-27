
import React from 'react';
import { Link } from 'react-router-dom';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8 text-white selection:bg-red-600">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-red-600 mb-12 hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resistance
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
          Going Live <span className="text-red-600">& Free.</span>
        </h1>
        
        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
          You own <span className="text-white italic">un-corp.org</span>. Here is how you host this React application for $0/month forever using professional-grade tools.
        </p>

        <div className="space-y-16">
          <section className="border-l-4 border-white pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4">Step 1: Push to GitHub</h2>
            <p className="text-neutral-400 mb-4">
              GitHub is the world's largest code vault. It provides free hosting for static sites via GitHub Pages or direct integration with cloud providers.
            </p>
            <div className="bg-neutral-900 p-4 mono text-sm rounded">
              1. Create a free account at <a href="https://github.com" className="text-blue-400 underline">github.com</a><br/>
              2. Create a "New Repository" named <span className="text-red-500">uncorp-site</span>.<br/>
              3. Upload these files to that repository.
            </div>
          </section>

          <section className="border-l-4 border-red-600 pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4">Step 2: Connect to Vercel (Recommended)</h2>
            <p className="text-neutral-400 mb-4">
              Vercel offers the best performance for React apps. Their free tier is massive and includes global CDNs.
            </p>
            <div className="bg-neutral-900 p-4 mono text-sm rounded">
              1. Sign up at <a href="https://vercel.com" className="text-blue-400 underline">vercel.com</a> using your GitHub account.<br/>
              2. Click "Add New" > "Project".<br/>
              3. Select your <span className="text-red-500">uncorp-site</span> repo.<br/>
              4. Click "Deploy". Your site is now live on a .vercel.app subdomain!
            </div>
          </section>

          <section className="border-l-4 border-white pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4">Step 3: Connect Your Domain</h2>
            <p className="text-neutral-400 mb-4">
              Now link <span className="text-white">www.un-corp.org</span> to your Vercel deployment.
            </p>
            <div className="bg-neutral-900 p-4 mono text-sm rounded">
              1. In Vercel Project Settings, go to <span className="font-bold uppercase">Domains</span>.<br/>
              2. Add <span className="text-red-500">un-corp.org</span>.<br/>
              3. Vercel will give you a "DNS Record" (typically an A record or CNAME).<br/>
              4. Go to where you bought your domain (e.g. GoDaddy, Namecheap) and paste that value in the DNS settings.<br/>
              5. Wait 5-10 minutes. <span className="text-green-500 font-bold">SYSTEM ACTIVE.</span>
            </div>
          </section>

          <section className="bg-red-600/10 p-8 border-2 border-red-600 italic">
            <p className="text-lg">
              "Technology is the weapon of the revolution if we use the tools they built against the walls they raised."
            </p>
          </section>
        </div>
        
        <div className="mt-24 text-center">
            <Link to="/" className="bg-white text-black px-12 py-6 font-black uppercase hover:bg-red-600 hover:text-white transition-all">
                The Revolution Starts Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;

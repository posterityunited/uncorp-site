
import React from 'react';
import { Link } from 'react-router-dom';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8 text-white selection:bg-red-600">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-red-600 mb-12 hover:underline font-black uppercase tracking-widest text-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resistance
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
          Launch <span className="text-red-600">Manual.</span>
        </h1>
        
        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
          You have the vision. You have the domain. Now, let's put the code into the wild. Here is the easiest way to do it, step-by-step.
        </p>

        <div className="space-y-16">
          {/* Step 0: The Prep */}
          <section className="border-l-4 border-white pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-white text-black px-2 py-1 text-sm">00</span> 
              Prepare your files
            </h2>
            <p className="text-neutral-400 mb-6">
              Before uploading, you need these files on your actual computer.
            </p>
            <div className="bg-neutral-900 p-6 mono text-sm rounded border border-white/10">
              <ol className="list-decimal list-inside space-y-4">
                <li>Create a folder on your Desktop named <span className="text-red-500 font-bold">uncorp-site</span>.</li>
                <li>Inside that folder, create another folder named <span className="text-red-500 font-bold">components</span>.</li>
                <li>Copy the code from this editor for each file and save them into your new folder with the <span className="italic">exact</span> same names:
                  <ul className="list-disc list-inside ml-6 mt-2 text-neutral-500 space-y-1">
                    <li>index.html</li>
                    <li>index.tsx</li>
                    <li>App.tsx</li>
                    <li>metadata.json</li>
                    <li>components/Navbar.tsx</li>
                    <li>components/Hero.tsx (and so on...)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Step 1: GitHub */}
          <section className="border-l-4 border-red-600 pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-red-600 text-white px-2 py-1 text-sm">01</span> 
              The Upload (Newbie Path)
            </h2>
            <p className="text-neutral-400 mb-4">
              We will use GitHub as your "Cloud Vault."
            </p>
            <div className="bg-neutral-900 p-6 mono text-sm rounded border border-red-600/20">
              <ul className="space-y-4">
                <li>1. Go to <a href="https://github.com" target="_blank" className="text-red-500 underline">GitHub.com</a> and sign up.</li>
                <li>2. Click the <span className="font-bold">+</span> icon in the top right -> <span className="font-bold">New repository</span>.</li>
                <li>3. Name it <span className="text-white bg-neutral-800 px-1">uncorp</span> and click <span className="bg-green-700 text-white px-2">Create repository</span>.</li>
                <li>4. On the next screen, find the link that says <span className="italic text-blue-400">"uploading an existing file"</span>.</li>
                <li>5. <span className="font-bold text-white">Crucial:</span> Drag all your files (and the components folder) into the gray box on GitHub.</li>
                <li>6. Scroll down and click <span className="bg-blue-600 text-white px-3 py-1">Commit changes</span>.</li>
              </ul>
            </div>
          </section>

          {/* Step 2: Vercel */}
          <section className="border-l-4 border-white pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-white text-black px-2 py-1 text-sm">02</span> 
              Deploying to the Web
            </h2>
            <p className="text-neutral-400 mb-4">
              Vercel will take your GitHub code and turn it into a live website.
            </p>
            <div className="bg-neutral-900 p-6 mono text-sm rounded border border-white/10">
              <ul className="space-y-4">
                <li>1. Go to <a href="https://vercel.com" target="_blank" className="text-red-500 underline">Vercel.com</a> and sign up using your GitHub account.</li>
                <li>2. Click <span className="font-bold">Add New > Project</span>.</li>
                <li>3. You will see your <span className="text-white font-bold">uncorp</span> repo. Click <span className="bg-white text-black px-2">Import</span>.</li>
                <li>4. Leave all settings as default and click <span className="bg-red-600 text-white px-4 py-1">Deploy</span>.</li>
                <li>5. Wait 30 seconds. You’ll see confetti! Your site is live at <span className="text-blue-400">uncorp.vercel.app</span>.</li>
              </ul>
            </div>
          </section>

          {/* Step 3: Domain */}
          <section className="border-l-4 border-red-600 pl-8 py-4">
            <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
              <span className="bg-red-600 text-white px-2 py-1 text-sm">03</span> 
              Connecting un-corp.org
            </h2>
            <div className="bg-neutral-900 p-6 mono text-sm rounded border border-red-600/20">
              <ul className="space-y-4">
                <li>1. In your Vercel Dashboard, go to your project -> <span className="font-bold">Settings</span> -> <span className="font-bold">Domains</span>.</li>
                <li>2. Type <span className="text-white font-bold underline">un-corp.org</span> and click Add.</li>
                <li>3. Vercel will show you two things: an <span className="text-yellow-500 italic">A Record</span> or <span className="text-yellow-500 italic">CNAME</span>.</li>
                <li>4. Log in to your domain provider (where you bought the name). Find <span className="font-bold">DNS Management</span>.</li>
                <li>5. Copy the values Vercel gave you into your domain provider's DNS settings.</li>
                <li>6. It might take a few minutes (up to 24 hours) for the internet to "find" the new address.</li>
              </ul>
            </div>
          </section>

          <div className="bg-white text-black p-8 brutalist-border">
            <h3 className="text-xl font-black mb-2 uppercase">Pro-Tip for Newbies</h3>
            <p className="font-medium">
              If you ever want to change the text on your site, just edit the file on your computer, go back to your GitHub repo, and upload the new version. Vercel will automatically detect the change and update your website in seconds.
            </p>
          </div>
        </div>
        
        <div className="mt-24 text-center pb-24">
            <Link to="/" className="inline-block bg-red-600 text-white px-12 py-6 font-black uppercase hover:bg-white hover:text-black transition-all transform hover:-rotate-1">
                Return to the Frontlines
            </Link>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;

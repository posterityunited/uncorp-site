
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Principles from './components/Principles';
import DeploymentGuide from './components/DeploymentGuide';
import Footer from './components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Manifesto />
        <Principles />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/deploy" element={<DeploymentGuide />} />
      </Routes>
    </Router>
  );
};

export default App;

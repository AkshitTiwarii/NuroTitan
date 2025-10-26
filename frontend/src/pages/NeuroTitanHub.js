import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EcosystemSection from '../components/EcosystemSection';
import ResearchLabSection from '../components/ResearchLabSection';
import ProductsSection from '../components/ProductsSection';
import CommunitySection from '../components/CommunitySection';
import ContactFooter from '../components/ContactFooter';
import MouseTracker from '../components/MouseTracker';

const NeuroTitanHub = () => {
  return (
    <div className="neurotitan-hub" data-testid="neurotitan-hub" style={{ position: 'relative' }}>
      <MouseTracker />
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ResearchLabSection />
      <ProductsSection />
      <CommunitySection />
      <ContactFooter />
    </div>
  );
};

export default NeuroTitanHub;
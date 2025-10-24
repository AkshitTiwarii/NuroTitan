import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    { name: 'NeuroChat AI', description: 'Advanced conversational AI platform with multi-modal capabilities for next-gen customer experiences', category: 'SaaS Platform', status: 'Live', link: '#' },
    { name: 'VisionAPI', description: 'Enterprise-grade computer vision API for real-time image analysis and intelligent object detection', category: 'API Service', status: 'Beta', link: '#' },
    { name: 'DataForge', description: 'AI-powered data preprocessing toolkit that transforms raw data into ML-ready datasets', category: 'Open Source', status: 'Live', link: '#' },
    { name: 'ModelHub', description: 'Curated repository of production-ready pre-trained models with one-click deployment', category: 'Platform', status: 'Live', link: '#' },
    { name: 'AutoML Studio', description: 'No-code machine learning pipeline builder that democratizes AI for everyone', category: 'SaaS Platform', status: 'Coming Soon', link: '#' },
    { name: 'Neural Playground', description: 'Interactive learning environment for experimenting with neural networks in real-time', category: 'Educational', status: 'Live', link: '#' }
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block mb-6 px-6 py-2">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#808080' }}>Products</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}>Built for the<br /><span style={{ color: '#B8B8B8' }}>Future of AI</span></h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080' }}>Enterprise-grade AI tools and platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} whileHover={{ y: -8 }} className="group">
              <div className="relative h-full p-8 rounded-sm overflow-hidden transition-all duration-500" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-sm" style={{ border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.03)', color: '#B8B8B8' }}>{product.category}</span>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-sm ${product.status === 'Live' ? 'text-white' : 'text-gray-400'}`} style={{ border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.03)' }}>{product.status}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>{product.name}</h3>
                  <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080', fontSize: '15px' }}>{product.description}</p>
                  <a href={product.link} className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3" style={{ color: '#FFFFFF' }}>
                    <span>Explore</span>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

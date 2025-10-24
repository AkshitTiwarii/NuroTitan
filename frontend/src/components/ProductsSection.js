import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'NeuroChat AI',
      description: 'Advanced conversational AI platform with multi-modal capabilities for next-gen customer experiences',
      category: 'SaaS Platform',
      status: 'Live',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'VisionAPI',
      description: 'Enterprise-grade computer vision API for real-time image analysis and intelligent object detection',
      category: 'API Service',
      status: 'Beta',
      link: '#',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'DataForge',
      description: 'AI-powered data preprocessing toolkit that transforms raw data into ML-ready datasets',
      category: 'Open Source',
      status: 'Live',
      link: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'ModelHub',
      description: 'Curated repository of production-ready pre-trained models with one-click deployment',
      category: 'Platform',
      status: 'Live',
      link: '#',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'AutoML Studio',
      description: 'No-code machine learning pipeline builder that democratizes AI for everyone',
      category: 'SaaS Platform',
      status: 'Coming Soon',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'NeuralOps',
      description: 'End-to-end MLOps platform for seamless model training, deployment, and monitoring at scale',
      category: 'Enterprise',
      status: 'Beta',
      link: '#',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10B981', text: '#10B981' };
      case 'Beta': return { bg: 'rgba(251, 146, 60, 0.1)', border: '#FB923C', text: '#FB923C' };
      case 'Coming Soon': return { bg: 'rgba(0, 255, 255, 0.1)', border: '#00FFFF', text: '#00FFFF' };
      default: return { bg: 'rgba(138, 43, 226, 0.1)', border: '#8A2BE2', text: '#8A2BE2' };
    }
  };

  return (
    <section 
      ref={ref}
      className="products-section py-32 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%)' }}
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(0, 255, 255, 0.1)',
              color: '#00FFFF',
              border: '1px solid rgba(0, 255, 255, 0.3)'
            }}
          >
            <Sparkles size={16} />
            OUR PRODUCTS
          </motion.div>
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #00FFFF 0%, #8A2BE2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}
            data-testid="products-title"
          >
            Products & Tools
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Production-ready AI solutions trusted by developers and enterprises worldwide
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const statusStyle = getStatusColor(product.status);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: 'easeOut' }}
                whileHover={{ y: -10 }}
                className="product-card-new group relative p-8 rounded-3xl"
                style={{
                  background: 'rgba(20, 20, 30, 0.6)',
                  border: '1px solid rgba(138, 43, 226, 0.2)',
                  backdropFilter: 'blur(20px)'
                }}
                data-testid={`product-card-${index}`}
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.15) 0%, transparent 70%)'
                  }}
                ></div>

                <div className="relative z-10">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: '#8A2BE2', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {product.category}
                    </span>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: statusStyle.bg,
                        color: statusStyle.text,
                        border: `1px solid ${statusStyle.border}`
                      }}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 
                    className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ 
                      color: '#EAEAEA',
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed mb-8"
                    style={{ color: '#888888', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.7' }}
                  >
                    {product.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={product.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
                        color: '#0A0A0A',
                        fontFamily: 'Montserrat, sans-serif',
                        textDecoration: 'none'
                      }}
                      data-testid={`explore-btn-${index}`}
                    >
                      <ExternalLink size={16} />
                      Explore
                    </motion.a>
                    {product.status === 'Live' && (
                      <motion.a
                        href={product.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
                        style={{
                          background: 'transparent',
                          color: '#00FFFF',
                          border: '1px solid #00FFFF',
                          fontFamily: 'Montserrat, sans-serif',
                          textDecoration: 'none'
                        }}
                        data-testid={`demo-btn-${index}`}
                      >
                        <Play size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                  style={{
                    background: 'linear-gradient(90deg, #8A2BE2 0%, #00FFFF 100%)',
                    opacity: 0
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
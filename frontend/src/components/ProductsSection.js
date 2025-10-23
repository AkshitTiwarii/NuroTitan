import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'NeuroChat AI',
      description: 'Advanced conversational AI platform with multi-modal capabilities',
      category: 'SaaS',
      status: 'Live',
      link: '#'
    },
    {
      name: 'VisionAPI',
      description: 'Computer vision API for image analysis and object detection',
      category: 'API',
      status: 'Beta',
      link: '#'
    },
    {
      name: 'DataForge',
      description: 'AI-powered data preprocessing and feature engineering toolkit',
      category: 'Open Source',
      status: 'Live',
      link: '#'
    },
    {
      name: 'ModelHub',
      description: 'Repository of pre-trained models ready for deployment',
      category: 'Platform',
      status: 'Live',
      link: '#'
    },
    {
      name: 'AutoML Studio',
      description: 'Automated machine learning pipeline builder with no-code interface',
      category: 'SaaS',
      status: 'Coming Soon',
      link: '#'
    },
    {
      name: 'NeuralOps',
      description: 'MLOps platform for model training, deployment, and monitoring',
      category: 'Platform',
      status: 'Beta',
      link: '#'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#00FF00';
      case 'Beta': return '#FFA500';
      case 'Coming Soon': return '#00FFFF';
      default: return '#8A2BE2';
    }
  };

  return (
    <section 
      ref={ref}
      className="products-section py-24 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%)' }}
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00FFFF 0%, #8A2BE2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            data-testid="products-title"
          >
            Products & Tools
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Powerful AI tools and platforms built for developers and enterprises
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(138, 43, 226, 0.6)'
              }}
              className="product-card p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(138, 43, 226, 0.08)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              data-testid={`product-card-${index}`}
            >
              {/* Status Badge */}
              <div 
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: `${getStatusColor(product.status)}20`,
                  color: getStatusColor(product.status),
                  border: `1px solid ${getStatusColor(product.status)}`
                }}
              >
                {product.status}
              </div>

              {/* Category */}
              <div 
                className="inline-block px-3 py-1 rounded-md text-xs font-semibold mb-4"
                style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  color: '#00FFFF',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {product.category}
              </div>

              {/* Product Name */}
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ 
                  color: '#EAEAEA',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                {product.name}
              </h3>

              {/* Description */}
              <p 
                className="text-base mb-6 leading-relaxed"
                style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif' }}
              >
                {product.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={product.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{
                    background: 'rgba(138, 43, 226, 0.8)',
                    color: '#FFFFFF',
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
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
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
                    Try Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
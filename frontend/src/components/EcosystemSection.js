import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const domains = [
    {
      title: 'Natural Language Processing',
      shortTitle: 'NLP',
      icon: '💬',
      description: 'Advanced text understanding and generation with state-of-the-art language models',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MTI0Mjg2Mnww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Computer Vision',
      shortTitle: 'Vision',
      icon: '👁️',
      description: 'Image recognition, object detection, and visual understanding powered by deep learning',
      image: 'https://images.unsplash.com/photo-1677442135132-141348e809d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MTI0Mjg2Mnww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Reinforcement Learning',
      shortTitle: 'RL',
      icon: '🎯',
      description: 'Autonomous decision-making systems that learn through interaction and rewards',
      image: 'https://images.unsplash.com/photo-1677442135730-64f105e0ea05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MTI0Mjg2Mnww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Neural Architecture',
      shortTitle: 'Architecture',
      icon: '🏗️',
      description: 'Designing and optimizing neural network structures for maximum efficiency',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'AI Ethics & Safety',
      shortTitle: 'Ethics',
      icon: '⚖️',
      description: 'Ensuring responsible AI development with fairness, transparency, and safety',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Generative AI',
      shortTitle: 'Generative',
      icon: '🎨',
      description: 'Creating new content from text to images with advanced generative models',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc2MTI0Mjg2Mnww&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <section 
      ref={ref}
      className="ecosystem-section py-24 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%)' }}
      data-testid="ecosystem-section"
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
            data-testid="ecosystem-title"
          >
            AI Ecosystem
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore our diverse domains of AI research and development
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="domain-card relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              data-testid={`domain-card-${index}`}
            >
              <motion.div
                className="card-inner w-full h-full relative"
                animate={{ rotateY: hoveredCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front Side */}
                <div 
                  className="card-front absolute inset-0 flex flex-col items-center justify-center p-6"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: `linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(0, 255, 255, 0.1) 100%)`,
                    border: '2px solid rgba(138, 43, 226, 0.4)'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url(${domain.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-4">{domain.icon}</div>
                    <h3 
                      className="text-3xl font-bold"
                      style={{ 
                        color: '#00FFFF',
                        fontFamily: 'Space Grotesk, sans-serif',
                        textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                      }}
                    >
                      {domain.shortTitle}
                    </h3>
                  </div>

                  {/* Glow Effect */}
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: '0 0 60px rgba(0, 255, 255, 0.6) inset'
                      }}
                    ></motion.div>
                  )}
                </div>

                {/* Back Side */}
                <div 
                  className="card-back absolute inset-0 flex flex-col items-center justify-center p-6"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%)',
                    border: '2px solid rgba(0, 255, 255, 0.4)'
                  }}
                >
                  <div className="text-center">
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ 
                        color: '#8A2BE2',
                        fontFamily: 'Space Grotesk, sans-serif'
                      }}
                    >
                      {domain.title}
                    </h3>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {domain.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const domains = [
    {
      title: 'Natural Language Processing',
      shortTitle: 'NLP',
      icon: '💬',
      description: 'Transform how machines understand and generate human language with state-of-the-art models that power conversational AI, sentiment analysis, and text generation.',
      image: 'https://images.unsplash.com/photo-1673515334669-1e445e4f4c3f?w=800&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Computer Vision',
      shortTitle: 'Vision',
      icon: '👁',
      description: 'Enable machines to see and interpret the visual world through advanced image recognition, object detection, and scene understanding algorithms.',
      image: 'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=800&q=80',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Reinforcement Learning',
      shortTitle: 'RL',
      icon: '🎯',
      description: 'Build autonomous systems that learn optimal decision-making through interaction, powering robotics, game AI, and adaptive control systems.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Neural Architecture',
      shortTitle: 'Architecture',
      icon: '🏗',
      description: 'Design and optimize neural network structures that push the boundaries of efficiency and performance in deep learning systems.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800&q=80',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Ethics & Safety',
      shortTitle: 'Ethics',
      icon: '⚖️',
      description: 'Ensure responsible AI development with rigorous frameworks for fairness, transparency, accountability, and human-centered design principles.',
      image: 'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?w=800&q=80',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Generative AI',
      shortTitle: 'Generative',
      icon: '🎨',
      description: 'Unleash creativity with AI that generates novel content - from photorealistic images and videos to code, music, and beyond.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section 
      ref={ref}
      className="ecosystem-section py-32 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%)' }}
      data-testid="ecosystem-section"
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
            className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(0, 255, 255, 0.1)',
              color: '#00FFFF',
              border: '1px solid rgba(0, 255, 255, 0.3)'
            }}
          >
            EXPLORE OUR DOMAINS
          </motion.div>
          <h2 
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #00FFFF 0%, #8A2BE2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}
            data-testid="ecosystem-title"
          >
            AI Ecosystem
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore our diverse domains where cutting-edge research 
            <br className="hidden md:block" />
            meets real-world innovation
          </p>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: 'easeOut' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="domain-card-flip relative rounded-3xl cursor-pointer"
              style={{
                minHeight: '480px',
                perspective: '1000px'
              }}
              data-testid={`domain-card-${index}`}
            >
              {/* Card Inner Container for Flip */}
              <motion.div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                animate={{
                  rotateY: hoveredCard === index ? 180 : 0
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: 'rgba(20, 20, 30, 0.6)',
                    border: '1px solid rgba(138, 43, 226, 0.2)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'brightness(0.8)'
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%)'
                      }}
                    ></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 right-6 text-6xl">
                      {domain.icon}
                    </div>

                    {/* Title at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 
                        className="text-4xl font-bold mb-2"
                        style={{ 
                          color: '#00FFFF',
                          fontFamily: 'Space Grotesk, sans-serif',
                          textShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
                        }}
                      >
                        {domain.shortTitle}
                      </h3>
                      <p 
                        className="text-lg"
                        style={{ 
                          color: '#AAAAAA',
                          fontFamily: 'Montserrat, sans-serif'
                        }}
                      >
                        Hover to learn more
                      </p>
                    </div>

                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: '0 0 60px rgba(0, 255, 255, 0.3) inset',
                        borderRadius: '1.5rem'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 rounded-3xl overflow-hidden p-8 flex flex-col justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: `linear-gradient(135deg, rgba(138, 43, 226, 0.3) 0%, rgba(0, 255, 255, 0.2) 100%)`,
                    border: '2px solid rgba(0, 255, 255, 0.4)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url(${domain.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(10px)'
                    }}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-6">{domain.icon}</div>
                    
                    {/* Full Title */}
                    <h3 
                      className="text-3xl font-bold mb-4"
                      style={{ 
                        color: '#00FFFF',
                        fontFamily: 'Space Grotesk, sans-serif',
                        textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                      }}
                    >
                      {domain.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-lg leading-relaxed mb-6"
                      style={{ 
                        color: '#EAEAEA', 
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.7'
                      }}
                    >
                      {domain.description}
                    </p>

                    {/* Learn More Link */}
                    <div
                      className="flex items-center gap-2 text-base font-semibold"
                      style={{ 
                        color: '#8A2BE2',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      <span className="px-4 py-2 rounded-lg" style={{
                        background: 'rgba(138, 43, 226, 0.2)',
                        border: '1px solid rgba(138, 43, 226, 0.4)'
                      }}>
                        Learn More <ArrowRight size={16} className="inline ml-1" />
                      </span>
                    </div>
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
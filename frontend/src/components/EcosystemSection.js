import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const EcosystemSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const domains = [
    {
      title: 'Natural Language Processing',
      shortTitle: 'NLP',
      icon: '💬',
      description: 'Transform how machines understand and generate human language with state-of-the-art models that power conversational AI, sentiment analysis, and text generation.',
      image: 'https://images.unsplash.com/photo-1673515334669-1e445e4f4c3f?w=800&q=80',
    },
    {
      title: 'Computer Vision',
      shortTitle: 'Vision',
      icon: '👁',
      description: 'Enable machines to see and interpret the visual world through advanced image recognition, object detection, and scene understanding algorithms.',
      image: 'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=800&q=80',
    },
    {
      title: 'Reinforcement Learning',
      shortTitle: 'RL',
      icon: '🎯',
      description: 'Build autonomous systems that learn optimal decision-making through interaction, powering robotics, game AI, and adaptive control systems.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    },
    {
      title: 'Neural Architecture',
      shortTitle: 'Architecture',
      icon: '🏗',
      description: 'Design and optimize neural network structures that push the boundaries of efficiency and performance in deep learning systems.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800&q=80',
    },
    {
      title: 'AI Ethics & Safety',
      shortTitle: 'Ethics',
      icon: '⚖️',
      description: 'Ensure responsible AI development with rigorous frameworks for fairness, transparency, accountability, and human-centered design principles.',
      image: 'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?w=800&q=80',
    },
    {
      title: 'Generative AI',
      shortTitle: 'Generative',
      icon: '🎨',
      description: 'Unleash creativity with AI that generates novel content - from photorealistic images and videos to code, music, and beyond.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="ecosystem-section py-32 px-6 relative"
      style={{ background: '#000000' }}
      data-testid="ecosystem-section"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mb-6 px-6 py-2"
          >
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#999999', letterSpacing: '0.15em' }}>
              EXPLORE OUR DOMAINS
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}
            data-testid="ecosystem-title"
          >
            AI Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#CCCCCC', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.8' }}
          >
            Explore our diverse domains where cutting-edge research 
            meets real-world innovation
          </motion.p>
        </motion.div>

        {/* Domain Cards Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="domain-card-flip relative cursor-pointer"
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
                }}
                animate={{
                  rotateY: hoveredCard === index ? 180 : 0
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Front Side */}
                <motion.div 
                  className="absolute inset-0 rounded-sm overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                  whileHover={{
                    borderColor: 'rgba(255, 255, 255, 0.12)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <motion.img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'brightness(0.9)'
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.95) 100%)'
                      }}
                    ></div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="absolute top-6 right-6 text-5xl opacity-60"
                      initial={{ opacity: 0.6, rotate: 0 }}
                      whileHover={{ 
                        opacity: 0.8, 
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {domain.icon}
                    </motion.div>

                    {/* Title at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.h3 
                        className="text-3xl font-bold mb-2"
                        style={{ 
                          color: '#FFFFFF',
                          fontFamily: 'Space Grotesk, sans-serif',
                        }}
                        initial={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                          y: -4,
                          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                        }}
                      >
                        {domain.shortTitle}
                      </motion.h3>
                      <p 
                        className="text-base"
                        style={{ 
                          color: '#999999',
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '14px'
                        }}
                      >
                        Hover to learn more
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Back Side */}
                <motion.div 
                  className="absolute inset-0 rounded-sm overflow-hidden p-8 flex flex-col justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `url(${domain.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(10px) grayscale(1)'
                    }}
                  ></div>

                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: hoveredCard === index ? 0.3 : 0 }}
                  >
                    {/* Icon */}
                    <div className="text-5xl mb-6 opacity-80">{domain.icon}</div>
                    
                    {/* Full Title */}
                    <h3 
                      className="text-2xl font-bold mb-4"
                      style={{ 
                        color: '#FFFFFF',
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}
                    >
                      {domain.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-base leading-relaxed mb-6"
                      style={{ 
                        color: '#CCCCCC', 
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.8',
                        fontSize: '15px'
                      }}
                    >
                      {domain.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold"
                      style={{ 
                        color: '#FFFFFF',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      whileHover={{ x: 4, transition: { duration: 0.3 } }}
                    >
                      <span className="px-4 py-2 rounded-sm transition-all duration-300" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        Learn More <ArrowRight size={14} className="inline ml-1" />
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EcosystemSection;
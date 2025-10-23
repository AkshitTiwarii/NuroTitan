import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: '🔓',
      title: 'Open Source',
      description: 'Building transparent, accessible AI tools for the global developer community'
    },
    {
      icon: '🔬',
      title: 'Research',
      description: 'Pushing the boundaries of AI with cutting-edge research and innovation'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Fostering collaboration and knowledge sharing among AI enthusiasts'
    }
  ];

  return (
    <section 
      ref={ref}
      className="about-section py-24 px-6 relative"
      style={{ background: '#0A0A0A' }}
      data-testid="about-section"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(circle at top left, rgba(138, 43, 226, 0.2) 0%, transparent 50%)'
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            data-testid="about-title"
          >
            About NeuroTitan-Hub
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
            data-testid="about-description"
          >
            NeuroTitan-Hub is the digital face and parent platform of the NeuroTitan organization. 
            We serve as a gateway for presenting our vision, showcasing research, open-source projects, 
            and SaaS products while building a vibrant community hub for collaboration.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(138, 43, 226, 0.4)'
              }}
              className="pillar-card p-8 rounded-xl relative overflow-hidden"
              style={{
                background: 'rgba(138, 43, 226, 0.05)',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              data-testid={`pillar-card-${index}`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
              }}></div>

              <div className="relative z-10">
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#8A2BE2',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  {pillar.title}
                </h3>
                <p 
                  className="text-lg"
                  style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
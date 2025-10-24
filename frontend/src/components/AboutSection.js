import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Unlock, Microscope, Users } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: <Unlock size={40} />,
      title: 'Open Source',
      description: 'We believe in transparency and accessibility. Every tool we build is open for the world to use, modify, and improve.',
      stat: '50+',
      statLabel: 'Projects'
    },
    {
      icon: <Microscope size={40} />,
      title: 'Research',
      description: 'Pushing boundaries with cutting-edge AI research that challenges conventional thinking and explores new frontiers.',
      stat: '30+',
      statLabel: 'Papers'
    },
    {
      icon: <Users size={40} />,
      title: 'Community',
      description: 'A global network of developers, researchers, and AI enthusiasts collaborating to shape the future of technology.',
      stat: '500+',
      statLabel: 'Contributors'
    }
  ];

  return (
    <section 
      ref={ref}
      className="about-section py-32 px-6 relative"
      style={{ background: '#0A0A0A' }}
      data-testid="about-section"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-10" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.4) 0%, transparent 50%)'
      }}></div>

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
              background: 'rgba(138, 43, 226, 0.1)',
              color: '#8A2BE2',
              border: '1px solid rgba(138, 43, 226, 0.3)'
            }}
          >
            WHO WE ARE
          </motion.div>
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}
            data-testid="about-title"
          >
            About NeuroTitan
          </h2>
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.7' }}
            data-testid="about-description"
          >
            We're more than a platform—we're a movement. NeuroTitan serves as the digital home 
            for innovators who believe AI should be <span style={{ color: '#00FFFF', fontWeight: '600' }}>open</span>, 
            <span style={{ color: '#8A2BE2', fontWeight: '600' }}> ethical</span>, and 
            <span style={{ color: '#00BFFF', fontWeight: '600' }}> accessible to all</span>.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * (index + 1), ease: 'easeOut' }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="pillar-card-new group relative p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.05) 0%, rgba(0, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(138, 43, 226, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              data-testid={`pillar-card-${index}`}
            >
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.15) 0%, transparent 70%)'
                }}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="mb-6 inline-flex p-4 rounded-2xl"
                  style={{
                    background: 'rgba(138, 43, 226, 0.1)',
                    border: '1px solid rgba(138, 43, 226, 0.3)',
                    color: '#00FFFF'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {pillar.icon}
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-3xl font-bold mb-4"
                  style={{ 
                    color: '#EAEAEA',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base leading-relaxed mb-6"
                  style={{ color: '#888888', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.7' }}
                >
                  {pillar.description}
                </p>

                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: '#8A2BE2', fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {pillar.stat}
                  </span>
                  <span 
                    className="text-lg"
                    style={{ color: '#00FFFF', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {pillar.statLabel}
                  </span>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                style={{
                  background: 'linear-gradient(90deg, #8A2BE2 0%, #00FFFF 100%)'
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
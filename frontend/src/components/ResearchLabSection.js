import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, FileText, Users, Award } from 'lucide-react';

const ResearchLabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: <Github size={40} />, value: '50+', label: 'Open Source Projects' },
    { icon: <FileText size={40} />, value: '30+', label: 'Research Papers' },
    { icon: <Users size={40} />, value: '500+', label: 'Contributors' },
    { icon: <Award size={40} />, value: '15+', label: 'Awards' }
  ];

  return (
    <section 
      ref={ref}
      className="research-lab-section py-24 px-6 relative"
      style={{ background: '#0A0A0A' }}
      data-testid="research-lab-section"
    >
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
            data-testid="research-title"
          >
            Research Lab
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Pushing the boundaries of AI with cutting-edge research and open collaboration
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              className="stat-card p-6 rounded-xl text-center"
              style={{
                background: 'rgba(138, 43, 226, 0.1)',
                border: '1px solid rgba(138, 43, 226, 0.3)'
              }}
              data-testid={`stat-card-${index}`}
            >
              <div className="flex justify-center mb-3" style={{ color: '#00FFFF' }}>
                {stat.icon}
              </div>
              <div 
                className="text-4xl font-bold mb-2"
                style={{ 
                  color: '#8A2BE2',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm"
                style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/neurotitan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              color: '#0A0A0A',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none'
            }}
            data-testid="view-research-btn"
          >
            <Github size={24} />
            View Our Research on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchLabSection;
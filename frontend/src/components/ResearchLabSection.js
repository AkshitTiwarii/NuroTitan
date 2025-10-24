import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Users, Award } from 'lucide-react';

const ResearchLabSection = () => {
  const stats = [
    { icon: <Github size={32} strokeWidth={1.5} />, value: '50+', label: 'Open Source Projects' },
    { icon: <FileText size={32} strokeWidth={1.5} />, value: '30+', label: 'Research Papers' },
    { icon: <Users size={32} strokeWidth={1.5} />, value: '500+', label: 'Contributors' },
    { icon: <Award size={32} strokeWidth={1.5} />, value: '15+', label: 'Awards' }
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block mb-6 px-6 py-2">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#808080' }}>Research Lab</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}>Pushing the Boundaries</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080' }}>Cutting-edge research and open collaboration</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }} whileHover={{ y: -4 }} className="p-8 rounded-sm text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="flex justify-center mb-4" style={{ color: '#FFFFFF' }}>{stat.icon}</div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: '#808080', fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center">
          <motion.a href="https://github.com/neurotitan" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block px-8 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-300" style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.1)', fontFamily: 'Space Grotesk, sans-serif', textDecoration: 'none' }}>
            View on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchLabSection;

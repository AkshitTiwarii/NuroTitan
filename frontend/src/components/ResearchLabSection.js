import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, FileText, Users, Award } from 'lucide-react';
import { useRef } from 'react';

const ResearchLabSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const stats = [
    { icon: <Github size={32} strokeWidth={1.5} />, value: '50+', label: 'Open Source Projects' },
    { icon: <FileText size={32} strokeWidth={1.5} />, value: '30+', label: 'Research Papers' },
    { icon: <Users size={32} strokeWidth={1.5} />, value: '500+', label: 'Contributors' },
    { icon: <Award size={32} strokeWidth={1.5} />, value: '15+', label: 'Awards' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }} 
        />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
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
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#999999', letterSpacing: '0.15em' }}>Research Lab</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold mb-6" 
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}
          >
            Pushing the Boundaries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" 
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#CCCCCC', lineHeight: '1.8' }}
          >
            Cutting-edge research and open collaboration
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="p-8 rounded-sm text-center" 
                style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.div 
                  className="flex justify-center mb-4" 
                  style={{ color: '#FFFFFF' }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-2" 
                  style={{ color: '#FFFFFF', fontFamily: 'Space Grotesk, sans-serif' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm" style={{ color: '#999999', fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}>{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} 
          className="text-center"
        >
          <motion.a 
            href="https://github.com/NeuroTitan-Hub" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              y: -4,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }} 
            whileTap={{ scale: 0.98 }} 
            className="inline-block px-8 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-300" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              color: '#FFFFFF', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              fontFamily: 'Space Grotesk, sans-serif', 
              textDecoration: 'none' 
            }}
          >
            View on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResearchLabSection;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, MessageCircle, Users } from 'lucide-react';
import { useRef } from 'react';

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const platforms = [
    { name: 'GitHub', icon: <Github size={28} strokeWidth={1.5} />, description: 'Contribute to our open-source projects', link: 'https://github.com/NeuroTitan-Hub', members: '500+' },
    { name: 'Discord', icon: <MessageCircle size={28} strokeWidth={1.5} />, description: 'Join our developer community', link: '#', members: '1000+' },
    { name: 'Forum', icon: <Users size={28} strokeWidth={1.5} />, description: 'Discuss AI research and collaborate', link: '#', members: '750+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
            backgroundSize: '100px 100px' 
          }} 
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6">
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
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#999999', letterSpacing: '0.15em' }}>Community</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold mb-6" 
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}
          >
            Join Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" 
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#CCCCCC', lineHeight: '1.8' }}
          >
            Connect with AI enthusiasts, researchers, and developers worldwide
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {platforms.map((platform, index) => (
            <motion.a 
              key={index} 
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={cardVariants}
              className="block rounded-sm"
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                className="p-10 h-full"
                style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.div 
                  className="mb-6" 
                  style={{ color: '#FFFFFF' }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {platform.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>{platform.name}</h3>
                <p className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#AAAAAA', fontSize: '15px', lineHeight: '1.7' }}>{platform.description}</p>
                <motion.div 
                  className="text-sm font-semibold" 
                  style={{ color: '#4A4A4A', fontFamily: 'Space Grotesk, sans-serif' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {platform.members} members
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;

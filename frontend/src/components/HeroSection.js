import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
      style={{
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1a0a2e 50%, #0A0A0A 100%)'
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, rgba(138, 43, 226, 0.15) 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)'
      }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Logo/Brain */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85"
            alt="NeuroTitan AI Brain"
            className="w-64 h-64 object-cover rounded-full"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 60px rgba(0, 255, 255, 0.4))',
              border: '3px solid rgba(138, 43, 226, 0.5)'
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            data-testid="hero-logo"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 50%, #00BFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Space Grotesk, sans-serif',
            textShadow: '0 0 40px rgba(138, 43, 226, 0.5)'
          }}
          data-testid="hero-title"
        >
          NeuroTitan-Hub
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl mb-8"
          style={{
            color: '#EAEAEA',
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
          }}
          data-testid="hero-tagline"
        >
          Where Open AI Research Meets Scalable Engineering
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              color: '#0A0A0A',
              fontFamily: 'Montserrat, sans-serif',
              border: 'none'
            }}
            data-testid="explore-projects-btn"
          >
            Explore Projects
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            style={{
              background: 'transparent',
              color: '#00FFFF',
              fontFamily: 'Montserrat, sans-serif',
              border: '2px solid #00FFFF'
            }}
            data-testid="join-community-btn"
          >
            Join Community
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-cyan-400 text-sm mb-2">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
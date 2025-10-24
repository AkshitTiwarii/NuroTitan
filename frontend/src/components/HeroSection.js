import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 30% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%)'
      }}></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
      }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-sm font-semibold"
          style={{
            background: 'rgba(138, 43, 226, 0.2)',
            border: '1px solid rgba(138, 43, 226, 0.4)',
            color: '#00FFFF',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Sparkles size={16} />
          The Future of AI Research
        </motion.div>

        {/* Animated Logo/Brain */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2MTI0Mjg2N3ww&ixlib=rb-4.1.0&q=85"
              alt="NeuroTitan AI Brain"
              className="w-72 h-72 object-cover rounded-full"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 80px rgba(0, 255, 255, 0.4))',
                border: '4px solid rgba(138, 43, 226, 0.3)'
              }}
              data-testid="hero-logo"
            />
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '2px solid rgba(0, 255, 255, 0.3)',
                borderTopColor: 'rgba(0, 255, 255, 0.8)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 50%, #00BFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}
          data-testid="hero-title"
        >
          NeuroTitan
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-4xl mb-4 font-light"
          style={{
            color: '#EAEAEA',
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.01em'
          }}
          data-testid="hero-tagline"
        >
          Where Open AI Research
          <br />
          <span style={{ color: '#00FFFF' }}>Meets Scalable Engineering</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg mb-12"
          style={{ color: '#888888', fontFamily: 'Montserrat, sans-serif' }}
        >
          Building the future of artificial intelligence through open collaboration
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(138, 43, 226, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              color: '#0A0A0A',
              fontFamily: 'Montserrat, sans-serif',
              border: 'none'
            }}
            data-testid="explore-projects-btn"
          >
            <span className="relative z-10">Explore Projects</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ opacity: 0.1 }}
            ></motion.div>
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(0, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
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
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-cyan-400 text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Scroll to explore
            </div>
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
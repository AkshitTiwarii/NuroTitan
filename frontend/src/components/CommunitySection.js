import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, MessageCircle, Users, Calendar } from 'lucide-react';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const platforms = [
    {
      name: 'GitHub',
      icon: <Github size={32} />,
      description: 'Contribute to our open-source projects',
      link: 'https://github.com/neurotitan',
      members: '500+'
    },
    {
      name: 'Discord',
      icon: <MessageCircle size={32} />,
      description: 'Join our developer community',
      link: '#',
      members: '1000+'
    },
    {
      name: 'Forum',
      icon: <Users size={32} />,
      description: 'Discuss AI research and collaborate',
      link: '#',
      members: '750+'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Researcher',
      avatar: '👩‍🔬',
      quote: 'NeuroTitan has been instrumental in accelerating my research with their cutting-edge tools and collaborative community.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'ML Engineer',
      avatar: '👨‍💻',
      quote: 'The open-source projects from NeuroTitan are production-ready and well-documented. A true game-changer!'
    },
    {
      name: 'Aisha Patel',
      role: 'Data Scientist',
      avatar: '👩‍💼',
      quote: 'Being part of the NeuroTitan community has expanded my knowledge and network in the AI field tremendously.'
    }
  ];

  return (
    <section 
      ref={ref}
      className="community-section py-24 px-6 relative"
      style={{ background: '#0A0A0A' }}
      data-testid="community-section"
    >
      <div className="max-w-7xl mx-auto relative z-10">
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
            data-testid="community-title"
          >
            Join Our Community
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
          >
            Connect with AI enthusiasts, researchers, and developers worldwide
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)'
              }}
              className="platform-card p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                textDecoration: 'none'
              }}
              data-testid={`platform-card-${index}`}
            >
              <div className="flex justify-center mb-4" style={{ color: '#00FFFF' }}>
                {platform.icon}
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ 
                  color: '#EAEAEA',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                {platform.name}
              </h3>
              <p 
                className="text-base mb-3"
                style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif' }}
              >
                {platform.description}
              </p>
              <div 
                className="text-lg font-semibold"
                style={{ color: '#8A2BE2' }}
              >
                {platform.members} members
              </div>
            </motion.a>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 
            className="text-3xl font-bold text-center mb-10"
            style={{ color: '#00FFFF', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What Our Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                className="testimonial-card p-6 rounded-xl"
                style={{
                  background: 'rgba(138, 43, 226, 0.08)',
                  border: '1px solid rgba(138, 43, 226, 0.3)'
                }}
                data-testid={`testimonial-${index}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div 
                      className="font-bold text-lg"
                      style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: '#8A2BE2' }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p 
                  className="text-base italic leading-relaxed"
                  style={{ color: '#AAAAAA', fontFamily: 'Montserrat, sans-serif' }}
                >
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg" style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid rgba(0, 255, 255, 0.3)'
          }}>
            <Calendar size={24} style={{ color: '#00FFFF' }} />
            <span style={{ color: '#EAEAEA', fontFamily: 'Montserrat, sans-serif' }}>
              Next Event: <strong style={{ color: '#00FFFF' }}>AI Summit 2025</strong> - March 15, 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
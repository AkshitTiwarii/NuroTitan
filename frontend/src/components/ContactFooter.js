import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { FaQuora, FaPinterest } from 'react-icons/fa';

const ContactFooter = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/neurotitan', color: '#FFFFFF' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com', color: '#0077B5' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com', color: '#E4405F' },
    { name: 'Quora', icon: <FaQuora size={20} />, url: 'https://quora.com', color: '#B92B27' },
    { name: 'Pinterest', icon: <FaPinterest size={20} />, url: 'https://pinterest.com', color: '#E60023' }
  ];

  return (
    <footer 
      className="contact-footer py-16 px-6 relative"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1a0a2e 100%)',
        borderTop: '2px solid',
        borderImage: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%) 1'
      }}
      data-testid="contact-footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #8A2BE2 0%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            data-testid="contact-title"
          >
            Get In Touch
          </motion.h2>
          
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            href="mailto:neurotitancontact@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold"
            style={{
              background: 'rgba(138, 43, 226, 0.2)',
              color: '#00FFFF',
              border: '2px solid #00FFFF',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)'
            }}
            data-testid="contact-email"
          >
            <Mail size={24} />
            neurotitancontact@gmail.com
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2,
                rotate: 5
              }}
              className="social-link w-12 h-12 flex items-center justify-center rounded-full"
              style={{
                background: 'rgba(138, 43, 226, 0.2)',
                border: '2px solid rgba(138, 43, 226, 0.4)',
                color: social.color,
                transition: 'all 0.3s ease'
              }}
              data-testid={`social-link-${index}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div 
          className="h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #8A2BE2 50%, transparent 100%)'
          }}
        ></div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p 
            className="text-lg mb-4"
            style={{ 
              color: '#EAEAEA',
              fontFamily: 'Montserrat, sans-serif'
            }}
            data-testid="footer-tagline"
          >
            <strong style={{ color: '#8A2BE2' }}>NeuroTitan</strong> – The Future of Open AI Systems
          </p>
          <p 
            className="text-base"
            style={{ 
              color: '#AAAAAA',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Designed for Developers • Built for Innovation
          </p>
          <p 
            className="text-sm mt-4"
            style={{ 
              color: '#666666',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            © 2025 NeuroTitan Organization. All rights reserved.
          </p>
        </motion.div>

        {/* Animated Bottom Border */}
        <motion.div
          className="mt-8 h-1 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #8A2BE2 0%, #00FFFF 50%, #00BFFF 100%)'
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
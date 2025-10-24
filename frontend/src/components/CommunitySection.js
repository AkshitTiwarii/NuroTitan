import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageCircle, Users } from 'lucide-react';

const CommunitySection = () => {
  const platforms = [
    { name: 'GitHub', icon: <Github size={28} strokeWidth={1.5} />, description: 'Contribute to our open-source projects', link: 'https://github.com/neurotitan', members: '500+' },
    { name: 'Discord', icon: <MessageCircle size={28} strokeWidth={1.5} />, description: 'Join our developer community', link: '#', members: '1000+' },
    { name: 'Forum', icon: <Users size={28} strokeWidth={1.5} />, description: 'Discuss AI research and collaborate', link: '#', members: '750+' }
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block mb-6 px-6 py-2">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#808080' }}>Community</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}>Join Our Community</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080' }}>Connect with AI enthusiasts, researchers, and developers worldwide</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a key={index} href={platform.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} whileHover={{ y: -6 }} className="block p-10 rounded-sm transition-all duration-500" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', textDecoration: 'none' }}>
              <div className="mb-6" style={{ color: '#FFFFFF' }}>{platform.icon}</div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>{platform.name}</h3>
              <p className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080', fontSize: '15px' }}>{platform.description}</p>
              <div className="text-sm font-semibold" style={{ color: '#4A4A4A', fontFamily: 'Space Grotesk, sans-serif' }}>{platform.members} members</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

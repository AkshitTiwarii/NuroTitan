import React from 'react';
import { motion } from 'framer-motion';

const EcosystemSection = () => {
  const domains = [
    { title: 'Vision', icon: '👁️', description: 'Advanced computer vision systems with real-time processing', features: ['Object Detection', 'Scene Understanding', 'Video Analysis'] },
    { title: 'Language', icon: '💬', description: 'Next-gen NLP models for human-like understanding', features: ['Text Generation', 'Sentiment Analysis', 'Translation'] },
    { title: 'Audio', icon: '🎵', description: 'State-of-the-art speech and sound processing', features: ['Speech Recognition', 'Audio Synthesis', 'Sound Analysis'] },
    { title: 'Robotics', icon: '🤖', description: 'Intelligent automation and robotic control systems', features: ['Motion Planning', 'Control Systems', 'Sensor Fusion'] },
    { title: 'Healthcare', icon: '⚕️', description: 'AI-powered diagnostic and treatment solutions', features: ['Disease Detection', 'Treatment Planning', 'Medical Imaging'] },
    { title: 'Research', icon: '🔬', description: 'Cutting-edge AI research and experimentation', features: ['Neural Architecture', 'AGI Systems', 'Quantum ML'] },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#000000' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block mb-6 px-6 py-2">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#808080' }}>AI Ecosystem</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF', letterSpacing: '-0.02em' }}>Six Domains of<br /><span style={{ color: '#B8B8B8' }}>Intelligence</span></h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080' }}>Comprehensive AI solutions across multiple domains</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1 }} whileHover={{ y: -8 }} className="group">
              <div className="relative h-full p-8 rounded-sm overflow-hidden transition-all duration-500" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{domain.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#FFFFFF' }}>{domain.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#808080', fontSize: '15px' }}>{domain.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-medium rounded-sm" style={{ border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.03)', color: '#B8B8B8' }}>{feature}</span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;

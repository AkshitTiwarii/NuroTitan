import React from 'react';
import { motion } from 'framer-motion';
import { Unlock, Microscope, Users } from 'lucide-react';

const AboutSection = () => {
  const pillars = [
    {
      icon: <Unlock size={48} strokeWidth={1.5} />,
      title: 'Open Source',
      description: 'Building the future of AI together through transparent, collaborative development',
      stat: '50+',
      statLabel: 'Projects',
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      glowColor: 'rgba(138, 43, 226, 0.5)',
    },
    {
      icon: <Microscope size={48} strokeWidth={1.5} />,
      title: 'Research Excellence',
      description: 'Pioneering breakthrough discoveries in neural architectures and AGI systems',
      stat: '30+',
      statLabel: 'Papers',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      glowColor: 'rgba(0, 255, 255, 0.5)',
    },
    {
      icon: <Users size={48} strokeWidth={1.5} />,
      title: 'Global Community',
      description: 'Empowering developers worldwide to shape the next generation of AI',
      stat: '500+',
      statLabel: 'Contributors',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      glowColor: 'rgba(0, 191, 255, 0.5)',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(138, 43, 226, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
              About NeuroTitan
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-cyan-100 bg-clip-text text-transparent">
              The Future of AI
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A decentralized ecosystem where cutting-edge research meets practical implementation,
            <span className="text-cyan-400 font-medium"> empowering the next wave of AI innovation</span>
          </p>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Premium Glass Card */}
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl">
                {/* Animated Gradient Border Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.glowColor}, transparent)`,
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-gradient-to-br ${pillar.gradient} shadow-lg text-white`}
                  >
                    {pillar.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {pillar.stat}
                    </span>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                      {pillar.statLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {pillar.description}
                  </p>

                  {/* Decorative Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pillar.gradient} opacity-10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Shimmer Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

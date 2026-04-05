'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skills = {
    Languages: ['C++', 'Python', 'JavaScript', 'HTML & CSS'],
    'Frameworks / Tech': ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Python'],
    'Tools & Platforms': ['Amazon Web Services (AWS)', 'Bolt.ai', 'v0.dev'],
    'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Creativity', 'Adaptability'],
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl bg-gradient-to-br from-card/50 to-card/20 border border-primary/20 hover:border-primary/50 backdrop-blur-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : 'hidden'}
                      transition={{ delay: idx * 0.1 + i * 0.05, duration: 0.4 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 font-medium transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12"
          >
            {[
              { label: 'Projects Completed', value: '5+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Awards Won', value: '2' },
              { label: 'Years Experience', value: '2+' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-card/50 border border-accent/30 hover:border-accent/60 text-center"
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const achievements = [
    {
      title: 'HackWave Hackathon',
      description: 'Top 8 Rank',
      date: 'Oct 2025',
      icon: '🏆',
      color: 'from-primary to-accent',
    },
    {
      title: 'HackerRank',
      description: 'Silver Badge in C++',
      date: '2024',
      icon: '⭐',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section
      id="achievements"
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
              Achievements & <span className="text-primary">Awards</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`relative p-8 rounded-xl border border-gradient-to-r ${achievement.color} bg-gradient-to-br from-card/50 to-card/20 overflow-hidden group cursor-pointer`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{achievement.description}</p>
                  </div>
                  <span className="inline-block text-xs font-semibold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                    {achievement.date}
                  </span>
                </div>

                {/* Border Glow on Hover */}
                <div className={`absolute inset-0 border border-gradient-to-r ${achievement.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center"
          >
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Recognition & Excellence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized for technical excellence, innovation, and competitive programming skills.
              Committed to continuous learning and pushing boundaries in software engineering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

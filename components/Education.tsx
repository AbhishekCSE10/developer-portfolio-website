'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';

export default function Education() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const education = [
    {
      level: 'B.Tech in Computer Science & Engineering',
      institution: 'Lovely Professional University, Punjab',
      cgpa: 'CGPA: 7.5',
      period: 'Aug 2023 – Present',
      icon: '🎓',
      color: 'from-primary/30 to-primary/10',
    },
    {
      level: 'Intermediate (80%)',
      institution: 'Rose Public School',
      cgpa: '8.4%',
      period: 'Apr 2022 – Mar 2023',
      icon: '📚',
      color: 'from-accent/30 to-accent/10',
    },
    {
      level: 'Matriculation (88%)',
      institution: 'Rose Public School',
      cgpa: '9.2%',
      period: 'Apr 2019 – Mar 2020',
      icon: '✏️',
      color: 'from-primary/20 to-accent/20',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Education & <span className="text-primary">Timeline</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.level}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className={`relative p-6 rounded-lg border border-primary/20 bg-gradient-to-r ${item.color} hover:border-primary/50 transition-all backdrop-blur-sm group`}
              >
                {/* Timeline Connector */}
                {index < education.length - 1 && (
                  <div className="absolute -bottom-6 left-12 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-primary/0" />
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.level}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="text-xs font-semibold text-accent px-2 py-1 rounded bg-accent/10 border border-accent/30">
                        {item.cgpa}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Info Card */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Actively pursuing advanced courses and certifications in cloud computing, web development,
                  and cybersecurity. Participate in hackathons and competitive programming to stay at the
                  forefront of technology.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

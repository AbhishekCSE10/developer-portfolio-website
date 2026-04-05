'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Main Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Computer Science Engineering student with hands-on experience in web development,
              cloud optimization, and AI-assisted workflows. I enjoy solving real-world problems using
              clean UI, efficient logic, and scalable cloud solutions.
            </p>
            <p>
              I adapt quickly, collaborate well, and focus on building practical, impactful products
              that make a difference. My approach combines technical excellence with a user-centric
              mindset, ensuring that every solution I create is both powerful and intuitive.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
          >
            {[
              {
                title: 'Full Stack Development',
                description: 'Building complete web applications from frontend to cloud backend',
              },
              {
                title: 'Cloud Architecture',
                description: 'Designing scalable, cost-effective cloud solutions on AWS',
              },
              {
                title: 'Problem Solving',
                description: 'Analyzing complex challenges and implementing elegant solutions',
              },
              {
                title: 'Team Collaboration',
                description: 'Working effectively with cross-functional teams to deliver results',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

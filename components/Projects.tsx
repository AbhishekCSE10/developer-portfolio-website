'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'Cloud Cost Optimization System',
      date: 'Mar 2025',
      description:
        'Web platform to monitor cloud usage and identify overspending. AWS-based backend analysis with AI-assisted UI design.',
      highlights: [
        'Monthly cost estimation and plan comparison',
        'Automated analysis reduced manual effort by ~40%',
        'Improved workflows through creative problem solving',
      ],
      tech: ['AWS', 'React', 'Node.js', 'AI-assisted UI'],
      icon: '☁️',
    },
    {
      title: 'Artisan Aura',
      date: 'Aug 2024',
      description:
        'Handcrafted products showcase website. Frontend website with improved layout, navigation, and visual appeal.',
      highlights: [
        'Modern UI features for better product presentation',
        'Collaborated using SCSS and modern CSS techniques',
        'Enhanced user experience with responsive design',
      ],
      tech: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
      icon: '🎨',
    },
  ];

  return (
    <section
      id="projects"
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-xl border transition-all backdrop-blur-sm overflow-hidden ${
                  index === 0
                    ? 'lg:col-span-2 border-primary/50 bg-gradient-to-br from-primary/10 via-card to-accent/5 hover:border-primary/80 shadow-lg shadow-primary/20'
                    : 'border-primary/20 bg-gradient-to-br from-card/50 to-card/20 hover:border-primary/50'
                }`}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all opacity-0 group-hover:opacity-100" />

                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{project.icon}</div>
                    <div className="flex flex-col gap-2">
                      {index === 0 && (
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-xs font-bold text-primary bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 rounded-full border border-primary/50 backdrop-blur-sm"
                        >
                          ⭐ FEATURED PROJECT
                        </motion.span>
                      )}
                      <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-foreground ${index === 0 ? 'text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-2xl'}`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 pt-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div variants={itemVariants} className="flex justify-center pt-8">
            <motion.a
              href="https://github.com/abhishekcse10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 font-semibold transition-all"
            >
              View More on GitHub
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

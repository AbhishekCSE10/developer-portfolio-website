'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    {
      title: 'Crash Course on Python',
      issuer: 'Google (Coursera)',
      date: 'Mar 2024',
      icon: '🐍',
      link: 'https://coursera.org/share/a8169c48008c68ed70ec8b5c3533b3cc',
    },
    {
      title: 'SolidWorks: Basic to Industrial Level',
      issuer: 'Udemy',
      date: 'Jul 2023',
      icon: '🔧',
      link: 'https://www.udemy.com/share/106tEG3@kIv95Qpbl8TAGHiBJTustyAxculmWKDVLt7uGx8CcpYdkEBkpZBxLAg0vn1UzTwiQQ==/',
    },
    {
      title: 'Ethical Hacking: SQL Injection Attack',
      issuer: 'Udemy',
      date: 'Sep 2024',
      icon: '🔐',
      link: 'https://www.udemy.com/share/101sSo3@W7O5O1IudgnKAfiYCpZug2s3xl1XVKLttmyDHxVWDoERfeIB_tST64lBHhp2jTEDUQ==/',
    },
  ];

  return (
    <section
      id="certifications"
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
              Certifications & <span className="text-primary">Credentials</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Certifications List */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block p-6 rounded-lg border border-accent/30 bg-card/50 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all backdrop-blur-sm group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="text-3xl mt-1"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                  <motion.span 
                    className="text-xs font-medium text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30 whitespace-nowrap ml-4"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)' }}
                  >
                    {cert.date}
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { label: 'Certifications', value: certifications.length },
              { label: 'Platforms', value: '2' },
              { label: 'Courses', value: certifications.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 text-center"
              >
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

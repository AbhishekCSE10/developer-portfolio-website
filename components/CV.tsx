'use client';

import React from "react"
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Linkedin, Github } from 'lucide-react'; // Importing LinkedIn and Github icons

export default function CV() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek-CV.pdf';
    link.download = 'Abhishek-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="cv"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/10 to-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CV & Profiles
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Download my CV or connect with me on social platforms
            </p>
          </motion.div>

          {/* CV Download Card */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-12 hover:border-primary/60 transition-all duration-500 max-w-2xl mx-auto w-full"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
            </div>
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <div className="relative space-y-8">
              <motion.div 
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors"
                whileHover={{ rotate: -10, scale: 1.1 }}
              >
                <Download className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Download My Resume</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get my complete CV with all projects, skills, certifications, and professional experiences.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownloadCV}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold py-7 rounded-xl text-lg group/btn shadow-lg hover:shadow-primary/50"
                >
                  <motion.span
                    className="flex items-center justify-center gap-3"
                    whileHover={{ gap: '0.75rem' }}
                  >
                    <Download className="w-6 h-6" />
                    Download CV
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* CV Preview Info */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-card to-accent/5 p-8 space-y-6 max-w-2xl mx-auto w-full"
          >
            <h4 className="text-2xl font-bold text-foreground">What's Inside:</h4>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Professional Experience', icon: '💼' },
                { label: 'Technical Skills', icon: '⚙️' },
                { label: 'Certifications', icon: '🎓' },
                { label: 'Projects & Achievements', icon: '🚀' },
              ].map((item, idx) => (
                <motion.li 
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-primary/10 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-foreground font-medium">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Arrow icon component
function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17L17 7" />
    </svg>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/abhishekcse10',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/abhishek-abhishek-591387392/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:kumarabhishek63364@gmail.com',
      label: 'Email',
    },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ∑ Abhishek
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Engineer & CS student passionate about building innovative web and cloud solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h3>
              <nav className="space-y-2 text-sm">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 text-primary transition-colors"
                      title={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          >
            <p>© {currentYear} Abhishek. All rights reserved.</p>
            <p className="text-xs">
              Designed & Built with{' '}
              <span className="text-primary">♥</span> using React, Next.js & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

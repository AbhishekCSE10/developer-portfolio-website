'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Mesh Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30 animate-mesh-gradient" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(30, 144, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%, 100% 0%, 0% 100%',
        }} />
      </div>

      {/* Aurora Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl animate-aurora -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-accent/20 to-transparent rounded-full blur-3xl animate-aurora -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Avatar with Enhanced VFX */}
          <motion.div variants={itemVariants} className="flex justify-center relative">
            <div className="relative w-40 h-40">
              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                style={{ opacity: 0.3, filter: 'blur(20px)' }}
              />
              
              {/* Pulsing glow */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20"
              />

              {/* Main avatar */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 flex items-center justify-center overflow-hidden animate-floating-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative text-7xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>

          {/* Intro Line */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground font-medium tracking-wider uppercase"
          >
            "Don’t judge a book by its cover."
          </motion.p>

          {/* Main Headline with Shimmer Effect */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold relative"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                I'm Abhishek,
              </span>
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <motion.span
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 0%']
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-200%"
                style={{ backgroundSize: '200% auto' }}
              >
                Software Engineer.
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Currently pursuing B.Tech in Computer Science & Engineering, focused on building efficient,
            user-friendly web and cloud-based solutions.
          </motion.p>

          {/* CTA Buttons with VFX */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 rounded-lg text-base font-semibold group shadow-lg hover:shadow-primary/50 transition-all"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary/80 text-foreground px-8 py-6 rounded-lg text-base font-semibold transition-all animate-floating-border"
              >
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="w-full border-accent/50 hover:bg-accent/10 hover:border-accent/80 text-foreground px-8 py-6 rounded-lg text-base font-semibold transition-all"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with VFX */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/abhishekcse10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 text-primary transition-all border border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-primary/40 group"
            >
              <Github size={24} />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abhishek-abhishek-591387392/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 text-primary transition-all border border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-primary/40 group"
            >
              <Linkedin size={24} />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
            <motion.a
              href="mailto:kumarabhishek63364@gmail.com"
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 text-primary transition-all border border-primary/30 hover:border-primary/60 shadow-lg hover:shadow-primary/40 group"
            >
              <Mail size={24} />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center pt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

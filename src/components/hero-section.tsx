"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 dark:bg-accent-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/10 to-accent-100/10 dark:from-primary-900/5 dark:to-accent-900/5 rounded-full blur-3xl" />
      </div>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 dark:from-primary-900/30 dark:to-accent-900/30 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50 backdrop-blur-sm shadow-soft mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
            >
              <MapPin className="h-4 w-4" />
            </motion.div>
            {personalInfo.location}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8"
        >
          <span className="block text-neutral-800 dark:text-neutral-200 mb-2">
            Hi, I&apos;m
          </span>
          <motion.span 
            className="block bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 dark:from-primary-400 dark:via-primary-300 dark:to-accent-400 bg-clip-text text-transparent font-extrabold"
            initial={{ backgroundSize: "100%" }}
            animate={{ 
              backgroundSize: ["100%", "120%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          >
            {personalInfo.name}
          </motion.span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
          >
            {personalInfo.title}
          </motion.span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="space-y-6 mb-12"
        >
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-2xl transition-all duration-300 shadow-colored hover:shadow-glow-md hover:-translate-y-1 active:scale-95 overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Download className="h-5 w-5" />
            </motion.div>
            <span className="relative z-10">Download Resume</span>
          </motion.a>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-300 dark:border-primary-600 text-primary-600 dark:text-primary-400 font-medium rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 shadow-soft hover:shadow-colored active:scale-95"
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgb(59, 130, 246)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-5 w-5" />
            </motion.div>
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-8"
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-400 hover:from-primary-100 hover:to-primary-50 dark:hover:from-primary-900/30 dark:hover:to-primary-800/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-1 border border-neutral-200/50 dark:border-neutral-600/50"
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.div>
            <span className="sr-only">LinkedIn</span>
          </motion.a>

          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-400 hover:from-neutral-200 hover:to-neutral-100 dark:hover:from-neutral-700 dark:hover:to-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-1 border border-neutral-200/50 dark:border-neutral-600/50"
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              <Github className="h-6 w-6" />
            </motion.div>
            <span className="sr-only">GitHub</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-24 mb-24"
        >
          <motion.div
            className="group w-12 h-12 border-2 border-primary-300 dark:border-primary-600 rounded-full flex items-center justify-center mx-auto cursor-pointer bg-gradient-to-b from-transparent to-primary-50 dark:to-primary-900/20 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-glow-sm transition-all duration-300"
            animate={{
              y: [0, 12, 0],
              opacity: 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1] as const,
              delay: 2.5,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(14, 165, 233, 0.1)"
            }}
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-primary-400 to-primary-600 dark:from-primary-400 dark:to-primary-300 rounded-full"
              animate={{
                scaleY: [1, 0.6, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1] as const,
              }}
            />
          </motion.div>
          <motion.p
            className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 font-medium tracking-wide uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
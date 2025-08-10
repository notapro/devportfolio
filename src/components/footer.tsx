"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: Github,
    },
    {
      name: "LinkedIn", 
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. Built with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center items-center space-x-8 text-xs text-gray-500 dark:text-gray-500"
          >
            <span>9+ Years Experience</span>
            <span>•</span>
            <span>15M+ Downloads</span>
            <span>•</span>
            <span>$85M+ Revenue</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
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
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: personalInfo.github,
      color: "text-gray-900 dark:text-gray-100",
      bg: "bg-gray-100 dark:bg-gray-800",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Always interested in discussing new opportunities, technical challenges, or innovative projects in mobile gaming and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Methods Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.label}
                className="group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${method.bg}`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {method.label}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${method.bg}`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {method.label}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking for a technical leader, want to discuss mobile gaming architecture, 
              or explore new opportunities, I&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-5 w-5" />
                Send Message
              </motion.a>
              
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-8 flex-wrap justify-center text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Available for new opportunities
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                9+ years experience
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                Mobile gaming expert
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
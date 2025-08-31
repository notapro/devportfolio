"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MapPin } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { AnimatedSection, AnimatedItem } from "./animated-section";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-primary-600 dark:text-primary-400",
      bg: "bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      color: "text-accent-600 dark:text-accent-400",
      bg: "bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-900/30 dark:to-accent-800/20",
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
    <section id="contact" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent-50/30 via-neutral-50 to-primary-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16" direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Always interested in discussing new opportunities, technical challenges, or innovative projects in mobile gaming and beyond.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2} stagger>
          {/* Contact Methods Grid */}
          <AnimatedItem className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                      <div className={`p-3 rounded-xl shadow-soft ${method.bg}`}>
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
                      <div className={`p-3 rounded-xl shadow-soft ${method.bg}`}>
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
          </AnimatedItem>

          {/* Call to Action */}
          <AnimatedItem className="text-center bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 p-8 shadow-medium">
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
          </AnimatedItem>

          {/* Professional Summary */}
          <AnimatedItem className="mt-12 text-center">
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
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Users, DollarSign, Code } from "lucide-react";
import Image from "next/image";
import { featuredProjects } from "@/data/projects";
import { AnimatedSection, AnimatedItem } from "./animated-section";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/20 via-white to-accent-50/20 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Innovative mobile games and technical solutions that have reached millions of users
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8" direction="up" delay={0.2} stagger>
          {featuredProjects.map((project) => (
            <AnimatedItem
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-black/20" />
                )}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    <Code className="h-4 w-4" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Impact */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    Business Impact
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    {project.businessImpact}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </motion.a>
                  )}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -100px 0px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              15M+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Total Downloads
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              $85M+
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Revenue Generated
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              99.9%
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              System Uptime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
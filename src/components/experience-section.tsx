"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { experiences } from "@/data/experience";
import { AnimatedSection, AnimatedItem } from "./animated-section";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-neutral-50/50 to-white dark:from-neutral-900 dark:via-neutral-800/50 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16" direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            9+ years of building scalable mobile games and leading engineering teams at PlaySimple Games
          </p>
        </AnimatedSection>

        <AnimatedSection className="relative" direction="left" delay={0.2} stagger>
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 hidden md:block shadow-sm" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <AnimatedItem
                key={experience.id}
                className="relative flex flex-col md:flex-row gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white dark:border-neutral-900 z-10 shadow-medium" />

                {/* Content card */}
                <div className="md:ml-16 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <MapPin className="h-4 w-4" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-700 dark:to-neutral-800 px-4 py-2 rounded-full whitespace-nowrap border border-neutral-200 dark:border-neutral-600 shadow-soft">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-base">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-200/50 dark:border-primary-700/50 hover:shadow-soft transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                      <TrendingUp className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.05 + achievementIndex * 0.03,
                            duration: 0.4 
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
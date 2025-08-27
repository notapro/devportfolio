"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Users, 
  Zap,
  BrainCircuit,
  Gamepad2,
  Database
} from "lucide-react";
import { skills } from "@/data/skills";
import { AnimatedSection, AnimatedItem } from "./animated-section";

const categoryIcons = {
  "Core Technologies": Code2,
  "Backend & Infrastructure": Server,
  "Leadership & Management": Users,
  "Performance & Analytics": Zap,
  "Emerging Technologies": BrainCircuit,
};

export function SkillsSection() {
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/30 via-white to-accent-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16" direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built over 9+ years of mobile game development and engineering leadership
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" direction="up" delay={0.2} stagger>
          {skills.map((skillCategory) => {
            const IconComponent = categoryIcons[skillCategory.category as keyof typeof categoryIcons] || Code2;
            
            return (
              <AnimatedItem
                key={skillCategory.category}
                className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 rounded-xl group-hover:from-primary-200 group-hover:to-primary-100 dark:group-hover:from-primary-800/40 dark:group-hover:to-primary-700/30 transition-all duration-300 shadow-soft">
                    <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skillCategory.items.map((skillItem) => {
                    const getProficiencyColor = (level: string) => {
                      switch (level) {
                        case 'Expert':
                          return 'from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500';
                        case 'Advanced':
                          return 'from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500';
                        case 'Intermediate':
                          return 'from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500';
                        case 'Beginner':
                          return 'from-slate-500 to-gray-600 dark:from-slate-400 dark:to-gray-500';
                        default:
                          return 'from-primary-500 to-accent-500';
                      }
                    };

                    return (
                      <motion.div
                        key={skillItem.name}
                        variants={skillVariants}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                              {skillItem.name}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                {skillItem.yearsOfExperience} year{skillItem.yearsOfExperience !== 1 ? 's' : ''}
                              </span>
                              <div className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${getProficiencyColor(skillItem.proficiencyLevel)} text-white shadow-sm`}>
                                {skillItem.proficiencyLevel}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>

        {/* Tech Stack Highlights */}
        <AnimatedSection className="mt-16 bg-gradient-to-br from-primary-50/80 via-white to-accent-50/80 dark:from-primary-950/20 dark:via-neutral-800/50 dark:to-accent-950/20 rounded-3xl p-8 border border-primary-100/50 dark:border-primary-800/30 shadow-soft backdrop-blur-sm" direction="scale" delay={0.3}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-8">
            Core{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-medium border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-110 transition-transform duration-300">
                <Gamepad2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">Unity</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Game Engine</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-medium border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-110 transition-transform duration-300">
                <Code2 className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">Golang</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Backend</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-medium border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-110 transition-transform duration-300">
                <Database className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">ScyllaDB</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Database</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-medium border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-110 transition-transform duration-300">
                <Server className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">AWS</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Cloud</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
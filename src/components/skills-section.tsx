"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Gamepad2, 
  Users, 
  BarChart3,
  Wrench
} from "lucide-react";
import { skills } from "@/data/skills";

const categoryIcons = {
  "Programming Languages": Code2,
  "Game Development": Gamepad2,
  "Backend & Infrastructure": Server,
  "Databases": Database,
  "DevOps & Tools": Wrench,
  "Leadership & Management": Users,
  "Analytics & Data": BarChart3,
};

export function SkillsSection() {
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 9+ years of mobile game development and engineering leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = categoryIcons[skillCategory.category as keyof typeof categoryIcons] || Code2;
            
            return (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {skillCategory.category}
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="space-y-3"
                >
                  {skillCategory.items.map((skillItem, skillIndex) => (
                    <motion.div
                      key={skillItem.name}
                      variants={skillVariants}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skillItem.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {skillItem.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillItem.proficiency}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut" 
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Core Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Gamepad2 className="h-8 w-8 text-purple-600" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Unity</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Game Engine</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Code2 className="h-8 w-8 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">TypeScript</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Frontend</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Node.js</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Backend</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Database className="h-8 w-8 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">AWS</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cloud</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
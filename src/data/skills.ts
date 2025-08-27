import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "C#", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "Golang", yearsOfExperience: 7, proficiencyLevel: "Expert" },
      { name: "Java", yearsOfExperience: 9, proficiencyLevel: "Expert" },
      { name: "JavaScript", yearsOfExperience: 7, proficiencyLevel: "Advanced" },
      { name: "Python", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "TypeScript", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Objective-C", yearsOfExperience: 3, proficiencyLevel: "Intermediate" },
      { name: "C++", yearsOfExperience: 2, proficiencyLevel: "Intermediate" }
    ]
  },
  {
    category: "Game Development",
    items: [
      { name: "Unity Engine", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "Mobile Game Development", yearsOfExperience: 9, proficiencyLevel: "Expert" },
      { name: "Performance Optimization", yearsOfExperience: 7, proficiencyLevel: "Expert" },
      { name: "2D Casual Puzzle Games", yearsOfExperience: 9, proficiencyLevel: "Expert" },
      { name: "Multiplayer Systems", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Game Analytics", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Cross-Platform Development", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "Cocos2d-JS", yearsOfExperience: 2, proficiencyLevel: "Intermediate" },
      { name: "AI/Game AI", yearsOfExperience: 4, proficiencyLevel: "Intermediate" }
    ]
  },
  {
    category: "Backend & Infrastructure",
    items: [
      { name: "Microservices Architecture", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "API Design & Development", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "System Scalability", yearsOfExperience: 7, proficiencyLevel: "Advanced" },
      { name: "Database Optimization", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Cloud Architecture", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Distributed Systems", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Load Balancing", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Caching Strategies", yearsOfExperience: 6, proficiencyLevel: "Advanced" }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "ScyllaDB", yearsOfExperience: 3, proficiencyLevel: "Advanced" },
      { name: "Redis", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "MongoDB", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Firebase", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Database Indexing", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Data Modeling", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "MySQL/PostgreSQL", yearsOfExperience: 3, proficiencyLevel: "Intermediate" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "DigitalOcean", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "CloudFlare", yearsOfExperience: 3, proficiencyLevel: "Intermediate" },
      { name: "Jenkins", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Unity Cloud Build", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Git", yearsOfExperience: 9, proficiencyLevel: "Expert" },
      { name: "Gradle", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Container Management", yearsOfExperience: 2, proficiencyLevel: "Beginner" }
    ]
  },
  {
    category: "Leadership & Management",
    items: [
      { name: "Team Leadership", yearsOfExperience: 7, proficiencyLevel: "Expert" },
      { name: "Technical Mentoring", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Code Review", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "Architecture Design", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Cross-functional Collaboration", yearsOfExperience: 7, proficiencyLevel: "Expert" },
      { name: "Crisis Management", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Sprint Planning", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Process Improvement", yearsOfExperience: 5, proficiencyLevel: "Advanced" }
    ]
  },
  {
    category: "Performance & Optimization",
    items: [
      { name: "Memory Management", yearsOfExperience: 8, proficiencyLevel: "Expert" },
      { name: "Garbage Collection Optimization", yearsOfExperience: 7, proficiencyLevel: "Expert" },
      { name: "Load Time Optimization", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Lazy Loading", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Object Pooling", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Goroutine Optimization", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "API Response Optimization", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Profiling & Debugging", yearsOfExperience: 7, proficiencyLevel: "Expert" }
    ]
  },
  {
    category: "Analytics & Business Intelligence",
    items: [
      { name: "Firebase Analytics", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "A/B Testing", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "User Behavior Analysis", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Performance Metrics", yearsOfExperience: 6, proficiencyLevel: "Advanced" },
      { name: "Business Impact Analysis", yearsOfExperience: 4, proficiencyLevel: "Intermediate" },
      { name: "Data-Driven Decision Making", yearsOfExperience: 5, proficiencyLevel: "Advanced" },
      { name: "Custom Analytics Tools", yearsOfExperience: 3, proficiencyLevel: "Intermediate" }
    ]
  },
  {
    category: "Emerging Technologies",
    items: [
      { name: "Large Language Models (LLMs)", yearsOfExperience: 1, proficiencyLevel: "Beginner" },
      { name: "Agentic Frameworks", yearsOfExperience: 1, proficiencyLevel: "Beginner" },
      { name: "Machine Learning", yearsOfExperience: 2, proficiencyLevel: "Intermediate" },
      { name: "Natural Language Processing", yearsOfExperience: 3, proficiencyLevel: "Intermediate" },
      { name: "Algorithms & Data Structures", yearsOfExperience: 9, proficiencyLevel: "Expert" },
      { name: "System Design", yearsOfExperience: 8, proficiencyLevel: "Expert" }
    ]
  }
];

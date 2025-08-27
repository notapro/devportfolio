import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "principal-engineer-2",
    title: "Principal Software Engineer - 2",
    company: "PlaySimple Games",
    period: "July 2024 - Present",
    description: "Leading engineering teams across 2 successful mobile applications with combined $50k+ daily revenue and 400k+ DAU. Building modular component architecture that promotes reusability between products, reducing development time by 30% while maintaining 99.5% system reliability targets.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "AWS", "DigitalOcean", "Firebase Analytics", "Jenkins", "Modular Architecture"],
    achievements: [
      "Leading teams for Tile Match ($50k daily revenue, 400k DAU) and Tile Empire with 99.5% system reliability targets",
      "Built modular component architecture reducing development time by 30% while maintaining enterprise-grade reliability",
      "Mentoring technical artists and developers while collaborating with senior leadership on strategic planning"
    ]
  },
  {
    id: "principal-engineer-1",
    title: "Principal Software Engineer - 1", 
    company: "PlaySimple Games",
    period: "July 2020 - July 2024",
    description: "Architected and built enterprise-grade authentication system serving 3M+ daily active users across entire PlaySimple ecosystem. Led strategic product development including Destination Solitaire and managed critical recovery operations for WordWars.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "MongoDB", "Redis", "AWS", "DigitalOcean", "Firebase", "Microservices"],
    achievements: [
      "Built scalable authentication system serving 3M+ daily active users with 99.9% uptime using Golang and ScyllaDB",
      "Led WordWars crisis recovery, improving system stability from 97% to 99.3% within one month",
      "Designed and developed Destination Solitaire from conception, leading 5-developer team for 2+ years"
    ]
  },
  {
    id: "senior-engineer",
    title: "Senior Software Engineer",
    company: "PlaySimple Games", 
    period: "July 2017 - July 2020",
    description: "Technical lead for WordWars, achieving remarkable success with $70K peak daily revenue. Led team of 4 developers while building sophisticated AI systems and real-time multiplayer infrastructure supporting thousands of concurrent users.",
    technologies: ["Unity", "C#", "Golang", "MongoDB", "Redis", "Branch and Bound algorithms", "Trie structures", "Real-time networking", "PvP systems"],
    achievements: [
      "Led WordWars as technical lead, achieving $70K peak daily revenue with millions of active users",
      "Built AI-based adaptive adversary system using Branch and Bound algorithms with memory-optimized Trie structures",
      "Achieved 50% reduction in application load times through comprehensive memory optimizations and performance tuning"
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    company: "PlaySimple Games",
    period: "January 2017 - July 2017", 
    description: "Spearheaded Daily Themed Crossword development and multi-platform launch. Guided team of 3 developers in feature development and release management while creating innovative content generation systems.",
    technologies: ["Unity", "C#", "Cocos2d-JS", "Golang", "Redis", "MongoDB", "Content generation algorithms", "Data replication tools"],
    achievements: [
      "Spearheaded Daily Themed Crossword development and successful multi-platform launch on iOS and Android",
      "Created innovative crossword grid generator algorithm, reducing content creation time by 10%",
      "Promoted to Senior Software Engineer within 6 months due to exceptional technical performance and leadership"
    ]
  },
  {
    id: "associate-engineer", 
    title: "Associate Software Engineer",
    company: "PlaySimple Games",
    period: "July 2016 - January 2017",
    description: "Started professional career in mobile application development. Contributed to Jungle Rumble development while building foundational backend systems and establishing expertise in development technologies and cross-functional collaboration.",
    technologies: ["Cocos2d-JS", "Unity", "C#", "Golang", "Redis", "MongoDB", "Git", "Backend systems"],
    achievements: [
      "Successfully contributed to Jungle Rumble game development using Cocos2d-JS engine and modern web technologies",
      "Developed level-based leaderboard system using Golang, Redis, and MongoDB with real-time updates",
      "Promoted to Software Engineer within 6 months, recognizing exceptional performance and rapid learning"
    ]
  }
];

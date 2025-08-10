import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "principal-engineer-2",
    title: "Principal Software Engineer - 2",
    company: "PlaySimple Games",
    period: "July 2024 - Present",
    description: "Leading teams across 2 successful titles with combined $30K+ daily revenue and 225K+ DAU. Building modular components promoting reusability between games, reducing development time by 30%.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "AWS", "DigitalOcean", "Firebase Analytics", "Jenkins"],
    achievements: [
      "Leading teams for Tile Match ($30K daily revenue, 225K DAU) and Tile Empire",
      "Maintaining 99.5% stability target with 5-second load times and 75 FPS performance",
      "Building modular components reducing development time by 30%",
      "Mentoring technical artists and developers on Unity best practices",
      "Collaborating with senior leadership on sprint planning and development timelines"
    ]
  },
  {
    id: "principal-engineer-1",
    title: "Principal Software Engineer - 1",
    company: "PlaySimple Games",
    period: "July 2020 - July 2024",
    description: "Built scalable login system serving 3M+ daily active users across entire PlaySimple ecosystem. Led Destination Solitaire development and WordWars recovery operations.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "MongoDB", "Redis", "AWS", "DigitalOcean", "Firebase"],
    achievements: [
      "Built enterprise-grade login system serving 3M+ daily active users with 99.9% uptime",
      "Led WordWars recovery, improving crash-free rate from 97% to 99.3% within one month",
      "Designed and developed Destination Solitaire from conception, leading 5-developer team for 2+ years",
      "Architected cross-game quest system enabling seamless user progress tracking across titles",
      "Migrated infrastructure from AWS to DigitalOcean, optimizing costs and performance"
    ]
  },
  {
    id: "senior-engineer",
    title: "Senior Software Engineer",
    company: "PlaySimple Games",
    period: "July 2017 - July 2020",
    description: "Technical lead for WordWars achieving $70K peak daily revenue. Led team of 4 developers and built AI-based adaptive adversary system with advanced algorithms.",
    technologies: ["Unity", "C#", "Golang", "MongoDB", "Redis", "Branch and Bound algorithms", "Trie structures"],
    achievements: [
      "Led WordWars to $70K peak daily revenue as technical lead",
      "Built AI-based adaptive adversary system using Branch and Bound algorithms with memory-optimized Trie structures",
      "Implemented real-time PvP communication and chat systems supporting thousands of concurrent users",
      "Achieved 50% reduction in game load times through comprehensive memory optimizations",
      "Built automated content generation tools reducing designer workload by 40%"
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    company: "PlaySimple Games",
    period: "January 2017 - July 2017",
    description: "Spearheaded Daily Themed Crossword development and multi-platform launch. Guided team of 3 developers and created crossword grid generator reducing content creation time by 10%.",
    technologies: ["Unity", "C#", "Cocos2d-JS", "Golang", "Redis", "MongoDB", "Data replication tools"],
    achievements: [
      "Spearheaded Daily Themed Crossword development and successful multi-platform launch",
      "Guided team of 3 developers in feature development and release management",
      "Created crossword grid generator, reducing content creation time by 10%",
      "Developed data replication tool for safe application-level data transfer across all PlaySimple titles",
      "Promoted to Senior Engineer within 6 months due to exceptional performance"
    ]
  },
  {
    id: "associate-engineer",
    title: "Associate Software Engineer",
    company: "PlaySimple Games",
    period: "July 2016 - January 2017",
    description: "Started career in mobile game development. Worked on Jungle Rumble using Cocos2d-JS and developed level-based leaderboard system using modern backend technologies.",
    technologies: ["Cocos2d-JS", "Unity", "C#", "Golang", "Redis", "MongoDB", "Git"],
    achievements: [
      "Successfully contributed to Jungle Rumble game development using Cocos2d-JS engine",
      "Developed level-based leaderboard system using Golang, Redis, and MongoDB",
      "Collaborated effectively with cross-functional teams including product managers, designers, and artists",
      "Rapid learning curve - promoted to Software Engineer within 6 months",
      "Established foundation in game development and backend systems architecture"
    ]
  }
];
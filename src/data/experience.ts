import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "principal-engineer-2",
    title: "Principal Software Engineer - 2",
    company: "PlaySimple Games",
    period: "July 2024 - Present",
    description: "Leading engineering teams across 2 successful mobile game titles with combined $30K+ daily revenue and 225K+ DAU. Building modular component architecture that promotes reusability between games, reducing development time by 30% while maintaining 99.5% stability targets.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "AWS", "DigitalOcean", "Firebase Analytics", "Jenkins", "Modular Architecture"],
    achievements: [
      "Leading teams for Tile Match ($30K daily revenue, 225K DAU) and Tile Empire with 99.5% stability",
      "Achieving 5-second load times and consistent 75 FPS performance across all devices",
      "Building modular components promoting cross-game reusability, reducing development time by 30%",
      "Mentoring technical artists and developers on Unity best practices and performance optimization",
      "Collaborating with senior leadership on strategic sprint planning and development timelines",
      "Maintaining enterprise-grade reliability standards across all production systems"
    ]
  },
  {
    id: "principal-engineer-1",
    title: "Principal Software Engineer - 1", 
    company: "PlaySimple Games",
    period: "July 2020 - July 2024",
    description: "Architected and built enterprise-grade login system serving 3M+ daily active users across entire PlaySimple ecosystem. Led strategic product development including Destination Solitaire and managed critical recovery operations for WordWars.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "MongoDB", "Redis", "AWS", "DigitalOcean", "Firebase", "Microservices"],
    achievements: [
      "Built scalable login system serving 3M+ daily active users with 99.9% uptime using Golang and ScyllaDB",
      "Led WordWars crisis recovery, improving crash-free rate from 97% to 99.3% within one month",
      "Designed and developed Destination Solitaire from conception, leading 5-developer team for 2+ years",
      "Architected cross-game quest system enabling seamless user progress tracking across all PlaySimple titles",
      "Successfully migrated infrastructure from AWS to DigitalOcean, optimizing costs while maintaining performance",
      "Established architectural patterns and best practices adopted across the entire engineering organization"
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
      "Led WordWars as technical lead, achieving $70K peak daily revenue with millions of active players",
      "Built AI-based adaptive adversary system using Branch and Bound algorithms with memory-optimized Trie structures",
      "Implemented real-time PvP communication and chat systems supporting thousands of concurrent users",
      "Achieved 50% reduction in game load times through comprehensive memory optimizations and performance tuning",
      "Built automated content generation tools reducing designer workload by 40% and improving content quality",
      "Established team leadership practices and mentored junior developers on advanced game development techniques"
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
      "Guided team of 3 developers in feature development, code reviews, and release management processes",
      "Created innovative crossword grid generator algorithm, reducing content creation time by 10%",
      "Developed robust data replication tool for safe application-level data transfer across all PlaySimple titles",
      "Promoted to Senior Software Engineer within 6 months due to exceptional technical performance and leadership",
      "Established best practices for multi-platform game development and content management systems"
    ]
  },
  {
    id: "associate-engineer", 
    title: "Associate Software Engineer",
    company: "PlaySimple Games",
    period: "July 2016 - January 2017",
    description: "Started professional career in mobile game development. Contributed to Jungle Rumble development while building foundational backend systems and establishing expertise in game development technologies and cross-functional collaboration.",
    technologies: ["Cocos2d-JS", "Unity", "C#", "Golang", "Redis", "MongoDB", "Git", "Backend systems"],
    achievements: [
      "Successfully contributed to Jungle Rumble game development using Cocos2d-JS engine and modern web technologies",
      "Developed level-based leaderboard system using Golang, Redis, and MongoDB with real-time updates",
      "Collaborated effectively with cross-functional teams including product managers, designers, and artists",
      "Demonstrated rapid learning curve and technical adaptability in mobile game development",
      "Promoted to Software Engineer within 6 months, recognizing exceptional performance and potential",
      "Established strong foundation in game development, backend systems, and agile development practices"
    ]
  }
];

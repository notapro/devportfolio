import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "pse-principal",
    title: "Principal Software Engineer",
    company: "PlaySimple Games",
    period: "2023 - Present",
    description: "Leading engineering initiatives and architecture decisions for multiple mobile gaming products reaching millions of users.",
    technologies: ["Unity", "C#", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "Python", "Go"],
    achievements: [
      "Led technical architecture for 3 major game releases generating $50M+ revenue",
      "Mentored 15+ engineers across multiple teams and established engineering best practices",
      "Reduced deployment time by 70% through CI/CD pipeline optimization",
      "Implemented microservices architecture improving system scalability by 300%",
      "Spearheaded adoption of modern tech stack across 5 game studios"
    ]
  },
  {
    id: "pse-senior",
    title: "Senior Software Engineer",
    company: "PlaySimple Games",
    period: "2020 - 2023",
    description: "Developed and maintained core game systems, backend services, and led feature development for flagship titles.",
    technologies: ["Unity", "C#", "Node.js", "MongoDB", "Redis", "AWS Lambda", "PostgreSQL"],
    achievements: [
      "Built real-time multiplayer system handling 1M+ concurrent users",
      "Optimized game performance resulting in 40% reduction in crash rates",
      "Designed and implemented analytics pipeline processing 100M+ daily events",
      "Led cross-functional team of 8 developers for major game feature launches",
      "Established code review processes improving code quality by 60%"
    ]
  },
  {
    id: "pse-software",
    title: "Software Engineer",
    company: "PlaySimple Games",
    period: "2018 - 2020",
    description: "Focused on game client development, performance optimization, and implementing engaging game mechanics.",
    technologies: ["Unity", "C#", "Firebase", "REST APIs", "Git", "Jenkins"],
    achievements: [
      "Developed core gameplay features for 2 top-grossing mobile games",
      "Implemented A/B testing framework improving user engagement by 25%",
      "Optimized memory usage reducing app size by 30%",
      "Built automated testing suite covering 80% of critical game flows",
      "Collaborated with design team to implement innovative UI/UX solutions"
    ]
  },
  {
    id: "pse-junior",
    title: "Junior Software Engineer",
    company: "PlaySimple Games",
    period: "2016 - 2018",
    description: "Started career in mobile game development, learning Unity and game development fundamentals while contributing to live games.",
    technologies: ["Unity", "C#", "JSON", "SQLite", "Version Control"],
    achievements: [
      "Successfully shipped first mobile game within 6 months of joining",
      "Implemented game monetization features increasing ARPU by 20%",
      "Fixed 200+ bugs and improved overall game stability",
      "Learned and mastered Unity engine and mobile development best practices",
      "Contributed to daily active user growth from 100K to 1M+"
    ]
  }
];
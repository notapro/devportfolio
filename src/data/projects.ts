import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: "word-cookies",
    title: "Word Cookies",
    description: "A word puzzle game with 10M+ downloads and innovative gameplay mechanics",
    longDescription: "Led the development of Word Cookies, a mobile word puzzle game that became one of PlaySimple's flagship titles. Architected the core game systems, implemented advanced word generation algorithms, and built scalable backend services to support millions of players.",
    technologies: ["Unity", "C#", "Node.js", "MongoDB", "Redis", "AWS", "Firebase Analytics"],
    features: [
      "Dynamic word puzzle generation algorithm",
      "Real-time leaderboards and social features",
      "Cross-platform progression sync",
      "Advanced analytics and A/B testing framework",
      "Monetization optimization system"
    ],
    businessImpact: "Generated $25M+ revenue with 4.5+ star rating and 10M+ downloads",
    image: "/projects/word-cookies.jpg"
  },
  {
    id: "crossword-jam",
    title: "Crossword Jam",
    description: "Real-time multiplayer crossword game with advanced matching system",
    longDescription: "Developed a real-time multiplayer crossword game featuring instant matchmaking, live gameplay, and social interaction. Built the entire multiplayer infrastructure from scratch to handle thousands of concurrent matches.",
    technologies: ["Unity", "C#", "Socket.IO", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    features: [
      "Real-time multiplayer matching system",
      "Live gameplay with instant synchronization",
      "Voice chat integration",
      "Tournament and ranking system",
      "Anti-cheat and fraud detection"
    ],
    businessImpact: "Achieved 2M+ monthly active users with 85% retention rate",
    image: "/projects/crossword-jam.jpg"
  },
  {
    id: "game-analytics",
    title: "Game Analytics Platform",
    description: "Enterprise-scale analytics platform processing 100M+ events daily",
    longDescription: "Designed and built a comprehensive analytics platform for tracking game metrics, user behavior, and business KPIs across multiple game titles. The platform provides real-time insights and automated reporting for product and business teams.",
    technologies: ["Python", "Apache Kafka", "ClickHouse", "Redis", "Docker", "Kubernetes", "Grafana"],
    features: [
      "Real-time event processing pipeline",
      "Custom dashboard builder",
      "Automated anomaly detection",
      "A/B testing integration",
      "Revenue attribution modeling"
    ],
    businessImpact: "Improved decision-making speed by 60% and identified $10M+ revenue opportunities",
    image: "/projects/analytics-platform.jpg"
  },
  {
    id: "game-backend",
    title: "Scalable Game Backend",
    description: "Microservices architecture supporting 5M+ concurrent users",
    longDescription: "Architected and implemented a modern microservices backend infrastructure to support multiple game titles. The system handles user management, game state synchronization, leaderboards, and in-app purchases at scale.",
    technologies: ["Go", "Node.js", "PostgreSQL", "Redis", "RabbitMQ", "AWS Lambda", "Docker"],
    features: [
      "Auto-scaling microservices architecture",
      "Distributed caching system",
      "Real-time game state synchronization",
      "Fraud detection and prevention",
      "Multi-region deployment"
    ],
    businessImpact: "Reduced infrastructure costs by 40% while improving system reliability to 99.9%",
    image: "/projects/game-backend.jpg"
  }
];
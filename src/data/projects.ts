import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: "tile-match-empire",
    title: "Tile Match & Tile Empire",
    description: "Current projects generating $30K daily revenue with 225K DAU and 99.5% stability",
    longDescription: "Currently leading teams for Tile Match and Tile Empire as Principal Software Engineer - 2. Maintaining 99.5% stability target with 5-second load times and 75 FPS performance. Building modular components that promote reusability between games, reducing development time by 30%.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "Firebase Analytics", "Modular architecture", "Performance optimization"],
    features: [
      "Modular component architecture for game reusability",
      "High-performance rendering achieving 75 FPS consistently",
      "5-second load times with advanced optimization techniques",
      "Real-time analytics and A/B testing framework",
      "Cross-game progression and reward systems"
    ],
    businessImpact: "$30K combined daily revenue with 225K daily active users, maintaining 99.5% stability targets",
    image: "/projects/tile-match.webp"
  },
  {
    id: "central-login-system",
    title: "Central Login System",
    description: "Enterprise-grade authentication system serving 3M+ daily active users across PlaySimple ecosystem",
    longDescription: "Built scalable login system serving 3M+ daily active users across the entire PlaySimple Games ecosystem. Utilized Golang and ScyllaDB, hosted on AWS and later migrated to DigitalOcean for cost optimization. Achieved 99.9% uptime while handling massive scale with enterprise-grade security.",
    technologies: ["Golang", "ScyllaDB", "AWS", "DigitalOcean", "Microservices", "Redis", "Load balancing", "Enterprise security"],
    features: [
      "Scalable microservices architecture",
      "Multi-game authentication and authorization",
      "99.9% uptime with enterprise-grade reliability",
      "Cross-platform user progression tracking",
      "Advanced security and fraud prevention"
    ],
    businessImpact: "Serving 3M+ daily active users with 99.9% uptime, enabling seamless experience across entire PlaySimple portfolio",
    image: "/projects/login-system.jpg"
  },
  {
    id: "destination-solitaire",
    title: "Destination Solitaire",
    description: "Travel-themed solitaire game built from conception, leading 5-developer team for 2+ years",
    longDescription: "Designed and developed Destination Solitaire from conception as Principal Software Engineer. Led a 5-developer team for over 2 years, creating an innovative twist on classic solitaire where players visit different cities by completing puzzles. Implemented cross-platform architecture and seamless progression systems.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "AWS", "DigitalOcean", "Cross-platform architecture", "Real-time sync"],
    features: [
      "Travel-themed progression system visiting different cities",
      "Cross-platform synchronization across iOS and Android",
      "Stamp collection and achievement systems",
      "Social features for competing with friends",
      "Optimized performance for low-end devices"
    ],
    businessImpact: "Successfully launched and maintained for 2+ years with consistent user engagement and positive reviews",
    image: "/projects/destination-solitaire.webp"
  },
  {
    id: "wordwars",
    title: "WordWars",
    description: "Multiplayer word game achieving $70K peak daily revenue with AI-based adaptive adversary system",
    longDescription: "Led technical development of WordWars as Senior Software Engineer, taking it from concept to $70K peak daily revenue. Built sophisticated AI-based adaptive adversary system using Branch and Bound algorithms with memory-optimized Trie structures. Implemented real-time PvP communication and chat systems supporting thousands of concurrent users.",
    technologies: ["Unity", "C#", "Golang", "MongoDB", "Redis", "Branch and Bound algorithms", "Trie structures", "Real-time networking"],
    features: [
      "AI-based adaptive adversary system with advanced algorithms",
      "Real-time PvP communication and chat systems",
      "Memory-optimized Trie structures for word validation",
      "Scalable backend supporting thousands of concurrent users",
      "Automated content generation tools reducing designer workload by 40%"
    ],
    businessImpact: "$70K peak daily revenue, leading PlaySimple's word game category with millions of players worldwide",
    image: "/projects/wordwars.png"
  },
  {
    id: "daily-themed-crossword",
    title: "Daily Themed Crossword", 
    description: "Multi-platform crossword game with automated content generation reducing creation time by 10%",
    longDescription: "Spearheaded Daily Themed Crossword development and multi-platform launch as Software Engineer. Guided team of 3 developers in feature development and release management. Created innovative crossword grid generator that reduced content creation time by 10%, along with data replication tools for safe data transfer.",
    technologies: ["Unity", "C#", "Cocos2d-JS", "Golang", "MongoDB", "Redis", "Content generation algorithms", "Data replication"],
    features: [
      "Automated crossword grid generation algorithm",
      "Daily themed content across multiple categories",
      "Cross-platform synchronization and progression",
      "Data replication tools for safe content transfer",
      "Scalable content management system"
    ],
    businessImpact: "Successful multi-platform launch with 10% reduction in content creation time and positive user reception",
    image: "/projects/daily-crossword.png"
  }
];
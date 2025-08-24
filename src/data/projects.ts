import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: "tile-match-empire",
    title: "Tile Match & Tile Empire",
    description: "Leading concurrent mobile puzzle games generating $30K combined daily revenue with 225K DAU and 99.5% stability",
    longDescription: "Currently leading engineering teams for Tile Match and Tile Empire as Principal Software Engineer - 2. These concurrent mobile puzzle games represent the latest evolution in PlaySimple's casual gaming portfolio. Maintaining strict 99.5% stability targets while achieving 5-second load times and consistent 75 FPS performance across all device tiers. Built innovative modular component architecture that promotes reusability between games, reducing development time by 30% and establishing new engineering standards.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "Firebase Analytics", "Modular Architecture", "Performance Optimization", "Real-time Analytics", "Cross-game Systems"],
    features: [
      "Modular component architecture enabling 30% faster development across titles",
      "High-performance rendering system achieving consistent 75 FPS on all device tiers",
      "Advanced load time optimization resulting in 5-second startup times",
      "Real-time analytics and A/B testing framework for data-driven feature development",
      "Cross-game progression and reward systems increasing player retention",
      "Enterprise-grade monitoring and alerting systems maintaining 99.5% uptime",
      "Automated content generation tools reducing designer workload by 40%"
    ],
    businessImpact: "$30K combined daily revenue with 225K daily active users, maintaining 99.5% stability targets and setting new performance benchmarks for PlaySimple Games",
    image: "/projects/tile-match.webp"
  },
  {
    id: "central-login-system",
    title: "Enterprise Login System",
    description: "Scalable authentication system serving 3M+ daily active users across entire PlaySimple Games ecosystem with 99.9% uptime",
    longDescription: "Architected and built enterprise-grade central login system serving 3M+ daily active users across the entire PlaySimple Games ecosystem. This critical infrastructure project utilized Golang and ScyllaDB, initially hosted on AWS and later migrated to DigitalOcean for cost optimization. The system handles massive scale authentication with 99.9% uptime, enterprise-grade security, and seamless cross-game user progression. This foundational system enables unified player experiences across all PlaySimple titles.",
    technologies: ["Golang", "ScyllaDB", "AWS", "DigitalOcean", "Microservices Architecture", "Redis", "Load Balancing", "Enterprise Security", "Cross-platform APIs"],
    features: [
      "Scalable microservices architecture handling 3M+ daily authentication requests",
      "Multi-game authentication and authorization with unified user profiles",
      "99.9% uptime with enterprise-grade reliability and disaster recovery",
      "Cross-platform user progression tracking and synchronization",
      "Advanced security features including fraud prevention and account protection",
      "Seamless migration from AWS to DigitalOcean with zero downtime",
      "Real-time user analytics and behavior tracking across all titles"
    ],
    businessImpact: "Enabling seamless experience for 3M+ daily active users across entire PlaySimple portfolio, reducing authentication latency by 60% and supporting company's scaling to multiple successful titles",
    image: "/projects/login-system.jpg"
  },
  {
    id: "destination-solitaire",
    title: "Destination Solitaire",
    description: "Travel-themed solitaire game built from conception, leading 5-developer team for 2+ years with innovative progression systems",
    longDescription: "Designed and developed Destination Solitaire from initial conception as Principal Software Engineer, leading a dedicated 5-developer team for over 2 years. This innovative twist on classic solitaire combines card gameplay with travel progression, where players visit different cities by completing increasingly challenging puzzles. The game features cross-platform architecture, seamless progression systems, and sophisticated stamp collection mechanics that drive long-term engagement.",
    technologies: ["Unity", "C#", "Golang", "ScyllaDB", "AWS", "DigitalOcean", "Cross-platform Architecture", "Real-time Sync", "Progressive Content Systems"],
    features: [
      "Innovative travel-themed progression system with 200+ global destinations",
      "Cross-platform synchronization ensuring seamless experience across iOS and Android",
      "Sophisticated stamp collection and achievement systems driving player retention",
      "Social features enabling friendly competition and progress sharing",
      "Advanced performance optimization supporting low-end devices with smooth 60 FPS",
      "Dynamic difficulty adjustment based on player skill and engagement patterns",
      "Rich visual design with authentic city landmarks and cultural elements"
    ],
    businessImpact: "Successfully launched and maintained for 2+ years with consistent user engagement, positive App Store ratings (4.5+ stars), and strong player retention metrics contributing to PlaySimple's casual gaming portfolio",
    image: "/projects/destination-solitaire.webp"
  },
  {
    id: "wordwars",
    title: "WordWars",
    description: "Multiplayer word game achieving $70K peak daily revenue with sophisticated AI and real-time PvP systems supporting thousands of concurrent users",
    longDescription: "Led technical development of WordWars as Senior Software Engineer, transforming it from concept to PlaySimple's most successful word game with $70K peak daily revenue. Built sophisticated AI-based adaptive adversary system using Branch and Bound algorithms with memory-optimized Trie structures. The game features real-time PvP communication and chat systems capable of supporting thousands of concurrent users, establishing new standards for multiplayer word gaming experiences.",
    technologies: ["Unity", "C#", "Golang", "MongoDB", "Redis", "Branch and Bound Algorithms", "Trie Structures", "Real-time Networking", "WebSocket Communications", "AI Systems"],
    features: [
      "AI-based adaptive adversary system using advanced Branch and Bound algorithms for optimal word finding",
      "Memory-optimized Trie structures enabling lightning-fast word validation and scoring",
      "Real-time PvP communication and chat systems supporting thousands of concurrent users",
      "Scalable backend architecture handling millions of daily word game matches",
      "Automated content generation tools reducing designer workload by 40% while improving quality",
      "Advanced matchmaking system ensuring balanced and engaging player experiences",
      "Crisis recovery capabilities demonstrated through 97% to 99.3% crash-free rate improvement"
    ],
    businessImpact: "$70K peak daily revenue making it PlaySimple's leading word game, serving millions of players worldwide and establishing the company's dominance in the multiplayer word game category",
    image: "/projects/wordwars.png"
  },
  {
    id: "daily-themed-crossword",
    title: "Daily Themed Crossword",
    description: "Multi-platform crossword game with innovative automated content generation reducing creation time by 10% and successful global launch",
    longDescription: "Spearheaded Daily Themed Crossword development and multi-platform launch as Software Engineer, guiding a team of 3 developers through feature development and release management. Created innovative crossword grid generator algorithm that reduced content creation time by 10%, along with robust data replication tools ensuring safe content transfer across all PlaySimple titles. The game features daily themed content across multiple categories including Movies, Sports, Technology, Games, History, and Architecture.",
    technologies: ["Unity", "C#", "Cocos2d-JS", "Golang", "MongoDB", "Redis", "Content Generation Algorithms", "Data Replication Systems", "Cross-platform Development"],
    features: [
      "Automated crossword grid generation algorithm reducing manual content creation by 10%",
      "Daily themed content across diverse categories including Movies, Sports, Technology, and History",
      "Cross-platform synchronization ensuring seamless progression across iOS and Android",
      "Robust data replication tools enabling safe content transfer across all PlaySimple titles",
      "Scalable content management system supporting hundreds of themed crossword puzzles",
      "Advanced hint and help systems improving player experience and retention",
      "Performance optimization ensuring smooth gameplay on all device tiers"
    ],
    businessImpact: "Successful multi-platform launch with strong user adoption, 10% improvement in content creation efficiency, and positive reception establishing PlaySimple's presence in the crossword gaming category",
    image: "/projects/daily-crossword.png"
  },
  {
    id: "text-summarization-research",
    title: "Automatic Text Summarization Research",
    description: "IEEE-published research on NLP-based text summarization using lexical chains and advanced scoring techniques",
    longDescription: "Academic research project during final year at VNIT Nagpur focused on 'Automatic Text Summarization of News Articles' using Natural Language Processing techniques. Published in IEEE, this research overcame traditional semantic interpretation limitations by creating summaries using topic progression derived from lexical chains. Implemented innovative pronoun resolution and new scoring techniques that significantly improved summarization accuracy and relevance.",
    technologies: ["Python", "Natural Language Processing", "Lexical Chain Analysis", "Machine Learning", "Text Processing", "Research Methodologies", "Statistical Analysis"],
    features: [
      "Advanced lexical chain analysis for topic progression identification",
      "Innovative pronoun resolution techniques improving text coherence",
      "Novel scoring mechanisms for sentence importance ranking",
      "Automated news article processing and categorization",
      "Performance evaluation against existing summarization benchmarks",
      "Scalable text processing pipeline for large document collections"
    ],
    businessImpact: "IEEE publication demonstrating research excellence and early expertise in AI/ML, contributing to academic knowledge in NLP and establishing foundation for current AI/ML learning initiatives",
    image: null
  }
];

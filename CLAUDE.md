# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. It showcases the career of a Principal Software Engineer with 9+ years of experience at PlaySimple Games, featuring responsive design, dark/light theme support, and smooth animations powered by Framer Motion.

**Core Stack:**
- Next.js 14.2.31 with App Router
- TypeScript 5 with strict mode
- Tailwind CSS 3.4.1 with custom design system
- Framer Motion 12.23.12 for animations
- next-themes 0.4.6 for theme management
- Lucide React 0.539.0 for iconography

## Development Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture & Code Structure

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with dark mode support (`darkMode: 'class'`)
- **Animations**: Framer Motion for smooth transitions
- **Theming**: next-themes for dark/light mode toggle
- **Icons**: Lucide React

### Directory Structure
```
src/
├── app/                 # Next.js App Router (App Directory)
│   ├── favicon.ico     # Favicon file
│   ├── fonts/          # Custom fonts (Geist family)
│   │   ├── GeistVF.woff       # Geist Variable Font
│   │   └── GeistMonoVF.woff   # Geist Mono Variable Font
│   ├── globals.css     # Global styles, CSS variables, Tailwind imports
│   ├── layout.tsx      # Root layout with theme provider and metadata
│   └── page.tsx        # Homepage with all portfolio sections
├── components/         # React components (functional, TypeScript)
│   ├── animated-section.tsx   # Reusable animation wrapper
│   ├── contact-section.tsx    # Contact information section
│   ├── experience-section.tsx # Work experience timeline
│   ├── footer.tsx            # Footer with social links
│   ├── header.tsx            # Navigation header with theme toggle
│   ├── hero-section.tsx      # Hero/intro section
│   ├── projects-section.tsx  # Project portfolio showcase
│   ├── skills-section.tsx    # Skills with proficiency levels
│   ├── theme-provider.tsx    # next-themes provider wrapper
│   └── theme-toggle.tsx      # Dark/light mode toggle button
├── data/               # Static content data (TypeScript)
│   ├── experience.ts   # Work experience timeline data
│   ├── personal.ts     # Personal info, contact, bio
│   ├── projects.ts     # Project portfolio with business impact
│   └── skills.ts       # Technical skills with proficiency ratings
├── lib/                # Utility libraries (currently empty)
└── types/
    └── index.ts        # TypeScript interfaces and type definitions

public/
├── projects/           # Project screenshots and images
│   ├── daily-crossword.png    # Game project images
│   ├── destination-solitaire.webp
│   ├── login-system.jpg
│   ├── tile-match.webp
│   └── wordwars.png
└── resume-dir/
    └── Resume_Prakhar_Sethi.pdf  # Downloadable resume PDF
```

### Data-Driven Content
The portfolio uses a data-driven approach where content is centralized in `src/data/` files:
- Personal information, contact details, and bio in `personal.ts`
- Work experience timeline in `experience.ts`
- Project portfolio with business impact in `projects.ts`
- Technical skills with proficiency levels in `skills.ts`

### Configuration Files
- `next.config.mjs`: Performance optimizations, image optimization, security headers, package import optimization
- `tailwind.config.ts`: Comprehensive Tailwind configuration with custom color palette, animations, and dark mode
- `tsconfig.json`: TypeScript configuration with path aliases (`@/*` → `./src/*`)
- `package.json`: Dependencies including Next.js 14, Framer Motion, Lucide React, next-themes

### Key Features
- **Theme System**: Uses CSS variables and class-based dark mode with next-themes provider
- **Animation System**: Custom Tailwind animations (fade-in, slide, scale, glow effects) + Framer Motion
- **Design System**: Sophisticated color palette with primary, accent, neutral, success, warning color schemes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints and flexible layouts
- **Performance Optimized**: Package import optimization, image optimization (WebP/AVIF), console removal in production
- **Security**: Comprehensive security headers (X-Frame-Options, CSP, CORS policies)
- **Type Safety**: Full TypeScript coverage with strict mode and custom interfaces

### Development Patterns
- **Component Architecture**: Functional components with TypeScript interfaces
- **Type System**: Centralized type definitions in `types/index.ts` (Experience, Project, Skill, PersonalInfo interfaces)
- **Styling Strategy**: Tailwind utility classes with dark mode variants (`dark:` prefix)
- **Animation Approach**: Custom Tailwind keyframes + Framer Motion for complex interactions
- **State Management**: Theme state via next-themes provider, local state with React hooks
- **Data Architecture**: Separation of concerns with content in `data/` files, types in `types/`, presentation in `components/`

## Component Overview
The portfolio is structured with section-based components:
- `hero-section.tsx`: Introduction with name, title, tagline, and CTA buttons
- `experience-section.tsx`: Professional timeline with achievements and technologies
- `projects-section.tsx`: Project showcase with business impact and technical details
- `skills-section.tsx`: Technical skills with visual proficiency indicators
- `contact-section.tsx`: Contact information and social media links
- `animated-section.tsx`: Reusable wrapper for scroll-triggered animations

## Content Management
To update portfolio content, modify the respective files in `src/data/`:
- `personal.ts`: Personal information, bio, contact details, social links
- `experience.ts`: Work history, job titles, achievements, technologies used
- `projects.ts`: Project portfolio with descriptions, features, business impact
- `skills.ts`: Technical skills organized by category with proficiency levels (0-100)

## Deployment & Performance
Optimized for Vercel deployment with:
- Automatic builds on Git push
- Package import optimization for faster builds
- Image optimization (WebP/AVIF formats)
- Console removal and CSS purging in production
- Security headers and performance monitoring
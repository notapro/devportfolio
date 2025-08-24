# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. It showcases the career of a Principal Software Engineer with 9+ years of experience at PlaySimple Games, featuring responsive design, dark/light theme support, and smooth animations powered by Framer Motion.

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
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles and CSS variables
├── components/         # React components
│   ├── *-section.tsx   # Page sections (hero, experience, projects, etc.)
│   ├── header.tsx      # Navigation header
│   ├── footer.tsx      # Footer component
│   └── theme-*.tsx     # Theme-related components
├── data/              # Static data files
│   ├── personal.ts    # Personal information and contact details
│   ├── experience.ts  # Work experience data
│   ├── projects.ts    # Project portfolio data
│   └── skills.ts      # Technical skills and proficiencies
└── types/
    └── index.ts       # TypeScript type definitions

public/
├── projects/          # Project images and assets
└── resume-dir/        # Resume PDF file
```

### Data-Driven Content
The portfolio uses a data-driven approach where content is centralized in `src/data/` files:
- Personal information, contact details, and bio in `personal.ts`
- Work experience timeline in `experience.ts`
- Project portfolio with business impact in `projects.ts`
- Technical skills with proficiency levels in `skills.ts`

### Configuration Files
- `next.config.mjs`: Performance optimizations, image optimization, security headers
- `tailwind.config.ts`: Tailwind configuration with dark mode support
- `tsconfig.json`: TypeScript configuration with path aliases (`@/*` → `./src/*`)
- `.eslintrc.json`: ESLint extends Next.js core web vitals and TypeScript rules

### Key Features
- **Theme System**: Uses CSS variables and class-based dark mode
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance Optimized**: Image optimization, bundle optimization, console removal in production
- **SEO Ready**: Comprehensive metadata, OpenGraph tags, structured data
- **Security**: Security headers configured in Next.js config

### Development Patterns
- Components follow functional component patterns with TypeScript
- All data types are defined in `types/index.ts`
- Styling uses Tailwind utility classes with dark mode variants
- Animation states managed through Framer Motion
- Theme state managed via next-themes provider

## Content Updates
To update portfolio content, modify the respective files in `src/data/`:
- Update personal details in `personal.ts`
- Add/modify work experience in `experience.ts`  
- Update project portfolio in `projects.ts`
- Adjust skill proficiencies in `skills.ts`

## Deployment
Optimized for Vercel deployment with automatic builds on Git push. Production builds include console removal, CSS purging, and image optimization.
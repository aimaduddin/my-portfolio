import { Skill } from '@/types/skill'

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: '/icons/react.svg',
    level: 90,
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    level: 85,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    level: 85,
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwind.svg',
    level: 90,
    category: 'frontend'
  },
  // Backend
  {
    name: 'Node.js',
    icon: '/icons/nodejs.svg',
    level: 80,
    category: 'backend'
  },
  {
    name: 'Python',
    icon: '/icons/python.svg',
    level: 75,
    category: 'backend'
  },
  {
    name: 'Express',
    icon: '/icons/express.svg',
    level: 80,
    category: 'backend'
  },
  // Database
  {
    name: 'MongoDB',
    icon: '/icons/mongodb.svg',
    level: 85,
    category: 'database'
  },
  {
    name: 'PostgreSQL',
    icon: '/icons/postgresql.svg',
    level: 80,
    category: 'database'
  },
  // Tools
  {
    name: 'Git',
    icon: '/icons/git.svg',
    level: 90,
    category: 'tools'
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
    level: 75,
    category: 'tools'
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
    level: 70,
    category: 'tools'
  }
]

export const categories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database',
  tools: 'Tools & Deployment'
} 
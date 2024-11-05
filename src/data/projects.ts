import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce analytics with real-time data visualization, inventory management, and sales tracking.',
    image: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Social Media Platform',
    description: 'A modern social networking platform with real-time messaging, post sharing, and user interactions.',
    image: 'https://picsum.photos/800/600?random=2',
    tags: ['Next.js', 'MongoDB', 'Socket.io', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates various types of content using machine learning algorithms.',
    image: 'https://picsum.photos/800/600?random=3',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  }
] 
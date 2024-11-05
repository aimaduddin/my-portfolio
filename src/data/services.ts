import { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: '1',
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive user interfaces with modern web technologies.',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
    features: [
      'Responsive Web Design',
      'Single Page Applications',
      'Cross-browser Compatibility',
      'Performance Optimization',
      'UI/UX Implementation'
    ]
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    features: [
      'RESTful API Development',
      'Database Design',
      'Authentication & Authorization',
      'Server Management',
      'API Documentation'
    ]
  },
  {
    id: '3',
    title: 'Full Stack Solutions',
    description: 'End-to-end web application development with modern tech stack.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
    features: [
      'Full Project Architecture',
      'Database Integration',
      'Third-party API Integration',
      'Deployment & DevOps',
      'Maintenance & Support'
    ]
  },
  {
    id: '4',
    title: 'Technical Consultation',
    description: 'Expert advice on web development technologies and best practices.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Technology Stack Selection',
      'Code Review & Optimization',
      'Architecture Planning',
      'Performance Auditing',
      'Security Assessment'
    ]
  }
] 
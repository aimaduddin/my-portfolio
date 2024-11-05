import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: [
      'Led development of multiple high-impact web applications',
      'Implemented modern frontend architectures using Next.js and TypeScript',
      'Mentored junior developers and conducted code reviews'
    ],
    type: 'work'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    location: 'New York, NY',
    period: '2019 - 2021',
    description: [
      'Developed and maintained full-stack web applications',
      'Worked with React, Node.js, and MongoDB',
      'Improved application performance by 40%'
    ],
    type: 'work'
  },
  {
    id: '3',
    title: 'Computer Science',
    company: 'University of Technology',
    location: 'Boston, MA',
    period: '2015 - 2019',
    description: [
      'Bachelor of Science in Computer Science',
      'Focus on Software Engineering and Web Technologies',
      'Graduated with Honors'
    ],
    type: 'education'
  }
] 
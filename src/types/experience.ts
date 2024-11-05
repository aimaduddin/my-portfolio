export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  type: 'work' | 'education'
} 
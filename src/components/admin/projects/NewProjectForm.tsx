'use client'

import { useRouter } from 'next/navigation'
import ProjectForm from './ProjectForm'

export default function NewProjectForm() {
  const router = useRouter()

  return (
    <ProjectForm
      onSuccess={() => {
        router.push('/admin/projects')
        router.refresh()
      }}
    />
  )
} 
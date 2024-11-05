'use client'

import { useRouter } from 'next/navigation'
import ExperienceForm from './ExperienceForm'

export default function NewExperienceForm() {
  const router = useRouter()

  return (
    <ExperienceForm
      onSuccess={() => {
        router.push('/admin/experiences')
        router.refresh()
      }}
    />
  )
} 
'use client'

import { useRouter } from 'next/navigation'
import ServiceForm from './ServiceForm'

export default function NewServiceForm() {
  const router = useRouter()

  return (
    <ServiceForm
      onSuccess={() => {
        router.push('/admin/services')
        router.refresh()
      }}
    />
  )
} 
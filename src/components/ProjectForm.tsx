'use client'

import { supabase } from '@/lib/supabase'

export default function ProjectForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Example insertion
    const { data, error } = await supabase
      .from('projects')
      .insert([
        { title: 'New Project', description: 'Project description' }
      ])
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form content */}
    </form>
  )
} 
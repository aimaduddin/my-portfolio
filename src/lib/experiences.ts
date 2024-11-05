import { createServerClient } from './supabase-server'
import { Database } from '@/types/supabase'

type Experience = Database['public']['Tables']['experiences']['Row']
type NewExperience = Database['public']['Tables']['experiences']['Insert']
type UpdateExperience = Database['public']['Tables']['experiences']['Update']

export async function getExperiences() {
  const supabase = createServerClient()
  const { data: experiences, error } = await supabase
    .from('experiences')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching experiences:', error)
    throw new Error(`Failed to fetch experiences: ${error.message}`)
  }
  
  return experiences
}

export async function getExperience(id: string) {
  const supabase = createServerClient()
  const { data: experience, error } = await supabase
    .from('experiences')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching experience:', error)
    throw new Error(`Failed to fetch experience: ${error.message}`)
  }
  
  return experience
}

export async function createExperience(experience: NewExperience) {
  const supabase = createServerClient()
  
  // Get the highest order number and add 1
  const { data: lastExperience } = await supabase
    .from('experiences')
    .select('order')
    .order('order', { ascending: false })
    .limit(1)

  const newOrder = lastExperience && lastExperience[0] ? lastExperience[0].order + 1 : 1
  
  const { data, error } = await supabase
    .from('experiences')
    .insert([{ ...experience, order: newOrder }])
    .select()
    .single()

  if (error) {
    console.error('Error creating experience:', error)
    throw new Error(`Failed to create experience: ${error.message}`)
  }

  return data
}

export async function updateExperience(id: string, experience: UpdateExperience) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('experiences')
    .update(experience)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating experience:', error)
    throw new Error(`Failed to update experience: ${error.message}`)
  }

  return data
}

export async function deleteExperience(id: string) {
  const supabase = createServerClient()
  const { error } = await supabase
    .from('experiences')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting experience:', error)
    throw new Error(`Failed to delete experience: ${error.message}`)
  }
  
  return true
}

export async function getPublicExperiences() {
  const supabase = createServerClient()
  const { data: experiences, error } = await supabase
    .from('experiences')
    .select('*')
    .order('order', { ascending: false })

  if (error) {
    console.error('Error fetching public experiences:', error)
    throw new Error(`Failed to fetch public experiences: ${error.message}`)
  }
  
  return experiences
}

export async function getExperiencesWithPagination(
  page: number = 1,
  limit: number = 5,
  search: string = ''
) {
  const supabase = createServerClient()
  const offset = (page - 1) * limit

  let query = supabase
    .from('experiences')
    .select('*', { count: 'exact' })
    .order('order', { ascending: true })
    
  // Add search filter if search term exists
  if (search) {
    query = query.or(`title.ilike.%${search}%,company.ilike.%${search}%,description.ilike.%${search}%`)
  }

  const { data: experiences, error, count } = await query
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Error fetching experiences:', error)
    throw new Error(`Failed to fetch experiences: ${error.message}`)
  }
  
  return {
    experiences,
    total: count ?? 0,
    page,
    totalPages: Math.ceil((count ?? 0) / limit)
  }
}

export async function updateExperienceOrder(id: string, newOrder: number) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('experiences')
    .update({ order: newOrder })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating experience order:', error)
    throw new Error(`Failed to update experience order: ${error.message}`)
  }

  return data
} 
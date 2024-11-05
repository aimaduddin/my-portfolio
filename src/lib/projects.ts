import { createServerClient } from './supabase-server'
import { Database } from '@/types/supabase'

type Project = Database['public']['Tables']['projects']['Row']
type NewProject = Database['public']['Tables']['projects']['Insert']
type UpdateProject = Database['public']['Tables']['projects']['Update']

export async function getProjects() {
  const supabase = createServerClient()
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    throw new Error(`Failed to fetch projects: ${error.message}`)
  }
  
  return projects
}

export async function getProject(id: string) {
  const supabase = createServerClient()
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching project:', error)
    throw new Error(`Failed to fetch project: ${error.message}`)
  }
  
  return project
}

export async function createProject(project: NewProject) {
  const supabase = createServerClient()
  
  console.log('Creating project with data:', project) // Debug log
  
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
    .single()

  if (error) {
    console.error('Error creating project:', error)
    throw new Error(`Failed to create project: ${error.message}`)
  }

  if (!data) {
    throw new Error('No data returned after creating project')
  }
  
  return data
}

export async function updateProject(id: string, project: UpdateProject) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('projects')
    .update(project)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating project:', error)
    throw new Error(`Failed to update project: ${error.message}`)
  }

  if (!data) {
    throw new Error('No data returned after updating project')
  }
  
  return data
}

export async function deleteProject(id: string) {
  const supabase = createServerClient()
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting project:', error)
    throw new Error(`Failed to delete project: ${error.message}`)
  }
  
  return true
}

export async function getPublicProjects() {
  const supabase = createServerClient()
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6) // Limit to 6 projects or adjust as needed

  if (error) {
    console.error('Error fetching public projects:', error)
    throw new Error(`Failed to fetch public projects: ${error.message}`)
  }
  
  return projects
} 
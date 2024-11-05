import { createServerClient } from './supabase-server'
import { Database } from '@/types/supabase'

type Service = Database['public']['Tables']['services']['Row']
type NewService = Database['public']['Tables']['services']['Insert']
type UpdateService = Database['public']['Tables']['services']['Update']

export async function getServices() {
  const supabase = createServerClient()
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching services:', error)
    throw new Error(`Failed to fetch services: ${error.message}`)
  }
  
  return services
}

export async function getService(id: string) {
  const supabase = createServerClient()
  const { data: service, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching service:', error)
    throw new Error(`Failed to fetch service: ${error.message}`)
  }
  
  return service
}

export async function createService(service: NewService) {
  const supabase = createServerClient()
  
  // Get the highest order number and add 1
  const { data: lastService } = await supabase
    .from('services')
    .select('order')
    .order('order', { ascending: false })
    .limit(1)

  const newOrder = lastService && lastService[0] ? lastService[0].order + 1 : 1
  
  const { data, error } = await supabase
    .from('services')
    .insert([{ ...service, order: newOrder }])
    .select()
    .single()

  if (error) {
    console.error('Error creating service:', error)
    throw new Error(`Failed to create service: ${error.message}`)
  }

  return data
}

export async function updateService(id: string, service: UpdateService) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('services')
    .update(service)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating service:', error)
    throw new Error(`Failed to update service: ${error.message}`)
  }

  return data
}

export async function deleteService(id: string) {
  const supabase = createServerClient()
  const { error } = await supabase
    .from('services')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting service:', error)
    throw new Error(`Failed to delete service: ${error.message}`)
  }
  
  return true
}

export async function getPublicServices() {
  const supabase = createServerClient()
  const { data: services, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching public services:', error)
    throw new Error(`Failed to fetch public services: ${error.message}`)
  }
  
  return services
}

export async function updateServiceOrder(id: string, newOrder: number) {
  const supabase = createServerClient()
  const { data, error } = await supabase
    .from('services')
    .update({ order: newOrder })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating service order:', error)
    throw new Error(`Failed to update service order: ${error.message}`)
  }

  return data
}

export async function getServicesWithPagination(
  page: number = 1,
  limit: number = 5,
  search: string = ''
) {
  const supabase = createServerClient()
  const offset = (page - 1) * limit

  let query = supabase
    .from('services')
    .select('*', { count: 'exact' })
    .order('order', { ascending: true })
    
  // Add search filter if search term exists
  if (search) {
    query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`)
  }

  const { data: services, error, count } = await query
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Error fetching services:', error)
    throw new Error(`Failed to fetch services: ${error.message}`)
  }
  
  return {
    services,
    total: count ?? 0,
    page,
    totalPages: Math.ceil((count ?? 0) / limit)
  }
} 
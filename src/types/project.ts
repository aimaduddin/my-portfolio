import { Database } from './supabase'

export type Project = Database['public']['Tables']['projects']['Row'] 
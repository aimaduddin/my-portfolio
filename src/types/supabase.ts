export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          image_url: string | null
          live_url: string | null
          github_url: string | null
          tags: string[] | null
          is_featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          image_url?: string | null
          live_url?: string | null
          github_url?: string | null
          tags?: string[] | null
          is_featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          image_url?: string | null
          live_url?: string | null
          github_url?: string | null
          tags?: string[] | null
          is_featured?: boolean
        }
      },
      services: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          icon: string | null
          is_active: boolean
          features: string[] | null
          order: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          icon?: string | null
          is_active?: boolean
          features?: string[] | null
          order?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          icon?: string | null
          is_active?: boolean
          features?: string[] | null
          order?: number
        }
      },
      experiences: {
        Row: {
          id: string
          created_at: string
          title: string
          company: string
          location: string | null
          start_date: string
          end_date: string | null
          description: string | null
          responsibilities: string[] | null
          is_current: boolean
          order: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          company: string
          location?: string | null
          start_date: string
          end_date?: string | null
          description?: string | null
          responsibilities?: string[] | null
          is_current?: boolean
          order?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          company?: string
          location?: string | null
          start_date?: string
          end_date?: string | null
          description?: string | null
          responsibilities?: string[] | null
          is_current?: boolean
          order?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
  }
} 
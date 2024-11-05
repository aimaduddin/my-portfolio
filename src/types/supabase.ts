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
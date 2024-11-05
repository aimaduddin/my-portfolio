'use client'

import { useState } from 'react'
import { Database } from '@/types/supabase'
import ProjectForm from './ProjectForm'

type Project = Database['public']['Tables']['projects']['Row']

export default function ProjectList({ 
  initialProjects 
}: { 
  initialProjects: Project[] 
}) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [editingId, setEditingId] = useState<string | null>(null)

  return (
    <div className="grid gap-4">
      {projects.map(project => (
        <div key={project.id} className="bg-white p-4 rounded-lg shadow">
          {editingId === project.id ? (
            <ProjectForm
              project={project}
              onSuccess={(updatedProject) => {
                setProjects(projects.map(p => 
                  p.id === updatedProject.id ? updatedProject : p
                ))
                setEditingId(null)
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingId(project.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      if (confirm('Are you sure you want to delete this project?')) {
                        await fetch(`/api/projects/${project.id}`, {
                          method: 'DELETE',
                        })
                        setProjects(projects.filter(p => p.id !== project.id))
                      }
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {project.image_url && (
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="mt-2 w-full h-48 object-cover rounded"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 
'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    setProjects(initialProjects)
  }, [initialProjects])

  return (
    <div className="grid gap-4">
      {projects.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No projects found
        </div>
      ) : (
        projects.map((project) => (
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
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
                <div className="mt-2 text-sm text-gray-500">
                  {project.is_featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
} 
'use client'
import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { projects } from '@/data/projects'

const columns = [
  { key: 'title', label: 'Title' },
  { 
    key: 'description', 
    label: 'Description',
    render: (value: string) => value.length > 100 ? value.substring(0, 100) + '...' : value
  },
  { 
    key: 'tags', 
    label: 'Technologies',
    render: (value: string[]) => value.join(', ')
  },
]

export default function ProjectsAdmin() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleEdit = (project: any) => {
    setSelectedProject(project)
    setIsEditing(true)
  }

  const handleDelete = async (project: any) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      // Add your delete logic here
      console.log('Deleting project:', project)
    }
  }

  return (
    <div className="max-w-full">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <button
          onClick={() => {
            setSelectedProject(null)
            setIsEditing(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Project
        </button>
      </div>

      <DataTable
        columns={columns}
        data={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 
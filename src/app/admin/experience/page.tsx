'use client'
import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { experiences } from '@/data/experience'

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'company', label: 'Company' },
  { key: 'period', label: 'Period' },
  { key: 'type', label: 'Type' },
]

export default function ExperienceAdmin() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(null)

  const handleEdit = (experience: any) => {
    setSelectedExperience(experience)
    setIsEditing(true)
  }

  const handleDelete = async (experience: any) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      console.log('Deleting experience:', experience)
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Experience</h1>
        <button
          onClick={() => {
            setSelectedExperience(null)
            setIsEditing(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Experience
        </button>
      </div>

      <DataTable
        columns={columns}
        data={experiences}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 
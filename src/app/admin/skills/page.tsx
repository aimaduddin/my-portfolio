'use client'
import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { skills } from '@/data/skills'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'level', label: 'Level' },
  { key: 'category', label: 'Category' },
]

export default function SkillsAdmin() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleEdit = (skill: any) => {
    setSelectedSkill(skill)
    setIsEditing(true)
  }

  const handleDelete = async (skill: any) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      console.log('Deleting skill:', skill)
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Skills</h1>
        <button
          onClick={() => {
            setSelectedSkill(null)
            setIsEditing(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Skill
        </button>
      </div>

      <DataTable
        columns={columns}
        data={skills}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 
'use client'
import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { services } from '@/data/services'

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
]

export default function ServicesAdmin() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleEdit = (service: any) => {
    setSelectedService(service)
    setIsEditing(true)
  }

  const handleDelete = async (service: any) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      console.log('Deleting service:', service)
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
        <button
          onClick={() => {
            setSelectedService(null)
            setIsEditing(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Service
        </button>
      </div>

      <DataTable
        columns={columns}
        data={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 
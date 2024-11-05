'use client'
import { useState } from 'react'
import DataTable from '@/components/admin/DataTable'
import { testimonials } from '@/data/testimonials'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'company', label: 'Company' },
  { key: 'rating', label: 'Rating' },
]

export default function TestimonialsAdmin() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  const handleEdit = (testimonial: any) => {
    setSelectedTestimonial(testimonial)
    setIsEditing(true)
  }

  const handleDelete = async (testimonial: any) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      console.log('Deleting testimonial:', testimonial)
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Testimonials</h1>
        <button
          onClick={() => {
            setSelectedTestimonial(null)
            setIsEditing(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Testimonial
        </button>
      </div>

      <DataTable
        columns={columns}
        data={testimonials}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
} 
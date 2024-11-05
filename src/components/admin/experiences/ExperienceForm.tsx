'use client'

import { useState } from 'react'
import { Database } from '@/types/supabase'

type Experience = Database['public']['Tables']['experiences']['Row']
type NewExperience = Database['public']['Tables']['experiences']['Insert']

interface ExperienceFormProps {
  experience?: Experience
  onSuccess: (experience: Experience) => void
  onCancel?: () => void
}

export default function ExperienceForm({ experience, onSuccess, onCancel }: ExperienceFormProps) {
  const [formData, setFormData] = useState<NewExperience>({
    title: experience?.title ?? '',
    company: experience?.company ?? '',
    location: experience?.location ?? '',
    start_date: experience?.start_date ?? '',
    end_date: experience?.end_date ?? '',
    description: experience?.description ?? '',
    responsibilities: experience?.responsibilities ?? [],
    is_current: experience?.is_current ?? false,
    order: experience?.order ?? 0
  })
  const [responsibilityInput, setResponsibilityInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddResponsibility = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && responsibilityInput.trim()) {
      e.preventDefault()
      setFormData(prev => ({
        ...prev,
        responsibilities: [...(prev.responsibilities || []), responsibilityInput.trim()]
      }))
      setResponsibilityInput('')
    }
  }

  const handleRemoveResponsibility = (responsibilityToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      responsibilities: prev.responsibilities?.filter(r => r !== responsibilityToRemove) || []
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    
    try {
      const url = experience 
        ? `/api/experiences/${experience.id}`
        : '/api/experiences'
      
      const response = await fetch(url, {
        method: experience ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }

      const savedExperience = await response.json()
      onSuccess(savedExperience)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md">
          {error}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          value={formData.company}
          onChange={e => setFormData({ ...formData, company: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={formData.location ?? ''}
          onChange={e => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={formData.start_date}
            onChange={e => setFormData({ ...formData, start_date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            value={formData.end_date ?? ''}
            onChange={e => setFormData({ ...formData, end_date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            disabled={formData.is_current}
          />
        </div>
      </div>

      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={formData.is_current}
            onChange={(e) => {
              setFormData({ 
                ...formData, 
                is_current: e.target.checked,
                end_date: e.target.checked ? null : formData.end_date 
              })
            }}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-700">Current Position</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description ?? ''}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
        <div className="mt-1">
          <input
            type="text"
            value={responsibilityInput}
            onChange={(e) => setResponsibilityInput(e.target.value)}
            onKeyDown={handleAddResponsibility}
            placeholder="Press Enter to add responsibility"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        {formData.responsibilities && formData.responsibilities.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.responsibilities.map((responsibility, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
              >
                {responsibility}
                <button
                  type="button"
                  onClick={() => handleRemoveResponsibility(responsibility)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : experience ? 'Update' : 'Create'} Experience
        </button>
      </div>
    </form>
  )
} 
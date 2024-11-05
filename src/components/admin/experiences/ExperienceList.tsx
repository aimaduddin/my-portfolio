'use client'

import { useState, useEffect } from 'react'
import { Database } from '@/types/supabase'
import ExperienceForm from './ExperienceForm'
import { format } from 'date-fns'

type Experience = Database['public']['Tables']['experiences']['Row']

export default function ExperienceList({ 
  initialExperiences 
}: { 
  initialExperiences: Experience[] 
}) {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences)
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    setExperiences(initialExperiences)
  }, [initialExperiences])

  return (
    <div className="grid gap-4">
      {experiences.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No experiences found
        </div>
      ) : (
        experiences.map((experience) => (
          <div key={experience.id} className="bg-white p-4 rounded-lg shadow">
            {editingId === experience.id ? (
              <ExperienceForm
                experience={experience}
                onSuccess={(updatedExperience) => {
                  setExperiences(experiences.map(e => 
                    e.id === updatedExperience.id ? updatedExperience : e
                  ))
                  setEditingId(null)
                }}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{experience.title}</h3>
                    <p className="text-gray-600 font-medium">{experience.company}</p>
                    {experience.location && (
                      <p className="text-gray-500">{experience.location}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-1">
                      {format(new Date(experience.start_date), 'MMM yyyy')} - {' '}
                      {experience.is_current 
                        ? 'Present'
                        : experience.end_date 
                          ? format(new Date(experience.end_date), 'MMM yyyy')
                          : ''
                      }
                    </p>
                    <p className="text-gray-600 mt-2">{experience.description}</p>
                    {experience.responsibilities && experience.responsibilities.length > 0 && (
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {experience.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-gray-600">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(experience.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (confirm('Are you sure you want to delete this experience?')) {
                          await fetch(`/api/experiences/${experience.id}`, {
                            method: 'DELETE',
                          })
                          setExperiences(experiences.filter(e => e.id !== experience.id))
                        }
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {experience.is_current && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Current Position
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
'use client'

import { useState, useEffect } from 'react'
import { Database } from '@/types/supabase'
import ServiceForm from './ServiceForm'

type Service = Database['public']['Tables']['services']['Row']

export default function ServiceList({ 
  initialServices 
}: { 
  initialServices: Service[] 
}) {
  const [services, setServices] = useState<Service[]>(initialServices)
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    setServices(initialServices)
  }, [initialServices])

  return (
    <div className="grid gap-4">
      {services.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No services found
        </div>
      ) : (
        services.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow">
            {editingId === service.id ? (
              <ServiceForm
                service={service}
                onSuccess={(updatedService) => {
                  setServices(services.map(s => 
                    s.id === updatedService.id ? updatedService : s
                  ))
                  setEditingId(null)
                }}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    {service.features && service.features.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(service.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        if (confirm('Are you sure you want to delete this service?')) {
                          await fetch(`/api/services/${service.id}`, {
                            method: 'DELETE',
                          })
                          setServices(services.filter(s => s.id !== service.id))
                        }
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500 flex gap-2">
                  {service.is_active ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Inactive
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
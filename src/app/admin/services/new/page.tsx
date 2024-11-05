import NewServiceForm from '@/components/admin/services/NewServiceForm'

export default function NewServicePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create New Service</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <NewServiceForm />
      </div>
    </div>
  )
} 
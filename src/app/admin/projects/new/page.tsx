import NewProjectForm from '@/components/admin/projects/NewProjectForm'

export default function NewProjectPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create New Project</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <NewProjectForm />
      </div>
    </div>
  )
} 
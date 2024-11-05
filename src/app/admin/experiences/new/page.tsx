import NewExperienceForm from '@/components/admin/experiences/NewExperienceForm'

export default function NewExperiencePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Create New Experience</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <NewExperienceForm />
      </div>
    </div>
  )
} 
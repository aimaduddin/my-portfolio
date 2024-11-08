import { getProjects } from '@/lib/projects'
import { getServices } from '@/lib/services'
import Link from 'next/link'

export default async function AdminPage() {
  const [projects, services] = await Promise.all([
    getProjects(),
    getServices()
  ])

  const projectCount = projects.length
  const serviceCount = services.length

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Projects</h3>
          <p className="text-3xl font-bold text-blue-600">{projectCount}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Services</h3>
          <p className="text-3xl font-bold text-blue-600">{serviceCount}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Testimonials</h3>
          <p className="text-3xl font-bold text-blue-600">8</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/projects"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Manage Projects
            </h3>
            <p className="text-gray-600">
              Add, edit, or remove portfolio projects
            </p>
          </Link>

          <Link
            href="/admin/services"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Manage Services
            </h3>
            <p className="text-gray-600">
              Update your service offerings
            </p>
          </Link>

          <Link
            href="/admin/testimonials"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Manage Testimonials
            </h3>
            <p className="text-gray-600">
              Add or update client testimonials
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
} 
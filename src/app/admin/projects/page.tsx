import { getProjects } from '@/lib/projects'
import ProjectList from '@/components/admin/projects/ProjectList'
import NewProjectButton from '@/components/admin/projects/NewProjectButton'

export default async function ProjectsPage() {
  const projects = getProjects()

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <NewProjectButton />
      </div>
      <ProjectList initialProjects={await projects} />
    </div>
  )
}
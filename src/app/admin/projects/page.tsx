import { getProjectsWithPagination } from '@/lib/projects'
import ProjectList from '@/components/admin/projects/ProjectList'
import NewProjectButton from '@/components/admin/projects/NewProjectButton'
import SearchBar from '@/components/admin/projects/SearchBar'
import Pagination from '@/components/admin/projects/Pagination'

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string }
}) {
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ''
  const { projects, total, totalPages } = await getProjectsWithPagination(page, 5, search)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <NewProjectButton />
      </div>

      <div className="mb-6">
        <SearchBar defaultValue={search} />
      </div>

      <ProjectList initialProjects={projects} />

      <div className="mt-6">
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Total Projects: {total}
      </div>
    </div>
  )
}
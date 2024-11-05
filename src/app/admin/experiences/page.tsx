import { getExperiencesWithPagination } from '@/lib/experiences'
import ExperienceList from '@/components/admin/experiences/ExperienceList'
import NewExperienceButton from '@/components/admin/experiences/NewExperienceButton'
import SearchBar from '@/components/admin/experiences/SearchBar'
import Pagination from '@/components/admin/experiences/Pagination'

export default async function ExperiencesPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string }
}) {
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ''
  const { experiences, total, totalPages } = await getExperiencesWithPagination(page, 5, search)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Experiences</h1>
        <NewExperienceButton />
      </div>

      <div className="mb-6">
        <SearchBar defaultValue={search} />
      </div>

      <ExperienceList initialExperiences={experiences} />

      <div className="mt-6">
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Total Experiences: {total}
      </div>
    </div>
  )
} 
'use client'
import { getServicesWithPagination } from '@/lib/services'
import ServiceList from '@/components/admin/services/ServiceList'
import NewServiceButton from '@/components/admin/services/NewServiceButton'
import SearchBar from '@/components/admin/services/SearchBar'
import Pagination from '@/components/admin/services/Pagination'

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string }
}) {
  const page = Number(searchParams.page) || 1
  const search = searchParams.search || ''
  const { services, total, totalPages } = await getServicesWithPagination(page, 5, search)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Services</h1>
        <NewServiceButton />
      </div>

      <div className="mb-6">
        <SearchBar defaultValue={search} />
      </div>

      <ServiceList initialServices={services} />

      <div className="mt-6">
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Total Services: {total}
      </div>
    </div>
  )
} 
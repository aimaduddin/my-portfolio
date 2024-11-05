import AdminSidebar from '@/components/admin/AdminSidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Portfolio',
  description: 'Admin dashboard to manage portfolio content',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
} 
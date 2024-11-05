import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminSidebar from '@/components/admin/AdminSidebar'
import { Metadata } from 'next'
import SignOutButton from "./SignOutButton";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Portfolio',
  description: 'Admin dashboard to manage portfolio content',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <header className="bg-white shadow p-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                target="_blank"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className="w-4 h-4"
                >
                  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                View Site
              </Link>
              <SignOutButton />
            </div>
          </header>
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
} 
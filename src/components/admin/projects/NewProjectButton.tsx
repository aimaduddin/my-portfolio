'use client'

import Link from 'next/link'

export default function NewProjectButton() {
  return (
    <Link
      href="/admin/projects/new"
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
    >
      New Project
    </Link>
  )
}

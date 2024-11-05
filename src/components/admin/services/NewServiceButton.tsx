'use client'

import Link from 'next/link'

export default function NewServiceButton() {
  return (
    <Link
      href="/admin/services/new"
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
    >
      New Service
    </Link>
  )
} 
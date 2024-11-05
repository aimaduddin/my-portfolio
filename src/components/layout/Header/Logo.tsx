import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="flex items-center">
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#000"
          />
          <path
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM20 6a2 2 0 11-4 0 2 2 0 014 0zM12 19a2 2 0 100-4 2 2 0 000 4z"
            fill="#FFF"
          />
        </svg>
        <p className="ml-2 text-xl font-semibold">Logoipsum</p>
      </Link>
    </div>
  )
} 
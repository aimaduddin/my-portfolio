'use client'
import { scrollTo } from '@/utils/scrollTo'

const navItems = [
  { href: 'home', label: 'Home' },
  { href: 'projects', label: 'Projects' },
  { href: 'skills', label: 'Skills' },
  { href: 'about', label: 'About' },
  { href: 'services', label: 'Services' },
  { href: 'contact', label: 'Contact' },
]

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => scrollTo(item.href)}
          className="text-gray-700 hover:text-gray-900 cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
} 
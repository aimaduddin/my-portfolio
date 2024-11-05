export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} • Made with ❤️ by{' '}
            <a
              href="https://github.com/aimaaimaduddin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Aima Aimaduddin
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
} 
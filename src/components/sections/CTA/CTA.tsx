'use client'
import { motion } from 'framer-motion'
import { scrollTo } from '@/utils/scrollTo'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-8 md:p-12 shadow-lg overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              I'm currently available for freelance work. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('contact')}
                className="bg-white text-blue-700 hover:bg-gray-50 hover:text-blue-800 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="bg-blue-800 text-white hover:bg-blue-900 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-white/20"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
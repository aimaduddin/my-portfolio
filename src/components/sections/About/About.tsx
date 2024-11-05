'use client'
import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600">
            A passionate developer with a love for creating beautiful and functional web applications
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="prose prose-lg max-w-none">
              <p>
                With over 5 years of experience in web development, I specialize in building 
                modern web applications using cutting-edge technologies. My passion lies in 
                creating intuitive user interfaces and solving complex problems through clean, 
                efficient code.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies and best practices in web development. When I'm not coding, 
                you can find me contributing to open-source projects or sharing my knowledge 
                through tech blogs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

            {/* Timeline entries */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between 
                    ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm 
                        ${experience.type === 'work' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                        } mb-3`}
                      >
                        {experience.type === 'work' ? 'Work' : 'Education'}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {experience.company} • {experience.location}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">{experience.period}</p>
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 border-white 
                      ${experience.type === 'work' ? 'bg-blue-600' : 'bg-purple-600'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
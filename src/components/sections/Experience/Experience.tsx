import { getPublicExperiences } from '@/lib/experiences'
import { format } from 'date-fns'

export default async function Experience() {
  const experiences = await getPublicExperiences()

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                    <p className="text-gray-700 font-medium">{experience.company}</p>
                    {experience.location && (
                      <p className="text-gray-600">{experience.location}</p>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {format(new Date(experience.start_date), 'MMM yyyy')} - {' '}
                    {experience.is_current 
                      ? 'Present'
                      : experience.end_date 
                        ? format(new Date(experience.end_date), 'MMM yyyy')
                        : ''
                    }
                  </p>
                </div>
                {experience.description && (
                  <p className="mt-4 text-gray-600">{experience.description}</p>
                )}
                {experience.responsibilities && experience.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
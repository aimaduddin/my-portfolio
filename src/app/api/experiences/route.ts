import { NextResponse } from 'next/server'
import { createExperience, getExperiences } from '@/lib/experiences'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const experiences = await getExperiences()
    return NextResponse.json(experiences)
  } catch (error) {
    console.error('Error in GET /api/experiences:', error)
    return NextResponse.json({ error: 'Error fetching experiences' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const experience = await request.json()
    const newExperience = await createExperience(experience)
    return NextResponse.json(newExperience)
  } catch (error) {
    console.error('Error in POST /api/experiences:', error)
    return NextResponse.json(
      { 
        error: 'Error creating experience', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 
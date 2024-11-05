import { NextResponse } from 'next/server'
import { createProject, getProjects } from '@/lib/projects'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const projects = await getProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error in GET /api/projects:', error)
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const project = await request.json()
    console.log('Received project data:', project)

    const newProject = await createProject(project)
    console.log('Created project:', newProject)
    
    return NextResponse.json(newProject)
  } catch (error) {
    console.error('Detailed error in POST /api/projects:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    return NextResponse.json(
      { 
        error: 'Error creating project', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 
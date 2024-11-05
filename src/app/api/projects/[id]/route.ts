import { NextResponse } from 'next/server'
import { getProject, updateProject, deleteProject } from '@/lib/projects'
import { auth } from '@clerk/nextjs/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const project = await getProject(params.id)
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error in GET /api/projects/[id]:', error)
    return NextResponse.json({ error: 'Error fetching project' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const updates = await request.json()
    const project = await updateProject(params.id, updates)
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error in PUT /api/projects/[id]:', error)
    return NextResponse.json({ error: 'Error updating project' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await deleteProject(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/projects/[id]:', error)
    return NextResponse.json({ error: 'Error deleting project' }, { status: 500 })
  }
} 
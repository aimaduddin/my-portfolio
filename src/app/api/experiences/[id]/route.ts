import { NextResponse } from 'next/server'
import { getExperience, updateExperience, deleteExperience } from '@/lib/experiences'
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

    const experience = await getExperience(params.id)
    return NextResponse.json(experience)
  } catch (error) {
    console.error('Error in GET /api/experiences/[id]:', error)
    return NextResponse.json({ error: 'Error fetching experience' }, { status: 500 })
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
    const experience = await updateExperience(params.id, updates)
    return NextResponse.json(experience)
  } catch (error) {
    console.error('Error in PUT /api/experiences/[id]:', error)
    return NextResponse.json({ error: 'Error updating experience' }, { status: 500 })
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

    await deleteExperience(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/experiences/[id]:', error)
    return NextResponse.json({ error: 'Error deleting experience' }, { status: 500 })
  }
} 
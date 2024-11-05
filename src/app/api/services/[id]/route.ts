import { NextResponse } from 'next/server'
import { getService, updateService, deleteService } from '@/lib/services'
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

    const service = await getService(params.id)
    return NextResponse.json(service)
  } catch (error) {
    console.error('Error in GET /api/services/[id]:', error)
    return NextResponse.json({ error: 'Error fetching service' }, { status: 500 })
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
    const service = await updateService(params.id, updates)
    return NextResponse.json(service)
  } catch (error) {
    console.error('Error in PUT /api/services/[id]:', error)
    return NextResponse.json({ error: 'Error updating service' }, { status: 500 })
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

    await deleteService(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in DELETE /api/services/[id]:', error)
    return NextResponse.json({ error: 'Error deleting service' }, { status: 500 })
  }
} 
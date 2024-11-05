import { NextResponse } from 'next/server'
import { createService, getServices } from '@/lib/services'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const services = await getServices()
    return NextResponse.json(services)
  } catch (error) {
    console.error('Error in GET /api/services:', error)
    return NextResponse.json({ error: 'Error fetching services' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const service = await request.json()
    const newService = await createService(service)
    return NextResponse.json(newService)
  } catch (error) {
    console.error('Error in POST /api/services:', error)
    return NextResponse.json(
      { 
        error: 'Error creating service', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    )
  }
} 
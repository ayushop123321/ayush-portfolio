import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Remove the admin session cookie
    cookies().delete('admin-session');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing auth cookie:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
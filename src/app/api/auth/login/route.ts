import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    
    if (!token) {
      return NextResponse.json(
        { error: 'Missing token' },
        { status: 400 }
      );
    }
    
    // Set secure cookie with the token
    cookies().set({
      name: 'admin-session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error setting auth cookie:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
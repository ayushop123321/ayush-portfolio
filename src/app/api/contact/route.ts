import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'messages'), {
      name,
      email,
      subject: subject || '',
      message,
      read: false,
      createdAt: serverTimestamp(),
    });
    
    return NextResponse.json({ 
      success: true, 
      id: docRef.id,
      message: 'Message sent successfully!' 
    });
    
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse?.json({ error: 'Contact form is not available.' }, { status: 404 });
}

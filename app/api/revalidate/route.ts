import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get('secret');
    const pathToRevalidate = searchParams.get('path');

    // Validate the secret token
    if (secret !== process.env.NEXT_PUBLIC_REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    // Validate the path parameter
    if (!pathToRevalidate) {
      return NextResponse.json({ message: 'Path query parameter is required' }, { status: 400 });
    }

    // Use `revalidatePath` to revalidate the cache for the specified path
    revalidatePath(pathToRevalidate);

    return NextResponse.json(
      { message: `Successfully revalidated: ${pathToRevalidate}` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Revalidation failed', error: (error as Error).message },
      { status: 500 }
    );
  }
}
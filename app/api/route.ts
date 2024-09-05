import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const apiUrl = process.env.MAL_API_URL || '';
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('field');
  const res = await fetch(
    `${apiUrl}/anime/48316?fields=rank,mean,alternative_titles`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
      },
    }
  );
  // Todo: Add dynamic id route
  const data = await res.json();
  return Response.json(data);
}

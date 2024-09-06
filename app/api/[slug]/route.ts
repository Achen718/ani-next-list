import { type NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const fields = searchParams.get('fields');
  const rankingType = searchParams.get('ranking_type') || 'airing';
  const limit = searchParams.get('limit') || '6';
  const slug = params.slug;

  const url = new URL(`${process.env.MAL_API_URL}/anime/${slug}`);
  if (fields) {
    url.searchParams.append('fields', fields);
  }
  url.searchParams.append('ranking_type', rankingType);
  url.searchParams.append('limit', limit);

  // console.log(`Fetching URL: ${url.toString()}`);

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
    },
  });

  // console.log(`Response status: ${res.status}`);

  if (!res.ok) {
    console.error(`Error fetching data: ${res.statusText}`);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: res.status }
    );
  }

  const data = await res.json();
  // console.log('Fetched data:', JSON.stringify(data, null, 2));
  return NextResponse.json(data);
}

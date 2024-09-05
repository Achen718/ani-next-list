import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  // console.log(searchParams);
  const query = searchParams.get('fields');
  const slug = params.slug;
  console.log(slug);
  const res = await fetch(
    `${process.env.MAL_API_URL}/anime/${slug}?ranking_type=all&limit=4`,
    {
      headers: {
        'Content-Type': 'application/json',
        'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
      },
    }
  );

  const { data } = await res.json();
  console.log(data);
  return Response.json(data);
}

import { AnimeNode } from '@/types';

export const fetchData = async (
  endpoint: string,
  params: Record<string, string>
) => {
  const url = new URL(`${process.env.MAL_API_URL}/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();
  return (result.data as AnimeNode[]).map((item) => item.node);
};

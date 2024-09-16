import { AnimeNode, Anime } from '@/types';
import { ANIME_QUERY_PARAMS } from '@/config/animeDetails';

const headers = {
  'Content-Type': 'application/json',
  'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
};

// fetch ranking/season
export const fetchData = async (
  endpoint: string,
  params: Record<string, string>
) => {
  const url = new URL(`${process.env.MAL_API_URL}/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const res = await fetch(url.toString(), {
    headers,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();

  return (result.data as AnimeNode[]).map(({ node, ranking }) => ({
    ...node,
    ...ranking,
  }));
};

// anime_id
export const fetchAnimeDetail = async (id: string): Promise<Anime> => {
  const url = new URLSearchParams({ fields: ANIME_QUERY_PARAMS });
  const res = await fetch(`${process.env.MAL_API_URL}/anime/${id}?${url}`, {
    headers,
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

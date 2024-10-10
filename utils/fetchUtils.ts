import { Anime } from '@/types/animeConstants';
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
  const url = new URL(`${process.env.MAL_API_URL}/anime/${endpoint}`);

  try {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const res = await fetch(url.toString(), {
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// anime_id
export const fetchAnimeDetail = async (id: string): Promise<Anime> => {
  try {
    const url = new URLSearchParams({ fields: ANIME_QUERY_PARAMS });
    const res = await fetch(`${process.env.MAL_API_URL}/anime/${id}?${url}`, {
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching anime detail:', error);
    throw error;
  }
};

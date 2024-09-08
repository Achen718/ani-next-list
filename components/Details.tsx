'use client';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Anime } from '@/types';
import { useAnime } from '@/context/AnimeContext';

interface DetailsProps {
  endpoint: string;
  params: Record<string, string>;
}

const Details: React.FC<DetailsProps> = ({ endpoint, params }) => {
  const { fetchData, loading, error } = useAnime();
  const [data, setData] = useState<Anime>({} as Anime);

  const stableParams = useMemo(() => params, [params]);

  const fetchDataAsync = useCallback(async () => {
    const result = await fetchData(endpoint, stableParams);
    setData(result as Anime);
  }, [endpoint, stableParams]);

  useEffect(() => {
    fetchDataAsync();
  }, []);

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>{data.title}</div>
      <div>{data.rank}</div>
      <div>{data.mean}</div>
      <div>{data.media_type}</div>
    </div>
  );
};

export default Details;

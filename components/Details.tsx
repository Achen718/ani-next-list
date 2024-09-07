'use client';
import { useEffect, useState, useMemo } from 'react';
import { Anime } from '@/types';
import { useAnime } from '@/context/AnimeContext';

interface DetailsProps {
  endpoint: string;
  params: Record<string, string>;
}

const Details: React.FC<DetailsProps> = ({ endpoint, params }) => {
  const { fetchData, loading, error } = useAnime();
  const [data, setData] = useState<Anime[]>([]);

  const stableParams = useMemo(() => params, [params]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(endpoint, stableParams);
      setData(result);
    };

    fetchDataAsync();
  }, []);
  console.log(data);
  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};

export default Details;

'use client';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Anime } from '@/types';
import { useAnime } from '@/context/AnimeContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

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
      <div className='image-section relative'></div>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          {data.main_picture ? (
            <Image
              src={data.main_picture.medium}
              alt={data.title}
              width={200}
              height={200}
            />
          ) : (
            <img src='default-image.jpg' alt='Default Image' />
          )}
        </CardHeader>
        <CardContent>
          <div>Rank: {data.rank}</div>
          <div>
            Score: {data.mean} (scored by {data.num_scoring_users} users)
          </div>
          <div>Type: {data.media_type}</div>
          <div>Status: {data.status}</div>
          <div>Popularity: #{data.popularity}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;

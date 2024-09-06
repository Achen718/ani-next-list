'use client';
import React, { useEffect, useState, useMemo } from 'react';
import ResultsCard from './ResultsCard';
import { useAnime } from '@/context/AnimeContext';

interface Anime {
  id: number;
  title: string;
  main_picture: {
    medium: string;
  };
}

interface ResultsProps {
  endpoint: string;
  params: Record<string, string>;
  sectionTitle: string;
}

const Results: React.FC<ResultsProps> = ({
  endpoint,
  params,
  sectionTitle,
}) => {
  const { fetchData, loading, error } = useAnime();
  const [data, setData] = useState<Anime[]>([]);

  const stableParams = useMemo(() => params, [params]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(endpoint, stableParams);
      setData(result.map((item) => item.node)); // Extract the node property
    };

    fetchDataAsync();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='mb-4'>
      <h4 className='text-lg'>{sectionTitle}</h4>
      <div className='grid md:grid-col-6 grid-flow-col gap-7 justify-between'>
        {data.map((anime) => (
          <ResultsCard
            key={anime.id}
            image={anime.main_picture.medium}
            title={anime.title}
            id={anime.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;

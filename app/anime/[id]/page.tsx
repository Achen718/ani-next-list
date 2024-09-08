import { use } from 'react';
import { Anime } from '@/types';
import DetailsCard from '@/components/details/DetailsCard';
import { ANIME_QUERY_PARAMS } from '@/config/animeDetails';
import DetailsSection from '../../../components/details/DetailsSection';

async function fetchAnimeData(params: string): Promise<Anime> {
  const url = new URLSearchParams({ fields: ANIME_QUERY_PARAMS });

  const res = await fetch(`http://localhost:3000/api/${params}?${url}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

interface DetailsPageProps {
  params: {
    id: string;
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ params }) => {
  const data = use(fetchAnimeData(params.id));

  return (
    <section className='flex container mx-auto'>
      <DetailsCard data={data} />
      <DetailsSection data={data} />
    </section>
  );
};

export default DetailsPage;

import { AnimeProvider } from '@/context/AnimeContext';
import Details from '@/components/Details';

const AnimeDetailsPage = ({ params }: { params: { id: string } }) => {
  const detailsParams =
    'rank,mean,start_date,end_date,synopsis,mean,popularity,num_list_users,num_scoring_users,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,pictures,start_season';

  return (
    <AnimeProvider>
      <section className='container mx-auto px-6'>
        <Details endpoint={params.id} params={{ fields: detailsParams }} />
      </section>
    </AnimeProvider>
  );
};

export default AnimeDetailsPage;

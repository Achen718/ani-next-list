import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import Loading from '@/app/loading';
import { Separator } from '../ui/separator';

interface DetailsCardProps {
  data: {
    title: string;
    main_picture: { medium: string };
    rank: number;
    media_type: string;
    num_episodes: number;
    status: string;
    start_date: string;
    start_season: { season: string; year: number };
    mean: number;
    num_scoring_users: number;
    genres: { name: string }[];
    popularity: number;
  };
}

const DetailsCard: React.FC<DetailsCardProps> = ({ data }) => {
  if (!data) return <p>No data available</p>;

  return (
    <div className='description-card max-w-60 w-full'>
      <Card className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg'>
        <CardHeader className='relative overflow-hidden rounded-md'>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {data.main_picture ? (
            <Image
              src={data.main_picture.medium}
              alt={data.title}
              width={200}
              height={200}
            />
          ) : (
            <Loading />
          )}

          <Separator className='my-4' />
          <div className='text-lg'>Information</div>
          <div>Rank: {data.rank}</div>
          <div>Type: {data.media_type}</div>
          <div>Episodes: {data.num_episodes} </div>
          <div>Status: {data.status}</div>
          <div>Start Date: {data.start_date}</div>
          <div>
            {/* Premier Date: {data.start_season.season} {data.start_season.year} */}
          </div>
          <div>
            Score: {data.mean} (scored by {data.num_scoring_users} users)
          </div>
          <div>Genre: {data.genres.map((genre) => genre.name).join(', ')}</div>
          <div>Popularity: #{data.popularity}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsCard;

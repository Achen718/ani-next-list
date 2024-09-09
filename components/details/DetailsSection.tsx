import { Card, CardContent, CardHeader, CardDescription } from '../ui/card';
import { Separator } from '../ui/separator';

interface DetailsSectionProps {
  data: {
    synopsis: string;
    background: string;
    // add more properties as needed
  };
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  if (!data) return <p>No data available</p>;

  return (
    <div className='description-card'>
      <Card className='relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg'>
        <CardHeader className='relative overflow-hidden rounded-md'>
          <CardDescription className='text-lg'>Synopsis</CardDescription>
          <Separator className='my-4' />
          <CardDescription>{data.synopsis}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className='text-lg'>Background</CardDescription>
          <Separator className='my-4' />
          <CardDescription className='text-lg'>
            {data.background}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsSection;

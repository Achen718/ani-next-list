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
          <CardDescription>
            <div className='text-lg'>Synopsis</div>
            <Separator className='my-4' />
            <div>{data.synopsis}</div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <div className='text-lg'>Background</div>
            <Separator className='my-4' />
            <div>{data.background}</div>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsSection;

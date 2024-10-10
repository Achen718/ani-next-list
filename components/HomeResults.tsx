import Results from '@/components/Results';

import { fetchHomeSectionsData } from '@/utils/fetchResultsData';
import { ReactNode } from 'react';

interface HomeResultsProps {
  homeSectionsData: Awaited<ReturnType<typeof fetchHomeSectionsData>>;
  children: (data: any) => ReactNode;
}

const HomeResults: React.FC<HomeResultsProps> = async ({
  homeSectionsData,
  children,
}) => {
  return (
    <div className='home-results'>
      {homeSectionsData.map((data, index) => (
        <div key={index}>{children(data)}</div>
      ))}
    </div>
  );
};

export default HomeResults;

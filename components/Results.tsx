import React, { ReactNode } from 'react';
import { AnimeNodeDetails } from '@/types/animeConstants';

interface ResultsProps {
  sectionTitle?: string;
  data: AnimeNodeDetails[];
  children: (node: AnimeNodeDetails['node']) => ReactNode;
}

const Results: React.FC<ResultsProps> = ({
  sectionTitle,
  data = [],
  children,
}) => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between'>
        <h4 className='text-lg'>{sectionTitle}</h4>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 auto-rows-auto gap-7 justify-between'>
        {data.map(({ node }) => children(node))}
      </div>
    </div>
  );
};

export default Results;

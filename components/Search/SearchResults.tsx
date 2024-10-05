import React from 'react';
import ResultsCard from '../ResultsCard';
import { AnimeNode } from '@/types/animeConstants';
import Ranking from '../Ranking';

interface ResultsProps {
  data: AnimeNode[];
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <div className='mb-4'>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 auto-rows-auto gap-7 justify-between'>
        {data.map(({ node, ranking }, index) => (
          <div key={index + node.id}>
            {ranking && <Ranking ranking={ranking.rank} key={index} />}
            <ResultsCard
              key={node.id}
              image={node.main_picture.medium}
              title={node.title}
              id={node.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;

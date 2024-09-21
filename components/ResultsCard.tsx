import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardProps } from '@/types/cardConstants';

const ResultsCard: React.FC<CardProps> = ({ image, title, id, rank }) => {
  return (
    <div className='anime-card md:w-48'>
      {rank && <div className='rank'>Rank: #{rank}</div>}
      <Link href={`/anime/${id}`}>
        <Image
          loading='lazy'
          src={image}
          width={200}
          height={200}
          alt={title}
        />
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default ResultsCard;

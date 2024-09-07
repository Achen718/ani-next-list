import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  image: string;
  title: string;
  id: number;
  rank?: number;
}

const ResultsCard: React.FC<CardProps> = ({ image, title, id, rank }) => {
  return (
    <div className='anime-card md:w-48'>
      <Link href={`/anime/${id}`}>
        <Image
          loading='lazy'
          src={image}
          width={200}
          height={200}
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default ResultsCard;

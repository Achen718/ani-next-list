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
    <div className='anime-card w-48'>
      <Link href={`/anime/${id}`}>
        <Image
          loading='lazy'
          src={image}
          width={150}
          height={200}
          style={{
            width: '100%',
            maxWidth: '200px',
            height: '240px',
            maxHeight: '100%',
          }}
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default ResultsCard;

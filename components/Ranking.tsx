import React from 'react';
interface RankingProps {
  ranking: number;
}

const Ranking: React.FC<RankingProps> = ({ ranking }) => {
  return <div>{ranking}</div>;
};

export default Ranking;

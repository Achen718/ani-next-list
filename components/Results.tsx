import ResultsCard from './ResultsCard';
import type CardProps from './ResultsCard';

interface ResultsProps {
  node: {
    image: string;
    title: string;
    id: number;
    main_picture: {
      medium: string;
      large: string;
    };
  };
  ranking: {
    rank: number;
  };
}

const Results = async () => {
  const getAnime = async () => {
    // Todo: Add seasons conditional -- Move to section
    const res = await fetch(`http://localhost:3000/api/ranking`, {
      // limit to 10 seconds
      next: { revalidate: 10 },
    });
    return res.json();
  };
  // seasonal/ranking destructure data
  const { data } = await getAnime();
  // const img = data.main_picture.medium;
  // const title = data.title;
  // const animeId = data.id;

  // /ranking?ranking_type = all, airing, upcoming, tv, ova, movie, special, bypopularity, favorite
  return (
    <>
      <h4 className='text-lg'>Popular Airing</h4>
      <div className='grid md:grid-col-6 grid-flow-col gap-7 justify-between'>
        {data?.map(({ node }: ResultsProps) => (
          <ResultsCard
            key={node.id}
            image={node.main_picture.medium}
            title={node.title}
            id={node.id}
          />
        ))}
      </div>
    </>
  );
};

export default Results;

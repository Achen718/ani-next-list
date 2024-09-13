import { fetchData } from '@/utils/fetchUtils';
import Results from '@/components/Results';

interface animeSearch {
  params: {
    slug: string[];
  };
}

const Search = async ({ params }: animeSearch) => {
  const path = params.slug;
  let ranking_type;
  // convert top to ranking for endpoint
  if (path[1] === 'top') {
    path[1] = 'ranking';
  }
  const endpoint = path.join('/');
  // Top 100, seasonal

  // season/{year}/{season}?limit=4
  // ?ranking_type=all, airing, upcoming, tv, ova, movie, special, bypopularity, favorite&limit=20
  const data = await fetchData(endpoint, { ranking_type: 'all', limit: '20' });

  return (
    <div>
      test
      <Results data={data} />
      {/* pagination */}
    </div>
  );
};

export default Search;

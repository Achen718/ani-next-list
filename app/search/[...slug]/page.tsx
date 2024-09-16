import { fetchData } from '@/utils/fetchUtils';
import Results from '@/components/Results';

interface animeSearch {
  params: {
    slug: string[];
  };
}

const Search = async ({ params }: animeSearch) => {
  const path = params.slug;
  if (path[1] === 'top') {
    path[1] = 'ranking';
  }

  const endpoint = path.join('/');
  // Todo: add seasonal endpoint
  const data = await fetchData(endpoint, { ranking_type: 'all', limit: '24' });

  return (
    <div>
      {/* search bar */}
      <Results data={data} />
      {/* pagination */}
    </div>
  );
};

export default Search;

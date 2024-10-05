import { fetchData } from '@/utils/fetchUtils';
import SearchResults from '@/components/Search/SearchResults';
import SearchSection from '@/components/Search/SearchSection';

interface animeSearch {
  params: {
    slug: string[];
  };
}

const Search = async ({ params }: animeSearch) => {
  const path = params.slug;

  if (path[0] === 'top') {
    path[0] = 'ranking';
  }

  const endpoint = path.join('/');
  // Todo: add seasonal endpoint
  const { data } = await fetchData(endpoint, {
    ranking_type: 'all',
    limit: '24',
  });

  // anime?q=one&limit=4 -- Params for search
  return (
    <div className='container mx-auto'>
      {/* search bar */}
      {/* rank component */}
      {/* hide Home results on search */}
      <SearchResults data={data} />
      {/* pagination */}
    </div>
  );
};

export default Search;

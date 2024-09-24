import { AnimeNodeDetails } from '@/types/animeConstants';
import Results from '@/components/Results';
import SearchBar from './SearchBar';

interface SearchSectionProps {
  data: AnimeNodeDetails[];
}

const SearchSection = () => {
  return (
    <div>
      <SearchBar />
      {/* rank # */}
      {/* display results on search */}
      {/* <Results data={data} /> */}
      {/* pagination */}
    </div>
  );
};

export default SearchSection;

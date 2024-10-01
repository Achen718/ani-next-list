// app/search/anime/page.tsx
import SearchSection from '@/components/Search/SearchSection';
import HomeResults from '@/components/HomeResults';
import { fetchHomeSectionsData } from '@/utils/fetchResultsData';

const AnimePage = async () => {
  const homeSectionsData = await fetchHomeSectionsData();

  return (
    <div className='container mx-auto'>
      <SearchSection />
      <HomeResults homeSectionsData={homeSectionsData} />
    </div>
  );
};

export default AnimePage;

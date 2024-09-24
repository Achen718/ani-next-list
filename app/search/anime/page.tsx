import SearchSection from '@/components/Search/SearchSection';
import HomeResults from '@/components/HomeResults';

interface SearchProps {
  searchParams: Record<string, string>;
}
const AnimePage = (searchParams: any) => {
  //   { params: {}, searchParams: { q: 'one', limit: '4' } }
  return (
    <div className='container mx-auto'>
      <SearchSection />
      <HomeResults />
    </div>
  );
};

export default AnimePage;

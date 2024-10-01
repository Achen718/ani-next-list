// app/page.tsx
import Hero from '@/components/Hero';
import HomeResults from '@/components/HomeResults';
import { fetchHomeSectionsData } from '@/utils/fetchResultsData';

const Home = async () => {
  const homeSectionsData = await fetchHomeSectionsData();

  return (
    <section className='container mx-auto px-6'>
      <Hero />
      <HomeResults homeSectionsData={homeSectionsData} />
    </section>
  );
};

export default Home;

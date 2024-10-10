// app/page.tsx
import Hero from '@/components/Hero';
import HomeResults from '@/components/HomeResults';
import ResultsCard from '@/components/ResultsCard';
import { fetchHomeSectionsData } from '@/utils/fetchResultsData';

const Home = async () => {
  const limit = '6';
  const homeSectionsData = await fetchHomeSectionsData(limit);

  return (
    <section className='container mx-auto px-6'>
      <Hero />
      <HomeResults homeSectionsData={homeSectionsData}>
        {(data) => (
          <div className='mb-4'>
            <div className='flex justify-between'>
              <h4 className='text-lg'>{data.sectionTitle}</h4>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 auto-rows-auto gap-7 justify-between'>
              {data.data.map(({ node }) => (
                <ResultsCard
                  key={node.id}
                  image={node.main_picture.medium}
                  title={node.title}
                  id={node.id}
                />
              ))}
            </div>
          </div>
        )}
      </HomeResults>
    </section>
  );
};

export default Home;

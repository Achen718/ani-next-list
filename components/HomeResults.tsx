import Results from '@/components/Results';
import { homeSections } from '@/config/animeDetails';
import { fetchData } from '@/utils/fetchUtils';

const HomeResults = async () => {
  const limit = '6';
  // move data fetching to home
  const homeSectionsData = await Promise.all(
    homeSections.map(async (section) => {
      const data = await fetchData('ranking', {
        ranking_type: section.ranking_type,
        limit,
      });

      return {
        sectionTitle: section.sectionTitle,
        ...data,
      };
    })
  );

  return (
    <div className='home-results'>
      {homeSectionsData.map((data, index) => (
        <Results
          key={index}
          sectionTitle={data.sectionTitle}
          data={data.data}
        />
      ))}
    </div>
  );
};

export default HomeResults;

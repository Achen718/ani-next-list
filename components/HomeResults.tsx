import Results from '@/components/Results';
import { homeSections } from '@/config/animeDetails';
import { fetchData } from '@/utils/fetchUtils';

const HomeResults = async () => {
  const limit = '6';

  const homeSectionsData = await Promise.all(
    homeSections.map(async (section) => {
      const data = await fetchData('anime/ranking', {
        ranking_type: section.ranking_type,
        limit,
      });
      return {
        sectionTitle: section.sectionTitle,
        data,
      };
    })
  );

  return (
    <div className='home-results'>
      {homeSectionsData.map((section, index) => (
        <Results
          key={index}
          sectionTitle={section.sectionTitle}
          data={section.data}
        />
      ))}
    </div>
  );
};

export default HomeResults;

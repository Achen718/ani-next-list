import Results from '@/components/Results';

import { fetchHomeSectionsData } from '@/utils/fetchResultsData';

interface HomeResultsProps {
  homeSectionsData: Awaited<ReturnType<typeof fetchHomeSectionsData>>;
}

const HomeResults: React.FC<HomeResultsProps> = async ({
  homeSectionsData,
}) => {
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

import Results from '@/components/Results';
import { AnimeNode } from '@/types';
import { homeSections } from '@/config/animeDetails';

const fetchData = async (endpoint: string, params: Record<string, string>) => {
  const url = new URL(`http://localhost:3000/api/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();
  console.log(result);
  return (result.data as AnimeNode[]).map((item) => item.node);
};

const HomeResults = async () => {
  const limit = '6';

  const homeSectionsData = await Promise.all(
    homeSections.map(async (section) => {
      const data = await fetchData(section.endpoint, {
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

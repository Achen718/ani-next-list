import Results from '@/components/Results';
import { AnimeNode } from '@/types';
import { homeSections } from '@/config/animeDetails';

const fetchData = async (endpoint: string, params: Record<string, string>) => {
  const url = new URL(`${process.env.MAL_API_URL}/anime/${endpoint}`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID || '',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await res.json();
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

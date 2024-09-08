import Results from '@/components/Results';

const ResultsSection = () => {
  const homeSections = [
    {
      sectionTitle: 'Upcoming Anime',
      ranking_type: 'upcoming',
      endpoint: 'ranking',
    },
    {
      sectionTitle: 'Popular this season',
      ranking_type: 'airing',
      endpoint: 'ranking',
    },
    {
      sectionTitle: 'Top Scoring Anime',
      ranking_type: 'all',
      endpoint: 'ranking',
    },
    {
      sectionTitle: 'All Time Popular',
      ranking_type: 'bypopularity',
      endpoint: 'ranking',
    },
  ];
  // limit to 6 in a row on homepage
  const limit = '6';

  // endpoint = /ranking or /season/year/season
  // params = ?ranking_type=upcoming&limit=6 }
  return (
    <div className='results-section'>
      {homeSections.map((result, index) => (
        <Results
          key={index}
          sectionTitle={result.sectionTitle}
          endpoint={result.endpoint}
          params={{ ranking_type: result.ranking_type, limit }}
        />
      ))}
    </div>
  );
};

export default ResultsSection;

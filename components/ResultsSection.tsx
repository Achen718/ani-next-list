import Results from '@/components/Results';

const ResultsSection = () => {
  // limit to 6 in a row on homepage
  const limit = '6';
  // endpoint = /ranking or /season/year/season
  // params = ?ranking_type=upcoming&limit=6 }
  return (
    <div className='results-section'>
      <Results
        sectionTitle='Upcoming Anime'
        endpoint='ranking'
        params={{ ranking_type: 'upcoming', limit: limit }}
      />

      <Results
        sectionTitle='Airing Anime'
        endpoint='ranking'
        params={{ ranking_type: 'airing', limit: limit }}
      />

      <Results
        sectionTitle='Top Anime'
        endpoint='ranking'
        params={{ ranking_type: 'all', limit: limit }}
      />

      <Results
        sectionTitle='Summer 2024 Anime'
        endpoint='season/2024/summer'
        params={{ limit: limit }}
      />
    </div>
  );
};

export default ResultsSection;

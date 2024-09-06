import Hero from '@/components/Hero';
import ResultsSection from '@/components/ResultsSection';
import { AnimeProvider } from '@/context/AnimeContext';

const Home = () => {
  return (
    <AnimeProvider>
      <section className='container mx-auto px-6'>
        <Hero />
        <ResultsSection />
      </section>
    </AnimeProvider>
  );
};

export default Home;

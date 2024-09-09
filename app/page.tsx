import Hero from '@/components/Hero';
import HomeResults from '@/components/HomeResults';

const Home = () => {
  return (
    <section className='container mx-auto px-6'>
      <Hero />
      <HomeResults />
    </section>
  );
};

export default Home;

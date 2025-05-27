import { useRef } from 'react';
import Intro from './sections/index/Intro';
import Hero from './sections/index/Hero';

const Home = () => {
  const heroRef = useRef(null);

  return (
    <>
      <Intro scrollToRef={heroRef} />
      <Hero ref={heroRef} />
    </>
  );
};

export default Home;



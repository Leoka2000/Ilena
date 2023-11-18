

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../hero/hero';
import About from '../about/about';
import Carousel from '../carousel/carousel';

const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.4,
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <Hero />
      <About />
      <Carousel />
    </motion.div>
  );
};

export default Home;


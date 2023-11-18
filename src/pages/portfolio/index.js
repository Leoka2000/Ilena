import React from 'react';
import { motion } from 'framer-motion';
import PortfolioHero from './portfolio/portfolio-hero';
import Flashes from './galery-flash/flashes';
import Common from './common/common';

const Index = () => {
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
    duration: 0.3,
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <PortfolioHero />
      {/* <Flashes /> */}
      <Common />
    </motion.div>
  );
};

export default Index;


import React from 'react';
import { motion } from 'framer-motion'
import './hero.css';
import {Link} from 'react-router-dom';


const Hero = () => {
  const blurhashValue = 'LAF~gc~q0000?b~qM{00t7IUWB00';
  
  return (
    <section className='hero-section'>
       
      <h1>
        {Array.from("Hi, I am Ilena, a tattoo artist based in Winnipeg").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.02, delay: index * 0.04 }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
      <p>
        {Array.from("Click down here to make an appointment").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.02, delay: index * 0.04 }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
      <button>
        <Link to="/contact" style={{textDecoration: 'none'}}>MORE</Link>
      </button>
    </section>
  );
};

export default Hero;

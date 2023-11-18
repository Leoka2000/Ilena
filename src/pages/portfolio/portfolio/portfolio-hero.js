
import React from 'react'
import './portfolio-hero.css'
import {Link} from 'react-scroll'
import { motion } from 'framer-motion';
import Logo from '../../../assets/brand/logo.png'

const Portfolio = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='portfolio-hero-section'>
      <motion.p variants={variants} initial="hidden" animate="visible">WELCOME TO MY PORTFOLIO</motion.p>
      <motion.h1 variants={variants} initial="hidden" animate="visible">CHECK OUT <span>MY WORK</span></motion.h1>
      <motion.small variants={variants} initial="hidden" animate="visible">As part of my tatooing services, I offer flash and custom tattoos</motion.small>
      <motion.button variants={variants} initial="hidden" animate="visible">
        <Link to="flashes" spy={true} smooth={true} offset={100} duration={500}>MORE</Link>
      </motion.button>
    </section>
  )
}

export default Portfolio

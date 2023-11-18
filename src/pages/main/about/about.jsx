import React from 'react'
import './about.css'
import Illena2 from '../../../assets/brand/Illena2.jpg'
import Illena3 from '../../../assets/brand/Illena3.jpg'

import { AiOutlineInstagram } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  })

  return (
    <section id='about' className='about-section'>
      <div className='left-about'>
        <motion.h1 ref={ref} initial={{ opacity: 0, y: -100 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} transition={{ duration: 1 }}>
          About <span>me</span>
        </motion.h1>
        <motion.h3 ref={ref} initial={{ opacity: 0, y: -100 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} transition={{ duration: 1, delay: 0.2 }}>
          Tattoo artist at Odin's Eye
        </motion.h3>
        <motion.p ref={ref} initial={{ opacity: 0, y: -100 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} transition={{ duration: 1, delay: 0.4 }}>
        Since I was a kid, I have always been into activities that were related to arts, such as music, dancing, drawing, and so on. When my friends saw that I had potential in drawing, they jokingly said that I could learn how to tattoo in order to give them some for free. After starting to learn by myself and noticing that I was actually good at it, I found a mentor, got a certification, and started getting serious in the industry. Nowadays, I can't imagine myself doing another thing aside from this. I love all aspects of tattooing, I have met so far so many incredible people and I know that I will be doing this for life! 
        </motion.p>
        <div className='about-icons-wrapper'>
          <motion.h1 ref={ref} initial={{ opacity: 0, y: -100 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} transition={{ duration: 1, delay: 0.6 }}>
            Check me out on instagram
          </motion.h1>
          <motion.span ref={ref} initial={{ opacity: 0, y: -100 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} transition={{ duration: 1, delay: 0.8 }}>
            <a  href='https://www.instagram.com/ilenadoodles/'>
            <AiOutlineInstagram />
            </a>
          </motion.span>
        </div>
      </div>
      <div className='right-about'>
        <div className='img-thumbnail'><img alt='IlenaImg' src={Illena3} /></div>
      </div>
    </section>
  )
}

export default About

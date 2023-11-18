import React from 'react'
import './contact.css'
import ContactInfos from './contact-infos'
import { Form } from './form'
import { motion } from 'framer-motion';

const Contact = () => {
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
    <section className='contact-section'>
      <header>
        <h1>BEFORE FILLING THE FORM AT THE BOTTOM OF THIS PAGE, PLEASE READ THIS SECTION TO SEE INSTRUCTIONS ON HOW REQUESTING MY SERVICES WORK</h1>
        </header>
        <ContactInfos/>
        <Form/>
    
    </section>
    </motion.div>
  )
}

export default Contact

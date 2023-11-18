import React from 'react'
import './flashes.css'
import { FLASHES } from '../../../components/database/database-flashes'
import FlashContent from './flash-content'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Flashes = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id='flashes' className='flashes-section' ref={ref}>
      <motion.header
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        <h1>FLASH<span>GALLERY</span></h1>
        <p>Some of the flash tattoos that I have been doing recently, they can vary from 150$ to 250$ depending on size</p>
      </motion.header>
      <motion.main
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.7, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className='flashes-main'
      >
        {FLASHES.map((product) => (
          <FlashContent data={product} />
        ))}
      </motion.main>
    </section>
  )
}

export default Flashes

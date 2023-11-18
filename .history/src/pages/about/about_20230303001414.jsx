import React from 'react'
import './about.css'
import Illena from '../../assets/brand/Illena.jpg'
import Illena2 from '../../assets/brand/Illena2.jpg'

const About = () => {
  return (
    <section className='about-section'>
      <div className='left-about'>
        <h1>About me</h1>
        <h3>Tattoo artist at Noir.CO</h3>
        <p>To get your body inked in our tattoo salon, you may contact us via contact form on our website, or by phone. We welcome appointments, as well as walk-ins. We have gathered the best team of tattoo artists who work full time in our salon, and we have fantastic guest artists visiting our shop.</p>
        <div>
          <h1>Check me out on instagram</h1>
        </div>
      </div>
      <div className='right-about'>
        <div className='img-thumbnail'><img src={Illena2}/></div>
      </div>
    </section>
  )
}

export default About

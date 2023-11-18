import React from 'react'
import './portfolio-hero.css'
import {Link} from 'react-scroll'

const portfolio = () => {
  return (
    <section className='portfolio-hero-section'>
      <p>WELCOME TO MY PORTFOLIO</p>
      <h1>CHECK OUT <span>MY WORK</span></h1>
      <small>As part of my tatooing services, I offer flashes as well as custom tattoos</small>
      <button>MORE</button>
    </section>
  )
}

export default portfolio

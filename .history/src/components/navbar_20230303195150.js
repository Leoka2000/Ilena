import React, { useRef } from 'react'
import './navbar.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import Logo from '../assets/brand/logo.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName)


  return (
   <>
    {pathName === '/' ? (
      <div className='navbar-renderer'>
        <nav id='navbar-main' ref={navRef}>
          <Link style={{ textDecoration: 'none' }} to='/'> <img src={Logo} /></Link>
          <ul>
            <li><LinkRoll onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500}>ABOUT</LinkRoll></li>
            <li> <Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/portfolio'> PORTOLIO</Link></li>
            <li><LinkRoll onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500}>CONTACT</LinkRoll></li>
          </ul>
          <div className='navbar-icons-wrapper'>
            <a><AiOutlineInstagram /></a>
            <a><AiOutlineMail /></a>
          </div>
          <button
            className="close"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className='bars-button'>
          <FaBars className='bars' />
        </button>
      </div>
    ) : (
      <div className='navbar-portfolio'>
        <nav ref={navRef}>
          <Link style={{ textDecoration: 'none' }} to='/'> <img src={Logo} /></Link>
          <ul>
          <li> <Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/portfolio'>ABOUT</Link></li>
            <li> <Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/'>WORK</Link></li>
            <li> <Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/portfolio'> PORTOLIO</Link></li>
            <li><LinkRoll onClick={showNavbar} spy={true} smooth={true} offset={100} duration={500}>CONTACT</LinkRoll></li>
          </ul>
          <div className='navbar-icons-wrapper'>
            <a><AiOutlineInstagram /></a>
            <a><AiOutlineMail /></a>
          </div>
          <button
            className="close"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className='bars-button'>
          <FaBars className='bars' />
        </button>
      </div>
      
    )}
    </>
  )
}

export default Navbar

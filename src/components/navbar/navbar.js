import React, { useRef, useState, useEffect } from 'react'
import './navbar.css'
import { AiOutlineInstagram} from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import Logo2 from '../../assets/brand/logo2.png'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const navRef = useRef();
  const location = useLocation();
  const pathName = location.pathname;

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

// function that makes the navbar change class according to the page we are at
  let navbarClass = "navbar-renderer";

  if (pathName === '/portfolio') {
    navbarClass = "navbar-portfolio";
  } else if (pathName === '/contact') {
    navbarClass = "navbar-contact";
  }
// function that makes the navbar change class according to the page we are at

// useEffect hook used in order to assign a state variable which keeps track of the page we are at so we can conditionally render the li html tags
  useEffect(() => {
    if (pathName === '/') {
      setActiveLink('home');
    } else if (pathName === '/portfolio') {
      setActiveLink('portfolio');
    } else if (pathName === '/contact') {
      setActiveLink('contact');
    }
  }, [pathName]);
  
  return (
    // navbar-portofolio / -home / -contact
    <div className={navbarClass}>
      <nav ref={navRef}>
        <Link style={{ textDecoration: 'none' }} to='/'> <img alt='logo' src={Logo2} /></Link>
        <ul>
        <li className={activeLink === 'home' ? 'active' : ''}><Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/'>HOME</Link></li>
<li className={activeLink === 'portfolio' ? 'active' : ''}><Link onClick={showNavbar} style={{ textDecoration: 'none' }} to='/portfolio'> PORTFOLIO</Link></li>
<li className={activeLink === 'contact' ? 'active' : ''}><Link onClick={showNavbar} spy={true}  style={{ textDecoration: 'none' }} smooth={true} offset={100} to='/contact' duration={500}>CONTACT</Link></li>

        </ul>
        <div className='navbar-icons-wrapper'>
          <a href='https://www.instagram.com/ilenadoodles/'><AiOutlineInstagram /></a>
          <a href='mailto:bridgetdemos00@yahoo.ca'><AiOutlineMail /></a>
        </div>
        <button
          className="close"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar} className={activeLink == 'contact' ? ("black-bars") : ("white-bars")}>
        <FaBars className='bars' />
      </button>
      <Link style={{ textDecoration: 'none' }} to='/'> <img alt='logo' className='mobile-logo' src={Logo2} /> </Link>
    </div>
  );
}

export default Navbar;

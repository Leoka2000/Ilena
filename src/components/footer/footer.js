import React, { useEffect } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import Logo from '../../assets/brand/logo2.png';
import './footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of the page on route change
  }, [location.pathname]);

  return (
    <footer className='footer'>
     <Link style={{ textDecoration: 'none' }} to='/'><img src={Logo} alt='logo' /></Link> 
      <div className='footer-left'>
        <h1>CONTACT</h1>
        <p>bridgetdemos00@yahoo.ca</p>
        <p>+1(204)-330-3446</p>
        <p>2645 Portage Ave, Winnipeg</p>
      </div>
      <div className='footer-middle'>
        <h1>WEBSITE MAP</h1>
        <p>
          <Link style={{ textDecoration: 'none' }} to='/'>
            HOME
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: 'none' }} to='/portfolio'>
            PORTFOLIO
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: 'none' }} to='/contact'>
            CONTACT
          </Link>
        </p>
      </div>
      <div className='footer-icons-wrapper'>
        <a href='https://www.instagram.com/ilenadoodles/'>
          <AiOutlineInstagram />
        </a>
        <a href='mailto:bridgetdemos00@yahoo.ca'>
          <AiOutlineMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

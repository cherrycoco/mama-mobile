import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import logo from '../../assets/mama-mobile-logo.png';
import ScrollAnimation from 'react-animate-on-scroll';
import './footer.css';

const MobileFooter = () => (
  <ScrollAnimation
    animatePreScroll
    animateIn="slideInUp"
    animateOnce
  >
    <div id='mobile-footer'>
      <Link className='underline' to='/about'>About</Link>
      <Link className='underline' to='/gift-card'>Gift Card</Link>
      <Link className='underline' to='/careers'>Careers</Link>
      <Link className='underline' to='/blog'>Blog</Link>
      <Link className='underline' to='/contact'>Contact</Link>
      {/* <img src={logo} alt='mama mobile logo' /> */}
      <Link to='/'>
        <div className='logo-top'>mama</div>
        <div className='logo-bottom'>mobile massage</div>
      </Link>
      <div className='footer-contact-info'>
        <Icon name='phone' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
        <a className='underline' href='tel:866-266-3779'>1 (866) 266 - 3779</a>
      </div>
      <div className='footer-contact-info'>
        <Icon name='mail' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
        <a className='underline' href='mailto:hello@mamamobilemassage.com'>hello@mamamobilemassage.com</a>
      </div>
      <p>© Mama Mobile Massage</p>
    </div>
  </ScrollAnimation>
)

export default MobileFooter;
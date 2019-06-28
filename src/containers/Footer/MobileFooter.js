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
      <Link to='/about'>About</Link>
      <Link to='/gift-card'>Gift Card</Link>
      <Link to='/careers'>Careers</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/contact'>Contact</Link>
      <img src={logo} alt='mama mobile logo' />
      <div>
        <Icon name='phone' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
        <a href='tel:800-626-2055'>1 (800) 626 - 2055</a>
      </div>
      <br />
      <div>
        <Icon name='mail' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
        <a href='mailto:hello@mamamobilemassage.com'>hello@mamamobilemassage.com</a>
      </div>
      <p>© Mama Mobile Massage</p>
    </div>
  </ScrollAnimation>
)

export default MobileFooter;
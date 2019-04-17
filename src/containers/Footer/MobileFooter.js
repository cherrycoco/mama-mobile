import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import logo from '../../assets/mama-mobile-logo.png';

const MobileFooter = () => (
  <div id='mobile-footer'>
    <Link to='/about'>About</Link>
    <Link to='/gift-card'>Gift Card</Link>
    <Link to='/career'>Careers</Link>
    <Link to='/contact'>Contact</Link>
    <img src={logo} alt='mama mobile logo' />
    <div>
      <Icon name='mail' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
      <a href='mailto:info@mamamobilemassage.com'>info@mamamobilemassage.com</a>
    </div>
    <p>© Mama Mobile Massage</p>
  </div>
)

export default MobileFooter;
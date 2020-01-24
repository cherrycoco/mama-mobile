import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import logo from '../../assets/mama-mobile-logo.png';

const WebFooter = () => (
  <div id='footer'>
    <div className='divider' />
    <div id='footer-content'>
      <div id='footer-content-contact'>
        <h2>CONTACT</h2>
        <div>
          <Icon name='mail' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
          <a href='mailto:hello@mamamobile.com'>hello@mamamobile.com</a>
        </div>
      </div>
      <div id='footer-content-logo'>
        <img src={logo} alt='mama mobile logo' />
        <div id='footer-content-logo-icons'>
          <a href='https://www.instagram.com/mamamobilemassage/' target='_blank'>
            <Icon name='instagram' size='big' style={{color: '#D7AED1'}} />
          </a>
          <a href='https://www.facebook.com/mamamobilemassagetherapy/' target='_blank'>
            <Icon name='facebook' size='big' style={{color: '#D7AED1'}} />
          </a>
        </div>
      </div>
      <div id='footer-content-company'>
        <h2>COMPANY</h2>
        <Link to='/about'>About</Link>
        <Link to='/gift-card'>Gift Card</Link>
        <Link to='/group-booking'>Group Booking</Link>
        <Link to='/career'>Careers</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  </div>
)

export default WebFooter;
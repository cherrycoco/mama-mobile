import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './header.css';
import logo from '../../assets/mama-mobile-logo.png';
import Nav from './Nav';
// import MobileNav from './MobileNav';

class Header extends React.Component {

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // add and remove shrink class to navbar
    let header = document.getElementById('header');
    let logo = document.getElementById('logo');
    let nav = document.getElementById('nav');

    if (window.scrollY !== 0) {
      header.classList.add('shrink');
      logo.classList.add('shrink');
      nav.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
      logo.classList.remove('shrink');
      nav.classList.remove('shrink');
    }
  };
  
  renderFull = () => (
    <Nav />
  )

  // renderMobile = () => (
    // <MobileNav />
  // )

  render = () => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    return (
      <div id='header'>
        <div id="logo"> 
          <Link to='/'><img src={logo} alt="mama mobile logo" /></Link>
        </div>
        {w > 800 ? this.renderFull() : this.renderFull()}
        <div id='social-media'>
          <a href='https://www.instagram.com/mamamobilemassage/' target='_blank'>
            <Icon name='instagram' size='big' style={{color: '#D7AED1'}} />
          </a>
          <a href='https://www.facebook.com/mamamobilemassagetherapy/' target='_blank'>
            <Icon name='facebook' size='big' style={{color: '#D7AED1'}} />
          </a>
        </div>
      </div>
    )
  }
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import './header.css';
import logo from '../../assets/mama-mobile-logo.png';
import Nav from './Nav';
import MobileNav from './MobileNav';
import SubscribeInit from '../../components/Subscribe/SubscribeInit';
import changeFirstLoad from '../../actions/changeFirstLoad';


const Header = ({ isFirstLoad, changeFirstLoad }) => (
  <div id='header'>
    {isFirstLoad && <SubscribeInit changeFirstLoad={changeFirstLoad} />}
    <div id="logo"> 
      <Link to='/'><img src={logo} alt="mama mobile logo" /></Link>
    </div>
    {Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 700 ? <Nav />: <MobileNav />}
    <div id='social-media'>
      <a href='https://www.instagram.com/mamamobilemassage/' target='_blank'>
        <Icon name='instagram' size='big' style={{color: '#D7AED1'}} />
      </a>
      <a href='https://www.facebook.com/mamamobilemassagetherapy/' target='_blank'>
        <Icon name='facebook' size='big' style={{color: '#D7AED1'}} />
      </a>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  changeFirstLoad: () => (
    dispatch(changeFirstLoad())
  )
});

const mapStateToProps = (state) => ({
  isFirstLoad: state.isFirstLoad
});

export default connect (mapStateToProps, mapDispatchToProps)(Header);
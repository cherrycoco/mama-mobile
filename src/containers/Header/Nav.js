import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/ButtonBorder';

const activeStyle = {
  color: '#C68BBD',
}

class Nav extends React.Component {
  render () {
    return (
      <div id='nav'>
        <NavLink activeStyle={activeStyle} to='/about'>ABOUT</NavLink>
        <NavLink activeStyle={activeStyle} to='/gift-card'>GIFT CARD</NavLink>
        <NavLink activeStyle={activeStyle} to='/blog'>BLOG</NavLink>
        <NavLink activeStyle={activeStyle} to='/contact'>CONTACT</NavLink>
        <form type='get' action='https://mamamobilemassage.janeapp.com/'>
          <Button buttonColor='white' color='#c68bbdb3' content='BOOK' />
        </form>
      </div>
  )}
}

export default Nav;
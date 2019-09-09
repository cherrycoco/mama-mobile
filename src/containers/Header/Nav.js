/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  backgroundImage: 'linear-gradient(180deg,#F5C3CF,#F5C3CF)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '4px bottom',
  backgroundSize: '100% 10px',
}

class Nav extends React.Component {
  render () {
    return (
      <div id='nav'>
        <NavLink className='underline' activeStyle={activeStyle} to='/about'>ABOUT</NavLink>
        <NavLink className='underline' activeStyle={activeStyle} to='/gift-card'>GIFT CARD</NavLink>
        <NavLink className='underline' activeStyle={activeStyle} to='/blog'>BLOG</NavLink>
        <NavLink className='underline' activeStyle={activeStyle} to='/contact'>CONTACT</NavLink>
        <form type='get' action='https://mamamobilemassage.janeapp.com/'>
          <button className='button-outline'>BOOK</button>
        </form>
      </div>
  )}
}

export default Nav;
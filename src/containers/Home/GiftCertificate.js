import React from 'react';
import { NavLink } from 'react-router-dom';
import giftcard from '../../assets/gift-card.jpeg';

const GiftCertificate = () => (
  <div id='give-gift-certificate'>
    <img src={giftcard} alt='purchase a gift card' />
    <NavLink to='gift-card'>
      <button className='book-button button-outline'>GIVE SOME LOVE</button>
    </NavLink>
  </div>
)

export default GiftCertificate;
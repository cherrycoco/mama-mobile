import React from 'react';
import { NavLink } from 'react-router-dom';
import giftcard from '../../assets/gift-card.jpeg';
import Button from '../../components/Button/ButtonAnimated';

const GiftCertificate = () => (
  <div id='give-gift-certificate'>
    <img src={giftcard} alt='purchase a gift card' />
    <div id='give-gift-certificate-button'>
      <NavLink to='gift-card'>
        <Button style buttonColor='#FAE3FD' color='#454545' content='GIVE SOME LOVE' icon='heart' center/>
      </NavLink>
    </div>
  </div>
)

export default GiftCertificate;
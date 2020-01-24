import React from 'react';

const PartyCard = ({ img, title, description, bonus, handleClick }) => (
  <div className='party-card'>
    <img className='party-card-img' src={img} alt={title} />
    <div className='party-card-content'>
      <h2 className='party-card-title'>{title}</h2>
      <p>{description}</p>
      <p><i>{bonus}</i></p>
      <button className='button-outline' onClick={handleClick}>learn more</button>
    </div>
  </div>
);

export default PartyCard;
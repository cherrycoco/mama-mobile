import React from 'react';

const PriceCard = (props) => (
  <div className='price-card'>
      <h2>{props.minutes}</h2>
      <p>MINUTES</p>
      <h4>{props.price}</h4>
      <div className={props.divider ? 'price-card-divider' : null} />
  </div>
)

export default PriceCard;
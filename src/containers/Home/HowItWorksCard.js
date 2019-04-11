import React from 'react';

const HowItWorksCard = (props) => (
  <div className='how-it-works-card'>
    <h2>{props.title}</h2>
    <img src={props.img} alt={props.alt} />
    <p><b>{props.subtitle}</b></p>
    <p>{props.description}</p>
  </div>
);

export default HowItWorksCard;
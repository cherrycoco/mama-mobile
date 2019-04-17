import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const HowItWorksCard = (props) => (
  <ScrollAnimation
    animatePreScroll
    animateIn="slideInUp"
    animateOnce
  >
    <div className='how-it-works-card'>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.alt} />
      <p><b>{props.subtitle}</b></p>
      <p>{props.description}</p>
    </div>
  </ScrollAnimation>
);

export default HowItWorksCard;
import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import step1 from '../../assets/how-it-works-1.png';
import step2 from '../../assets/how-it-works-2.png';
import step3 from '../../assets/how-it-works-3.png';
import ScrollAnimation from 'react-animate-on-scroll';

const HowItWorks = () => (
  <div id='how-it-works'>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <h2 className='title'>HOW IT WORKS</h2>
    </ScrollAnimation>
    <div className='card-wrapper' id='how-it-works-wrapper'>
      <HowItWorksCard 
        img={step1} 
        title='book online' 
        subtitle='Woot Woot:' 
        description='select a date/time'
        alt='calendar for booking a massage'
      />
      <HowItWorksCard 
        img={step2} 
        title='we come to you' 
        subtitle='Zoom' 
        description='home, hotel, baby shower - mama we got you covered'
        alt='car for driving to a mom’s home'
      />
      <HowItWorksCard 
        img={step3} 
        title='relax and unwind' 
        subtitle='Ahhh...' 
        description='our expert Massage Therapist (RMT) brings the spa to you'
        alt='person on massage bed in their home'
      />
    </div>
  </div>
);

export default HowItWorks;
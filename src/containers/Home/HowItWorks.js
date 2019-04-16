import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import step1 from '../../assets/how-it-works-1.png';
import step2 from '../../assets/how-it-works-2.png';
import step3 from '../../assets/how-it-works-3.png';

const HowItWorks = () => (
  <div id='how-it-works'>
    <h1 className='title'>HOW IT WORKS</h1>
    <div className='card-wrapper' id='how-it-works-wrapper'>
      <HowItWorksCard 
        img={step1} 
        title='Planning' 
        subtitle='Woot Woot:' 
        description='Pick a date/time online (post bedtime or bedtime perhaps?)'
      />
      <HowItWorksCard 
        img={step2} 
        title='Our first date' 
        subtitle='Zoom' 
        description='We come to you - no muss no fuss! Home? Mama date? Hospital on bedrest?'
      />
      <HowItWorksCard 
        img={step3} 
        title='Mama, we are home' 
        subtitle='Ahhh...' 
        description='One of our expert Massage Therapists come with fresh sheets, massage table, and music.'
      />
    </div>
  </div>
);

export default HowItWorks;
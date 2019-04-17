import React from 'react';
import PriceCard from './PriceCard';
import ScrollAnimation from 'react-animate-on-scroll';

const Prices = () => (
    <div id='prices'>
      <ScrollAnimation
        animatePreScroll
        animateIn="slideInUp"
        animateOnce
      >
        <h1 className='title'>PRICING</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animatePreScroll
        animateIn="slideInUp"
        animateOnce
      >
        <div className='card-wrapper' id='price-card-wrapper'>
          <PriceCard 
            minutes='60'
            price='$113'
          />
          <PriceCard 
            minutes='75'
            price='$130'
            divider
          />
          <PriceCard 
            minutes='90'
            price='$140'
            divider
          />
        </div>
        <h5>All prices subject to HST (13%)</h5>
      </ScrollAnimation>
    </div>
)

export default Prices;
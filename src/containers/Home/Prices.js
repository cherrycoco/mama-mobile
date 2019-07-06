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
            price='$128'
          />
          <PriceCard 
            minutes='90'
            price='$188'
            divider
          />
        </div>
        <h4 className='pricing-insurance'>We provide an insurance receipt! (RMT)</h4>
        <h5 className='pricing-footer'><i>(Ask your provider for your coverage)</i></h5>
        <h5 className='pricing-footer'>*All prices subject to HST (13%)*</h5>
      </ScrollAnimation>
    </div>
)

export default Prices;
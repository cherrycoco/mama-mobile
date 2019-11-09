import React from 'react';
import sarah from '../../assets/sarah.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';

const Founder = () => (
  <ScrollAnimation
    animatePreScroll
    animateIn="slideInUp"
    animateOnce
  >
    <div id='founder'>
        <img src={sarah} alt='Sarah Rennick, Registered Massage Therapist (RMT) and founder of Mama Mobile Massage' />
        <div id='founder-content'>
          <h3>SARAH RENNICK</h3>
          <p>
            Sarah Rennick, RMT, founded Mama Mobile Massage after seeing a huge problem. After working for over 5 years at prenatal/postnatal clinics she noticed the challenges mothers faced in trying to schedule a massage on a regular basis.
          </p>
          <p>
            Towards the end of pregnancy mamas didn’t want to worry about things like parking, winter weather or having to leave the house after work. Postnatal mamas struggled to plan their massage due to the demanding schedule of their new baby.
          </p>
          <p>
            Aside from her work as a Registered Massage Therapist Sarah is a birth doula, infant massage instructor, certified personal trainer and prenatal massage therapy expert. She has been featured on CTV, Rogers TV and in self care podcasts/live events catered to moms.
          </p>
          <p>
            Sarah can be contacted for live events: 
          </p>
          <a className='underline' href='mailto:info@mamamobilemassage.com'>info@mamamobilemassage.com</a>
        </div>
    </div>
  </ScrollAnimation>
)

export default Founder;
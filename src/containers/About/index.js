import React from 'react';
import ScrollToTop from '../../components/ScrollTop/index';
import Founder from './Founder';
import TeamSelect from './TeamSelect';
import OurMission from './OurMission';
import './about.css';

const About = () => (
  <div>
    <ScrollToTop />
    <h1 className='about-title'>OUR<b> MISSION</b></h1>
    <OurMission />
    {/* <h1 className='about-title'><b>WHY</b> CHOOSE US</h1> */}
    <h1 className='about-title'>OUR <b>MAMA'S MAMA</b></h1>
    <Founder />
    <div id='team-wrapper'>
      <h1 className='about-title'>MAMA'S LITTLE <b>HELPERS</b></h1>
      <TeamSelect />
    </div>
  </div>
)

export default About;
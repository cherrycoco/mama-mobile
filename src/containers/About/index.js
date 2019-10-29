import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../components/ScrollTop/index';
import Founder from './Founder';
import TeamSelect from './TeamSelect';
import OurMission from './OurMission';
import './about.css';

const About = () => (
  <div className='page'>
    <Helmet>
        <title>Mama Mobile Massage | Who We Are</title>
        <meta name="description" content="Launched by women for women - our mission is to facilitate self-care for busy mothers and mothers-to-be!" />
    </Helmet>
    <ScrollToTop />
    <h1 className='title'>OUR MISSION</h1>
    <OurMission />
    {/* <h1 className='title'>WHY CHOOSE US</h1> */}
    <div id='team-wrapper'>
      <h1 className='title'>MAMA'S LITTLE HELPERS</h1>
      <TeamSelect />
    </div>
    <h1 className='title'>OUR MAMA'S MAMA</h1>
    <Founder />
  </div>
)

export default About;
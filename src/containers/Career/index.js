import React from 'react';
import career1 from '../../assets/career1.jpg';
import career2 from '../../assets/career2.jpg';
import career3 from '../../assets/career3.jpg';
import './career.css';
import ContactForm from '../Contact/ContactForm';
import ScrollToTop from '../../components/ScrollTop';

const Career = () => (
  <div id='career'>
    <ScrollToTop />
    <h1 className='title'>IMPACT THE MAMAS IN YOUR COMMUNITY!</h1>
    <img src={career1} alt='career with mama mobile' />
    <img src={career2} alt='career with mama mobile' />
    <img src={career3} alt='career with mama mobile' />
    <h2>We are currently hiring in many cities across Canada. Please inquire for more details.</h2>
    <ContactForm />
  </div>
)

export default Career;
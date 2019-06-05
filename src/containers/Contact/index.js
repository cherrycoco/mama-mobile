import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from './ContactForm';
import './contact.css';
import ScrollToTop from '../../components/ScrollTop';

const Contact = () => (
  <div id='contact'>
    <Helmet>
        <title>Mama Mobile Massage | Contact Us</title>
        <meta name="description" content="Mama Mobile Massage delivers highest qualified Registered Massage Therapists to your home or office for your prenatal, postnatal, or busy mama massage." />
    </Helmet>
    <ScrollToTop />
    <h1 className='title'>DROP US A LINE!</h1>
    <div id='contact-wrapper'>
      <div id='contact-title'>
        <h1><b>Questions?</b></h1>
        <h1>Contact us today!</h1>
      </div>
      <ContactForm />
    </div>
  </div>
)

export default Contact;
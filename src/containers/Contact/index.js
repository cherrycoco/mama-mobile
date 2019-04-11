import React from 'react';
import ContactForm from './ContactForm';
import './contact.css';
import ScrollToTop from '../../components/ScrollTop';

const Contact = () => (
  <div id='contact'>
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
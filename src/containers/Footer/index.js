import React from 'react';
import WebFooter from './WebFooter';
import MobileFooter from './MobileFooter';
import './footer.css';

const Footer = () => (
  <div>
    {document.body.clientWidth > 970 ? <WebFooter /> : <MobileFooter />}
  </div>
)

export default Footer;
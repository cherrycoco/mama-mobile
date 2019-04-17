import React from 'react';
import ScrollToTop from '../../components/ScrollTop/index';
import FullsizeImage from '../../components/Image/FullsizeImage';
import img from '../../assets/baby2.jpg';
import './giftcard.css';

class GiftCard extends React.Component {
  componentWillMount () {
    const existingScript = document.getElementById('giftCardScript');
    if (existingScript) {
      window.location.reload();
    }
  }

  componentDidMount () {
    const existingScript = document.getElementById('giftCardScript');

    if (!existingScript) {
      let script = document.createElement("script");
      script.src = 'https://cdn.giftup.app/dist/gift-up.js';
      script.id = 'giftCardScript'
      script.async = true;
      let f = document.getElementsByTagName('script')[0];
      f.parentNode.insertBefore(script, f);
    }
  }

  render () {
    return (
      <div className='page' id='gift-card'>
        <ScrollToTop />
        <h1 className='title'>SEND A MAMA SOME LOVE!</h1>
        <div className="gift-up-target" data-site-id="b4505f6e-76b7-4266-baf7-997157d45350" data-platform="Other" />
      </div>
    )
  }
}

export default GiftCard;
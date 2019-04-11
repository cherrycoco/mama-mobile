import React from 'react';
import Button from '../../components/Button/ButtonAnimated';
import speechbubble from '../../assets/chatbubble.png';
import ScrollAnimation from 'react-animate-on-scroll';
import './fullsizeImage.css';

const FullsizeImage = (props) => (
  <ScrollAnimation
    animatePreScroll
    animateIn="fadeInUp"
    animateOnce
  >
    <div 
      id='full-size-image' 
      style=
        {{backgroundImage: 
          `linear-gradient(
          rgba(255, 255, 255, 0.3), 
          rgba(255, 255, 255, 0.3)),
          url(${props.img})`
        }} 
    >
      {/* <div style=
        {{backgroundImage: 
          `linear-gradient(
          rgba(255, 255, 255, 0), 
          rgba(255, 255, 255, 0)),
          url(${speechbubble})`
        }} id='full-size-image-bubble'>
        <h3>{props.title}</h3>
      </div> */}
      {/* <div id='full-size-image-title'>
      </div> */}
    </div>
  </ScrollAnimation>
)

export default FullsizeImage;


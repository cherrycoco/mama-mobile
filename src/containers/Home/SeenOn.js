import React from 'react';
import rogersTV from '../../assets/rogerstv.png';
import momsTO from '../../assets/momsto.png';
import ctv from '../../assets/ctv.png';
import kidsCo from '../../assets/kidsAndCo.png';

const SeenOn = () => (
  <div>
    <h3 id='seen-on-text'>featured in</h3>
    <div id='seen-on'> 
      <a href='https://www.momsto.com/'><img src={momsTO} alt='moms TO' /></a>
      <a href='https://www.rogerstv.com/media?lid=237&rid=4&gid=292422' target="_blank"><img style={{width:'140px'}} src={rogersTV} alt='rogers tv' /></a>
      <a href='https://ottawa.ctvnews.ca/video?clipId=1432584' target="_blank"><img style={{width: '100px'}} src={ctv} alt='ctv news' /></a>
      <a href='https://kidsandcompany.com/' target='_blank'><img style={{width: '50px'}} src={kidsCo} alt='Kids and company' /></a>
      <a href='https://www.wee-sleep.com/?v=3e8d115eb4b3' target='_blank'><img src='https://res.cloudinary.com/dhze7gimq/image/upload/e_grayscale/v1558132446/WeeSleep_Logo_Box_RGB_300DPI_sg5yny.jpg' alt='we sleep' /></a>
    </div>
  </div>
)

export default SeenOn;
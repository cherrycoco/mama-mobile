import React from 'react';
import rogersTV from '../../assets/rogerstv.png';
import momsTO from '../../assets/momsto.png';
import ctv from '../../assets/ctv.png';
import kidsCo from '../../assets/kidsAndCo.png';

const SeenOn = () => (
  <div>
    <h3 id='seen-on-text'>featured in</h3>
    <div id='seen-on'> 
    <img src={momsTO} alt='moms TO' />
    <img style={{width:'140px'}} src={rogersTV} alt='rogers tv' />
    <img style={{width: '100px'}} src={ctv} alt='ctv news' />
    <img style={{width: '50px'}} src={kidsCo} alt='Kids and company' />
    <img src='https://res.cloudinary.com/dhze7gimq/image/upload/e_grayscale/v1558132446/WeeSleep_Logo_Box_RGB_300DPI_sg5yny.jpg' alt='we sleep' />
  </div>
  </div>
)

export default SeenOn;
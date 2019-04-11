import React from 'react';
import rogersTV from '../../assets/rogerstv.png';
import momsTO from '../../assets/momsto.png';
import ctv from '../../assets/ctv.png';
import kidsCo from '../../assets/kidsAndCo.png';

const SeenOn = () => (
  <div id='seen-on'> 
    <img src={momsTO} alt='moms TO' />
    <img style={{width:'140px'}} src={rogersTV} alt='rogers tv' />
    <img style={{width: '100px'}} src={ctv} alt='ctv news' />
    <img style={{width: '50px'}} src={kidsCo} alt='Kids and company' />
  </div>
)

export default SeenOn;
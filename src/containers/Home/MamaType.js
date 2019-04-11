import React from 'react';
import TypeCard from './TypeCard';
import prenatal from '../../assets/type-prenatal.jpg';
import postnatal from '../../assets/type-postnatal.png';
import couples from '../../assets/couple.png';
import HowItWorks from './HowItWorks';

const MamaType = () => (
  <div className='mama-type'>
    <h1 className='title'>WHICH MAMA ARE YOU?</h1>
    <div className='divider' />
    <div className='card-wrapper' id='type-card-wrapper'>
      <TypeCard
        img={prenatal}
        alt='prenatal massage'
        title='Prenatal Mama?'
        description1='Wanna lay on your bump?'
        description='Enjoy our secret contoured belly pillows and pregnancy massage by one of our specially trained RMT’s. Ease swelling and muscle/joint pain and prepare your bod for a more comfortable delivery!'
      />
      <TypeCard
        img={postnatal}
        alt='postnatal massage'
        title='Postnatal/Busy Mama?'
        description1='Achy? We know ALL the techniques!'
        description='PS… Enjoy extra time above what you booked to check on baby, etc. etc. (We get it.. #stuffhappens)'
      />
      <TypeCard
        img={couples}
        alt='couples massage'
        title='Power Duo?'
        description1='Let’s be real, both partners deserve TLC.'
        description='Ooo also enjoy our discounted couples rates!'
      />
    </div>
  </div>

)

export default MamaType;
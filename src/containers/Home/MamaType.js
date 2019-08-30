import React from 'react';
import TypeCard from './TypeCard';
import prenatal from '../../assets/type-prenatal.jpg';
import postnatal from '../../assets/type-postnatal.png';
import couples from '../../assets/couple.png';
import ScrollAnimation from 'react-animate-on-scroll';


const MamaType = () => (
  <div className='mama-type'>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <h1 className='title'>WHICH MAMA ARE YOU?</h1>
    </ScrollAnimation>
    <div className='card-wrapper' id='type-card-wrapper'>
      <TypeCard
        img={prenatal}
        alt='prenatal massage'
        title='Prenatal Mama?'
        description1='Wanna lay on your bump? Want an expert RMT?'
        description2='One of our specially trained RMT’s will help ease swelling and muscle/joint pain and prepare your bod for a more comfortable delivery!'
      />
      <TypeCard
        img={postnatal}
        alt='postnatal massage'
        title='Postnatal/Busy Mama?'
        description1='Achy? We know ALL the techniques and areas to focus on to make you feel like super mom. Enjoy our special pillows that keep your sore breasts from getting squished.'
        description2='PS… Enjoy extra time above what you booked to check on baby, etc. etc. (We get it.. #stuffhappens)'
      />
      <TypeCard
        img={couples}
        alt='couples massage'
        title='Power Duo?'
        description1='Let’s be real, both partners deserve TLC. Tag team together to get the little ones to bed while your better half gets massaged in peace. No ifs, fomo or fights about it.'
      />
    </div>
  </div>

)

export default MamaType;
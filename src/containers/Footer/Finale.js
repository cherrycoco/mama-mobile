import React from 'react';
import backgroundImg from '../../assets/rsz_1baby3.jpg';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(255,255,255, .3), 
      rgba(255,255,255, .3)),
      url(${backgroundImg})`,

      /* Create the parallax scrolling effect */
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    height: '100vh',
  }
}

const Finale = () => (
  <div style={styles.root} id='finale'>
  </div>
)

export default Finale;
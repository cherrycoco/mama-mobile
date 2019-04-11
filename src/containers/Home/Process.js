import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ProcessCard from './ProcessCard';
import backgroundImg from '../../assets/mom.jpg';

const styles = {
  root: {
    background: `linear-gradient(
      rgba(255,255,255, .4), 
      rgba(255,255,255, .4)),
      url(${backgroundImg})`,

      /* Create the parallax scrolling effect */
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    marginTop: '100px',
  },
  processCard: {
    display: 'flex',
  }
};

export default class Process extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.root}>
        <h1 className='title'>HOW IT WORKS</h1>
        <div className='card-wrapper'>
          <ProcessCard
            delay={100}
            title="Book an Appointment"
            description="We’d love to hear about your goals and aspirations. After understanding the big picture, we’ll dig into the details of your bookkeeping process so we can assess your needs."
            icon="calendar alternate outline icon"
          />
          <ProcessCard
            delay={600}
            title="We Come to You"
            description="Once we understand your needs, we’ll send over a proposal that outlines our plan for tackling your challenges and a fixed monthly price for those bookkeeping services."
            icon="home"
          />
          <ProcessCard
            delay={1200}
            title="Sit back and relax"
            description="Once you accept our proposal, we’ll get your bookkeeping tidied and up to date and begin implementing cloud accounting tools that will ensure proper bookkeeping going forward."
            icon="heart"
          />
        </div>
      </div>
    );
  }
}

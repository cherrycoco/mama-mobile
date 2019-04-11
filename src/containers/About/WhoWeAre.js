import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
  root: {
    width: 'calc(100vw-160px)',
    minHeight: '300px',
    marginLeft: '80px',
    marginRight: '80px',
    lineHeight: 1.5,
  },
  h2: {
    fontWeight: 200,
    fontSize: '2rem',
    letterSpacing: '1px',
    fontFamily: 'Source Sans Pro,sans-serif',
  },
  bold: {
    fontWeight: 900,
  },
  secondParagraph: {
    paddingTop: '30px',
  },
};

export default class WhoWeAre extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ScrollAnimation
        animatePreScroll={false}
        animateIn="fadeInUp"
        animateOnce
      >
        <div id="who-we-are" style={styles.root}>
          <div>
            <h2 style={styles.h2}>
              <b style={styles.bold}>WHO </b>
              WE ARE
            </h2>
            <p>
            We are a personalized bookkeeping service, aimed at helping trades companies focus on what really matters, while we work the back end, ensuring your accounting is current and consistent. We tailor to your company’s specific needs, customizing a system that works best for you.
            </p>
          </div>
          <div style={styles.secondParagraph}>
            <p>
            At Tradesco we form personalized relationships with our clients, ensuring you can rely on us to go over and beyond. We guarantee your bookkeeping is in the hands of those, not only good with numbers, but those who also know the trades industry inside and out. We’re always available and want to help you make the best moves to get you where you want to go.
            </p>
          </div>
          <div>
            <h2 style={styles.h2}>
              <b style={styles.bold}>WHY </b>
              CHOOSE US
            </h2>
            <ul>
              <li>Customized service</li>
              <li>Effective communication</li>
              <li>Operate at the highest standard</li>
            </ul>
          </div>
        </div>
        <div style={{ clear: 'both' }}></div>
      </ScrollAnimation>
    );
  }
}

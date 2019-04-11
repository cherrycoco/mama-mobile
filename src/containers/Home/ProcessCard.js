import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from 'semantic-ui-react'

const styles = {
  root: {
    transition: 'ease-in 2s',
    width: 'calc(100vw/3)',
    color: 'black',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
};

export default class ProcessCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ScrollAnimation
        animatePreScroll={false}
        animateIn="fadeInUp"
        animateOnce
        delay={this.props.delay}
        animateOut="fadeOut"
      >
        <div style={styles.root}>
          <Icon name={this.props.icon} size='huge' />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </ScrollAnimation>
    );
  }
}
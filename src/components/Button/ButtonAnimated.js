import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const styles = {
  wrapper: {
    width: '100%',
    height: '55px',
    backgroundColor: 'rgba(228,193,235,.84)',
    boxShadow: '0 2px 0 0 rgba(215,163,225,.84)',
    color: 'white',
    borderRadius: '0',
  },
  icon: {
    float: 'right',
    marginRight: '20px',
  },
  iconCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  h3: {
    fontSize: '1.1em',
  }
};

const ButtonAnimated = props => (
  <Button 
    style={!props.color ? styles.wrapper : {
      width: '100%',
      height: '60px',
      backgroundColor: `${props.buttonColor}`,
      color: `${props.color}`,
      borderRadius: '0',
    }} 
    animated
    onClick={props.onClick ? props.onClick : null}
  >
    <Button.Content visible>
      <h3 style={styles.h3}>{props.content}</h3>
    </Button.Content>
    <Button.Content hidden>
      <Icon
        size='large'
        style={props.center ? styles.iconCenter : styles.icon} 
        name={props.icon}
      />
    </Button.Content>
  </Button>
);

ButtonAnimated.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default ButtonAnimated;

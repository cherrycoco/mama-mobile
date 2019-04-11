import React from 'react';
import { Button } from 'semantic-ui-react';

const styles = {
  h3: {
    fontSize: '1.1em',
  }
};

const ButtonBasic = (props) => (
  <Button style={{
    width: '100%',
    height: '60px',
    backgroundColor: `${props.buttonColor}`,
    color: `${props.color}`,
    borderRadius: '5px',
  }}>
    <h3 style={styles.h3}>{props.content}</h3>
  </Button>
)

export default ButtonBasic;
import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonBasic = (props) => (
  <Button style={{
    width: '100%',
    height: '100%',
    backgroundColor: `${props.buttonColor}`,
    color: `${props.color}`,
    borderRadius: '5px',
  }}>
    <h3>{props.content}</h3>
  </Button>
)

export default ButtonBasic;
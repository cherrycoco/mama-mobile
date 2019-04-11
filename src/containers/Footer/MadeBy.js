import React from 'react';
import { Icon } from 'semantic-ui-react';

const style = {
  h5: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    letterSpacing: '0.2em',
    textAlign: 'center',
    color: '#C68BBD',
    fontSize: '16px',
  }
}

const MadeBy = () => (
  <div>
    <h5 style={style.h5}>Made with <Icon name='heart outline' /> by Cherry</h5>
  </div>
)

export default MadeBy;
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  root: {
    width: '40px',
    height: '40px',
  }
}
const CheckBox = (props) =>(
  <div className='check-box'>
    <Checkbox
      style={styles.root}
      checked={props.checked}
      onChange={props.onCheck}
      value={props.value}
    />
  </div>
);

export default CheckBox;
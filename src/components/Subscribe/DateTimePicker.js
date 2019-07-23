import React from 'react';
import { DateTimePicker } from "@material-ui/pickers";

const styles = {
  root: {
    width: '100%',
    display: 'block',
    marginBottom: '12px',
  }
}

const DateTimePickerWrapper = (props) => (
  <DateTimePicker 
    style={styles.root}
    variant='inline'
    minutesStep={30}
    autoOk
    label={props.label}
    initialFocusedDate={null}
    disablePast
    value={props.value}
    onChange={(e) => props.onChange(props.name, e._d)}
  />
);

export default DateTimePickerWrapper;
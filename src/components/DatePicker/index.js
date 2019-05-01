import React, { Fragment, useState } from "react";
import { DateTimePicker } from "material-ui-pickers";

function DatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <div className="picker">
        <DateTimePicker
          value={selectedDate}
          disablePast
          onChange={handleDateChange}
          label={props.label}
          showTodayButton
        />
      </div>
    </Fragment>
  );
}

export default DatePicker;
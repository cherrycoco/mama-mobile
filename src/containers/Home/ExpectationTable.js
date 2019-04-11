import React from 'react';

const ExpectationTable = (props) => (
  <div className='expectation-table'>
    <h1 className='expectation-table-title title'>{props.title}</h1>
    <img src={props.img} alt={props.alt} />
  </div>
)

export default ExpectationTable;
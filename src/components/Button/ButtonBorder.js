import React from 'react';

const ButtonBorder = (props) => (
  <button 
    className='button-border' 
    style={{
      padding: '10px 17px',
      width: '100%',
      height: '100%',
      backgroundColor: `${props.buttonColor}`,
      color: `${props.color}`,
      border: `2px solid ${props.color}`,
      cursor: 'pointer',
      transition: '0.5s all',
    }}
  >
    <h3>{props.content}</h3>
  </button>
)

export default ButtonBorder;
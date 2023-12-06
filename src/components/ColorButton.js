import React from 'react';
import withColor from './withColor';
import '.././styles/ColorButton.css';

const ColorButton = ({ bgColor, toggleColor }) => {
  return (
    <button
      className={`color-button ${bgColor === 'WHITE' ? 'white' : 'black'}`}
      onClick={toggleColor}
    >
      Change Color
    </button>
  );
};

export default withColor(ColorButton);
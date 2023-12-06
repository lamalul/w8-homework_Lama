
import React from 'react';
import withToggle from './withToggle'; 
import '.././styles/ToggleButton.css';

const ToggleButton = ({ isOn, toggle }) => {
  return (
    <button className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={toggle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default withToggle(ToggleButton);

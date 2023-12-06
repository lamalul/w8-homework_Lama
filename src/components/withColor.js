// withColor.js
import React, { useState } from 'react';

const withColor = (WrappedComponent) => {
  const WithColor = (props) => {
    const [bgColor, setBgColor] = useState('WHITE');

    const toggleColor = () => {
      setBgColor((prevColor) => (prevColor === 'WHITE' ? 'BLACK' : 'WHITE'));
    };

    return <WrappedComponent bgColor={bgColor} toggleColor={toggleColor} {...props} />;
  };

  return WithColor;
};

export default withColor;

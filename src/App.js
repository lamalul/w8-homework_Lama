import './App.css';
import React from 'react';
import ToggleButton from './components/ToggleButton';
import ColorButton from './components/ColorButton'
function App() {
  return (
    <div className="App">
      <hi1>Klick the Toggle button! </hi1>
      <ToggleButton />
      <br></br>
      <br></br>
      <hi1>Klick the color button! </hi1>
      <ColorButton/>
    </div>
  );
}

export default App;

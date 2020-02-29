import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo'
import Display from './components/Display'
import Keypad from './components/Keypad'

function App() {
  const [calc, setCalc] = useState(0)
  return (
    <div className="App">
      <div className='calculator-wrapper'>
        <div className='calculator-content'>
          <Logo />
          <Display calc={calc} />
          <Keypad />
        </div>
      </div>
    </div>
  );
}

export default App;

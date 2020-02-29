import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo'
import Display from './components/Display'
import Keypad from './components/Keypad'
import { create, all} from 'mathjs'

function App() {
  const config = {};
  const math = create(all, config)
  const [calc, setCalc] = useState(0)

  const update = value => {
    value === 'x/-' ? setCalc(math.eval(-calc)) : value === '=' ? setCalc(math.eval(calc)) : value === 'CLEAR' ? setCalc(0) : calc === 0 ? setCalc(value) : setCalc(calc + value)
  }

  return (
    <div className="App">
      <div className='calculator-wrapper'>
        <div className='calculator-content'>
          <Logo />
          <Display calc={calc} />
          <Keypad update={update} />
        </div>
      </div>
    </div>
  );
}

export default App;

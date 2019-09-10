import './App.css';

import React from 'react';
import { useState } from 'react';

import { Logo } from './components/logo/logo.component';
import { Display } from './components/display/display.component';

import { NumberButtons } from './components/buttons/number/number-buttons.component';
import { OperatorButtons } from './components/buttons/operator/operator-buttons.component';
import { SpecialButtons } from './components/buttons/specials/special-buttons.component';

function App() {
  const [display, setDisplay] = useState(0);
  const [storedVal, setStoredVal] = useState('');
  const [storedOperation, setStoredOperation] = useState('');

  const numberBtn = e => {
    if (display === 0) setDisplay(() => '');
    if (storedVal) setDisplay(() => '');
    setDisplay(display => display + e.value);
  };

  const specialBtn = e => {
    switch (e.value) {
      case 'C':
        setDisplay(0);
        setStoredVal('');
        setStoredOperation('');
        break;
      case '+/-':
        setDisplay(display => parseInt(display, 10) * -1);
        break;
      case '%':
        setDisplay(display => `${parseInt(display, 10) / 100}`);
        break;
      default:
        break;
    }
  };

  const operatorBtn = e => {
    if (storedOperation) {
      setDisplay(display => eval(`${storedVal} ${storedOperation} ${display}`));
      setStoredVal(storedVal => eval(`${storedVal} ${storedOperation} ${display}`));
      setStoredOperation(e.value === '=' ? '' : e.value);
    } else if (e.value !== '=') {
      setStoredVal(parseInt(display, 10));
      setDisplay(0);
      setStoredOperation(e.value);
    }
  };

  return (
    <div className='App'>
      <Logo />
      <Display display={display} />
      <NumberButtons onClick={numberBtn} />
      <OperatorButtons onClick={operatorBtn} />
      <SpecialButtons onClick={specialBtn} />
    </div>
  );
}

export default App;

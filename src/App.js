import './App.css';

import React from 'react';
import { useState } from 'react';

import { Logo } from './components/logo/logo.component';
import { Display } from './components/display/display.component';

import { NumberButtons } from './components/buttons/number/number-buttons.component';
import { OperatorButtons } from './components/buttons/operator/operator-buttons.component';
import { SpecialButtons } from './components/buttons/specials/special-buttons.component';

function App() {
  const [display, setDisplay] = useState('');

  const appendDisplay = e => {
    setDisplay(display + e.value);
  };

  return (
    <div className='App'>
      <Logo />
      <Display display={display} />
      <NumberButtons onClick={appendDisplay} />
      <OperatorButtons onClick={console.log} />
      <SpecialButtons onClick={console.log} />
    </div>
  );
}

export default App;

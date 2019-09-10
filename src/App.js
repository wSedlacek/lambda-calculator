import './App.css';

import React from 'react';
import { useState } from 'react';

import { Logo } from './components/display/components/logo/logo.component';
import { Display } from './components/display/display.component';

import { NumberButtons } from './components/buttons/number/number-buttons.component';
import { OperatorButtons } from './components/buttons/operator/operator-buttons.component';
import { SpecialButtons } from './components/buttons/specials/special-buttons.component';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const displayHook = useState('');
  const [display, setDisplay] = displayHook;

  const buttonPress = e => {
    setDisplay(display + e.value);
  };

  return (
    <div className='container'>
      <Logo />
      <Display display={display} />
      <div className='App'>
        <NumberButtons onClick={buttonPress} />
        <OperatorButtons onClick={buttonPress} />
        <SpecialButtons onClick={buttonPress} />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

import { NumberButton } from './components/number-button/number-button.component';

import { numbers } from '../../../data';

export const NumberButtons = props => {
  const { onClick } = props;
  return (
    <div className='number-btns'>
      {numbers.map(number => (
        <NumberButton key={number} text={number} onClick={onClick} />
      ))}
    </div>
  );
};

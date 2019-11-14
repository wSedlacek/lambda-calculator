import React from 'react';

import { OperatorButton } from './components/operator-button/operator-button.component';

import { operators } from '../../../data';

export const OperatorButtons = props => {
  const { onClick } = props;
  return (
    <div className='operator-btns'>
      {operators.map(operator => (
        <OperatorButton
          key={operator.char}
          text={operator.char}
          value={operator.value}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

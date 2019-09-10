import React from 'react';

import { OperatorButton } from './OperatorButton';

import { operators } from '../../../data';

export const Operators = props => {
  const { onClick } = props;
  return operators.map(operator => (
    <OperatorButton
      key={operator.char}
      text={operator.char}
      value={operator.value}
      onClick={onClick}
    />
  ));
};

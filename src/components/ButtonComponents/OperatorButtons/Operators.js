import React from 'react';
import { useState } from 'react';

import { operators } from '../../../data';

import { OperatorButton } from './OperatorButton';

export const Operators = () => {
  const [_operators] = useState(operators);
  return _operators.map(operator => <OperatorButton text={operator.char} key={operator.char} />);
};

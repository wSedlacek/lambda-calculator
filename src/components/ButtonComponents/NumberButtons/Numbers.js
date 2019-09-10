import React from 'react';

import { NumberButton } from './NumberButton';

import { numbers } from '../../../data';

export const Numbers = props => {
  const { onClick } = props;
  return numbers.map(number => <NumberButton key={number} text={number} onClick={onClick} />);
};

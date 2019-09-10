import React from 'react';
import { useState } from 'react';

import { numbers } from '../../../data';

import { NumberButton } from './NumberButton';

export const Numbers = () => {
  const [_numbers] = useState(numbers);
  return _numbers.map(number => <NumberButton text={number} key={number} />);
};

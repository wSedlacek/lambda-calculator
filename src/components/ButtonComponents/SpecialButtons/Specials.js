import React from 'react';
import { useState } from 'react';

import { specials } from '../../../data';

import { SpecialButton } from './SpecialButton';

export const Specials = () => {
  const [_specials] = useState(specials);
  return _specials.map(special => <SpecialButton text={special} key={special} />);
};

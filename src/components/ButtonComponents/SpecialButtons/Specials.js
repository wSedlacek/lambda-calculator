import React from 'react';

import { specials } from '../../../data';

import { SpecialButton } from './SpecialButton';

export const Specials = props => {
  const { onClick } = props;
  return specials.map(special => <SpecialButton key={special} text={special} onClick={onClick} />);
};

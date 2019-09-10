import React from 'react';

import { specials } from '../../../data';

import { SpecialButton } from './components/special-button/special-button.component';

export const SpecialButtons = props => {
  const { onClick } = props;
  return specials.map(special => <SpecialButton key={special} text={special} onClick={onClick} />);
};

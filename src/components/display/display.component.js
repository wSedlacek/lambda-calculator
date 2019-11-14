import './display.component.css';
import React from 'react';

export const Display = props => {
  const { display } = props;
  return <div className='display'>{display}</div>;
};

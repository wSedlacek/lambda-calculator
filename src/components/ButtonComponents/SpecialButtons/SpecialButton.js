import React from 'react';

export const SpecialButton = props => {
  const { text, onClick } = props;
  return <button onClick={() => onClick({ value: text })}>{text}</button>;
};

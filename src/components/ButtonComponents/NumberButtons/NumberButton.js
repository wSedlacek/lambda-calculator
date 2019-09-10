import React from 'react';

export const NumberButton = props => {
  const { text, onClick } = props;
  return <button onClick={() => onClick({ value: text })}>{text}</button>;
};

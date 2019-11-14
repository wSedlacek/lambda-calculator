import './number-button.component.css';
import React from 'react';

export const NumberButton = props => {
  const { text, onClick } = props;
  return (
    <button className={`number-btn number-${text}`} onClick={() => onClick({ value: text })}>
      {text}
    </button>
  );
};

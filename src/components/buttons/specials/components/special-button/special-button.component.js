import './special-button.component.css';
import React from 'react';

export const SpecialButton = props => {
  const { text, onClick } = props;
  return (
    <button className={`special-btn special-${text}`} onClick={() => onClick({ value: text })}>
      {text}
    </button>
  );
};

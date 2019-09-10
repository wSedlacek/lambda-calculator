import './operator-button.component.css';
import React from 'react';

export const OperatorButton = props => {
  const { text, value, onClick } = props;
  return (
    <button className={`operator-${text} operator-btn`} onClick={() => onClick({ value: value })}>
      {text}
    </button>
  );
};

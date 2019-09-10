import './logo.component.css';
import logo from './lambda.png';

import React from 'react';

export const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt="Lambda's logo" />
    </div>
  );
};

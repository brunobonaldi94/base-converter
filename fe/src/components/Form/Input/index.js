import React from 'react';
import {
  InputStyled,
} from './styles';

function Input({ className, ...props }) {
  return (
    <InputStyled
      className={className} 
      {...props} 
    />
  );
}

export default Input;

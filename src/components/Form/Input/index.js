import React from 'react';
import {
  InputStyled,
} from './styles';

function Input({ ...props }) {
  return (
    <InputStyled {...props} />
  );
}

export default Input;

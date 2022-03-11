import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonStyled,
} from './styles';

function Button({ className, isPrimary = true, ...props }) {
  return (
    <ButtonStyled $isPrimary={isPrimary} className={className} {...props}>
      {props.children}
    </ButtonStyled>
  );
}

export default Button;

Button.defaultProps = {
  className: '',
  isPrimary: true,
};

Button.propTypes = {
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

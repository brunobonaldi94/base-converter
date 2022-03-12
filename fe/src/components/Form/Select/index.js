import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectStyled,
} from './styles';

function Select({ selectList, defaultOption, ...props }) {
  return (
    <SelectStyled
      {...props}
    >
      <option value="">{defaultOption}</option>
      {selectList.map((item) => (
        <option
          key={item.name}
          value={item.value}
        >
          {item.name}
        </option>
      ))}
    </SelectStyled>
  );
}

export default Select;

Select.propTypes = {
  selectList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  defaultOption: PropTypes.string.isRequired,
};

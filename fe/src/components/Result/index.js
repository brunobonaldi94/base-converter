import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Container,
  ResultValue,
} from './styles';

function Result({ baseName, resultValue }) {
  let content = null;
  if (resultValue) {
    content = (
      <Container>
        <Title>{baseName}</Title>
        <ResultValue>{resultValue}</ResultValue>
      </Container>
    );
  }
  return content;
}

export default Result;

Result.propTypes = {
  baseName: PropTypes.string.isRequired,
  resultValue: PropTypes.string.isRequired,
};

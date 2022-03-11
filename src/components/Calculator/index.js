import React, { useState } from 'react';
import Form from '../Form';
import {
  Container,
} from './styles';

function Calculator() {
  const [result, setResult] = useState('');
  const onCalculateHandler = (resultValue) => {
    setResult(resultValue);
  };
  return (
    <Container>
      <Form
        onSubmitResult={onCalculateHandler}
        title="Base Converter"
      />
      <div>{result}</div>
    </Container>
  );
}

export default Calculator;

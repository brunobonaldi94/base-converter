import React, { useState } from 'react';
import Form from '../Form';
import Result from '../Result';
import {
  Container,
} from './styles';

function Calculator() {
  const [result, setResult] = useState('');
  const [baseName, setBaseName] = useState('');

  const onCalculateHandler = (resultValue) => {
    setResult(resultValue);
  };
  const onSetBaseNameHandler = (base) => {
    setBaseName(base);
  };

  return (
    <Container>
      <Form
        onSubmitResult={onCalculateHandler}
        onSetBaseName={onSetBaseNameHandler}
        title="Convert your number"
      />
      <Result
        resultValue={result}
        baseName={baseName}
      />
    </Container>
  );
}

export default Calculator;

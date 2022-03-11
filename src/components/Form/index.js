import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../Button';
import {
  FormContainer,
} from './styles';

function Form({ onSubmitResult }) {
  const [nbr, setNbr] = useState('');
  const [baseFrom, setBaseFrom] = useState('');
  const [baseTo, setBaseTo] = useState('');

  const calculateBase = async (e) => {
    try {
      e.preventDefault();
      if (!nbr || !baseFrom || !baseTo) {
        return;
      }

      const dataRequest = {
        nbr,
        baseFrom,
        baseTo,
      };
      const response = await axios.post('http://localhost:3001/', dataRequest);
      const { data } = response;
      onSubmitResult(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    console.log('nbr', nbr);
    console.log('baseFrom', baseFrom);
    console.log('baseTo', baseTo);
  }, [nbr, baseFrom, baseTo]);

  return (
    <FormContainer onSubmit={(e) => calculateBase(e)}>
      <input
        type="text"
        name="nbr"
        value={nbr}
        onChange={(e) => setNbr(e.target.value)}
      />
      <input
        type="text"
        name="baseFrom"
        value={baseFrom}
        onChange={(e) => setBaseFrom(e.target.value)}
      />
      <input
        type="text"
        name="baseTo"
        value={baseTo}
        onChange={(e) => setBaseTo(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
}

export default Form;

Form.propTypes = {
  onSubmitResult: PropTypes.func.isRequired,
};

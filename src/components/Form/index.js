import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  FormContainer,
  Error,
} from './styles';

function Form({ onSubmitResult, title }) {
  const [nbr, setNbr] = useState('');
  const [baseFrom, setBaseFrom] = useState('');
  const [baseTo, setBaseTo] = useState('');
  const [defaultBaseOptions, setDefaultBaseOptions] = useState();
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const getBase = async () => {
      try {
        const response = await axios.get('http://localhost:3001/get-base');
        const { data } = response;
        setDefaultBaseOptions(data);
      } catch (err) {
        console.log(err);
      }
    };
    getBase();
  }, []);

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
    } catch (err) {
      console.log(err);
    }
  };

  const checkInBase = (value, base) => {
    const eachValue = value.split('');
    return eachValue.every((each) => base.includes(each));
  };

  useEffect(() => {
    if (!checkInBase(nbr, baseFrom)) {
      setErrors((prevError) => ({
        ...prevError,
        baseFromError: {
          ...prevError.baseFromError,
          isInBase: 'It is not in base!',
        },
      }));
    } else {
      setErrors((prevError) => ({
        ...prevError,
        baseFromError: {
          ...prevError?.baseFromError,
          isInBase: null,
        },
      }));
    }
  }, [baseFrom]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <FormContainer onSubmit={(e) => calculateBase(e)}>
      <FormContainer.Title>
        {title}
      </FormContainer.Title>
      <FormContainer.InputGroup>
        <input
          type="text"
          name="nbr"
          value={nbr}
          onChange={(e) => setNbr(e.target.value)}
        />
        <select name="baseFrom" onChange={(e) => setBaseFrom(e.target.value)} value={baseFrom}>
          <option value="">Select Base</option>
          {defaultBaseOptions?.map((option) => (
            <option key={option.base} value={option.value}>{option.base}</option>
          ))}
        </select>
        {errors?.baseFromError?.isInBase && <Error>{errors.baseFromError.isInBase}</Error>}
        <select name="baseTo" onChange={(e) => setBaseTo(e.target.value)} value={baseTo}>
          <option value="">Select Base</option>
          {defaultBaseOptions?.map((option) => (
            <option key={option.base} value={option.value}>{option.base}</option>
          ))}
        </select>
      </FormContainer.InputGroup>
      <FormContainer.Button
        type="submit"
      >
        Convert
      </FormContainer.Button>
    </FormContainer>
  );
}

export default Form;

Form.propTypes = {
  onSubmitResult: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  FormContainer,
  Error,
} from './styles';

function Form({ onSubmitResult, onSetBaseName, title }) {
  const [nbr, setNbr] = useState('');
  const [baseFrom, setBaseFrom] = useState('');
  const [baseTo, setBaseTo] = useState('');
  const [defaultBaseOptions, setDefaultBaseOptions] = useState();
  const [formIsValid, setFormIsValid] = useState();
  const [errors, setErrors] = useState({});
  const keysInputs = {
    nbr: 'nbr',
    baseFrom: 'baseFrom',
    baseTo: 'baseTo',
  };
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
      const defaultBaseOptionsNameChoosen = defaultBaseOptions
        .find((base) => base.value === baseTo).base;
      onSetBaseName(defaultBaseOptionsNameChoosen);
      onSubmitResult(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const checkInBase = (value, base) => {
    const eachValue = value.split('');
    return eachValue.every((each) => base.includes(each));
  };

  const checkBaseIsValid = () => {
    if (!checkInBase(nbr, baseFrom)) {
      setErrors((prevError) => ({
        ...prevError,
        baseFromError: {
          ...prevError?.baseFromError,
          isInBase: 'It is not in base!',
        },
      }));
    } else if (nbr && baseFrom) {
      setErrors((prevError) => ({
        ...prevError,
        baseFromError: {
          ...prevError?.baseFromError,
          isInBase: null,
        },
      }));
    }
  };

  useEffect(() => {
    checkBaseIsValid();
  }, [baseFrom, nbr]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    const hasAnyErrorKey = Object.keys(errors)
      .filter((errorsKey) => Object.keys(keysInputs).includes(errorsKey?.replace('Error', '')));
    let hasAnyError = false;

    // eslint-disable-next-line no-restricted-syntax
    for (const keyError of hasAnyErrorKey) {
      if (errors[keyError].isInBase) {
        hasAnyError = true;
      }
    }
    console.log(hasAnyError);
    if (hasAnyError) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [errors, nbr, baseFrom, baseTo]);
  // const isDisabledButton = () => {
  //   if()
  // }

  // useEffect(() => {

  // },[baseFrom, baseTo, nbr]);

  return (
    <FormContainer onSubmit={(e) => calculateBase(e)}>
      <FormContainer.Title>
        {title}
      </FormContainer.Title>
      <FormContainer.InputGroup>
        <input
          type="text"
          name={keysInputs.nbr}
          value={nbr}
          onChange={(e) => setNbr(e.target.value)}
        />
        <select
          name={keysInputs.baseFrom}
          onChange={(e) => setBaseFrom(e.target.value)}
          value={baseFrom}
        >
          <option value="">Select Base</option>
          {defaultBaseOptions?.map((option) => (
            <option key={option.base} value={option.value}>{option.base}</option>
          ))}
        </select>
        {errors?.baseFromError?.isInBase && <Error>{errors.baseFromError.isInBase}</Error>}
        <select
          name={keysInputs.baseTo}
          onChange={(e) => setBaseTo(e.target.value)}
          value={baseTo}
        >
          <option value="">Select Base</option>
          {defaultBaseOptions?.map((option) => (
            <option key={option.base} value={option.value}>{option.base}</option>
          ))}
        </select>
      </FormContainer.InputGroup>
      <FormContainer.Button
        type="submit"
        // disabled={!nbr || !baseFrom || !baseTo}
        disabled={!formIsValid}
      >
        Convert
      </FormContainer.Button>
    </FormContainer>
  );
}

export default Form;

Form.propTypes = {
  onSubmitResult: PropTypes.func.isRequired,
  onSetBaseName: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

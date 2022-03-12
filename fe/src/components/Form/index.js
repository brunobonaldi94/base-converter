import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from './Input';
import {
  FormContainer,
  Error,
} from './styles';
import Select from './Select';

function Form({ onSubmitResult, onSetBaseName, title }) {
  const [nbr, setNbr] = useState('');
  const [baseFrom, setBaseFrom] = useState('');
  const [baseTo, setBaseTo] = useState('');
  const [defaultBaseOptions, setDefaultBaseOptions] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [errors, setErrors] = useState({});

  const keysInputs = {
    nbr: 'nbr',
    baseFrom: 'baseFrom',
    baseTo: 'baseTo',
  };
  const errorTypes = {
    isInBase: {
      name: 'isInBase',
      message: 'This number is not included in the base!',
    },
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
        .find((base) => base.value === baseTo).name;
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

  const setErrorHandler = (key, errorType, isNotNull = true) => {
    setErrors((prevError) => ({
      ...prevError,
      [key]: {
        ...prevError?.[errorType.name],
        [errorType.name]: isNotNull ? errorType.message : null,
      },
    }));
  };

  const checkBaseIsValid = () => {
    if (!checkInBase(nbr, baseFrom)) {
      setErrorHandler('baseFromError', errorTypes.isInBase);
    } else if (nbr && baseFrom) {
      setErrorHandler('baseFromError', errorTypes.isInBase, false);
    }
  };

  useEffect(() => {
    checkBaseIsValid();
  }, [baseFrom, nbr]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const isValidHandler = () => {
    const hasAnyErrorKey = Object.keys(errors)
      .filter((errorsKey) => Object.keys(keysInputs).includes(errorsKey?.replace('Error', '')));
    let hasAnyError = false;

    hasAnyErrorKey.forEach((keyError) => {
      const errorInInput = Object.keys(errors[keyError] || {});
      const errorTypesNames = Object.keys(errorTypes);
      const errorsFound = errorInInput
        .filter((errorTypeName) => errorTypesNames.includes(errorTypeName));
      if (errorsFound.every((err) => errors[keyError][err])) {
        hasAnyError = true;
      }
    });

    console.log(hasAnyError);
    if (hasAnyError) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  };

  const isTouchHandler = () => {
    const isTouchForm = nbr && baseFrom && baseTo;
    setIsTouch(isTouchForm);
  };

  useEffect(() => {
    isValidHandler();
    isTouchHandler();
  }, [errors, nbr, baseFrom, baseTo]);

  return (
    <FormContainer onSubmit={(e) => calculateBase(e)}>
      <FormContainer.Title>
        {title}
      </FormContainer.Title>
      <FormContainer.InputGroup>
        <Input
          type="text"
          name={keysInputs.nbr}
          value={nbr}
          onChange={(e) => setNbr(e.target.value)}
          placeholder="Enter your number"
        />
        {defaultBaseOptions && (
        <Select
          name={keysInputs.baseFrom}
          onChange={(e) => setBaseFrom(e.target.value)}
          value={baseFrom}
          selectList={defaultBaseOptions}
          defaultOption="Choose your base - From"
        />
        )}
        {errors?.baseFromError?.isInBase && <Error>{errors.baseFromError.isInBase}</Error>}
        {defaultBaseOptions && (
        <Select
          name={keysInputs.baseTo}
          onChange={(e) => setBaseTo(e.target.value)}
          value={baseTo}
          selectList={defaultBaseOptions}
          defaultOption="Choose your base - To"
        />
        )}
      </FormContainer.InputGroup>
      <FormContainer.Button
        type="submit"
        // disabled={!nbr || !baseFrom || !baseTo}
        disabled={!formIsValid || !isTouch}
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

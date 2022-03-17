import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Input from './Input';
import {
  FormContainer,
  Error,
  InputCustom,
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
  const [isCustomBase, setIsCustomBase] = useState([]);

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
    repeatedMembers:{
      name: 'repeatedMembers',
      message: 'It cannot contain repeated members!',
    }
  };

  useEffect(() => {
    const getBase = async () => {
      try {
        const response = await axios.get('/get-base');
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
      const response = await axios.post('/', dataRequest);
      const { data } = response;
      const defaultBaseOptionsNameChoosen = defaultBaseOptions
        .find((base) => base.value === baseTo)?.name;
      if(defaultBaseOptionsNameChoosen) {
        onSetBaseName(defaultBaseOptionsNameChoosen);
      } else {
        onSetBaseName(baseTo);
      }
      onSubmitResult(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const checkInBase = (value, base) => {
    const eachValue = value.split('')
    .filter((letter) => (letter !== '+' && letter !== '-'));
    return eachValue.every((each) => base.includes(each));
  };

  const setErrorHandler = (key, errorType, isNotNull = true) => {
    setErrors((prevError) => ({
      ...prevError,
      [key]: {
        ...prevError?.[key],
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

  const hasUniqueMembers = (baseValue) => {
    if(baseValue){
      const baseToArray = baseValue.split("");
      const uniqueArray = [...new Set(baseToArray)];
      return baseToArray?.length === uniqueArray?.length;
    }
    return true;
  }

  const checkRepeatedMembers = () => {
    if(!hasUniqueMembers(baseFrom)){
      setErrorHandler("baseFromError",errorTypes.repeatedMembers);
    } else {
      setErrorHandler("baseFromError",errorTypes.repeatedMembers, false);
    }
    if(!hasUniqueMembers(baseTo)){
      setErrorHandler("baseToError",errorTypes.repeatedMembers);
    } else {
      setErrorHandler("baseToError",errorTypes.repeatedMembers, false);
    }  
  }

  useEffect(() => {
    checkBaseIsValid();
    checkRepeatedMembers();
  }, [baseFrom, nbr, baseTo]);

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
      setFormIsValid(!hasAnyError);
  };

  const isTouchHandler = () => {
    const isTouchForm = nbr && baseFrom && baseTo;
    setIsTouch(isTouchForm);
  };

  useEffect(() => {
    isValidHandler();
    isTouchHandler();
  }, [errors, nbr, baseFrom, baseTo]);

  const setCustomBaseInputHandler = (key, value) => {
    const isCustomBaseName = isCustomBase.find((base) => base.name === key);
    const setBase = key === keysInputs.baseFrom ? setBaseFrom : setBaseTo;
    if (!isCustomBaseName){
      setIsCustomBase((prevState) => ([
        ...prevState, {
          name: key,
          value,
        },
      ]));
      setBase('');
    } else {
      setIsCustomBase((prevState) => prevState.filter((base) => base.name !== key));
    }
  }
 
  useEffect(() => {
    console.log(isCustomBase);
  }, [isCustomBase]);

  const renderCustomSelectOrInput = (baseName) => {
    let content = null;

    const setBase = baseName === keysInputs.baseFrom ? setBaseFrom : setBaseTo;
    const baseNameValue = baseName === keysInputs.baseFrom ? baseFrom : baseTo;
    const toFrom = baseName === keysInputs.baseFrom ? 'From' : 'To';
    const baseNameSelected = isCustomBase?.find(base=> base.name === baseName);
    if (baseNameSelected) {
      content = (
        <InputCustom
            type="text" 
            name={baseName} 
            value={baseNameValue} 
            onChange={(e) => setBase(e.target.value)} 
            placeholder={`Enter your custom base - ${toFrom}`} />
      );
    } else {
        content = (
          <Select
            name={baseName}
            onChange={(e) => setBase(e.target.value)}
            value={baseNameValue}
            selectList={defaultBaseOptions}
            defaultOption={`Choose your base - ${toFrom}`}
          />
        );
      }
      return content;
    }

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
        <FormContainer.SelectInput>
        {renderCustomSelectOrInput(keysInputs.baseFrom)}
        <label>
          <p>Do you want to input a custom base?</p>
          <Input
            type="checkbox"
            onChange={(e) => setCustomBaseInputHandler(keysInputs.baseFrom, e.target.checked)}
            />
        </label>
        </FormContainer.SelectInput>
    
        )}
        {errors?.baseFromError?.isInBase && <Error>{errors.baseFromError.isInBase}</Error>}
        {errors?.baseFromError?.repeatedMembers && <Error>{errors.baseFromError.repeatedMembers}</Error>}
        {defaultBaseOptions && (
        <FormContainer.SelectInput>
        {renderCustomSelectOrInput(keysInputs.baseTo)}
        <label>
          <p>Do you want to input a custom base?</p>
          <Input
            type="checkbox"
            onChange={(e) => setCustomBaseInputHandler(keysInputs.baseTo, e.target.checked)}
            />
        </label>
        {errors?.baseToError?.repeatedMembers && <Error>{errors.baseToError.repeatedMembers}</Error>}
        </FormContainer.SelectInput>
        )}
      </FormContainer.InputGroup>
      <FormContainer.Button
        type="submit"
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

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import i18n from 'i18next';
import PropTypes from 'prop-types';
import iconError from 'src/images/svg/validation-error.svg';
import iconSuccess from 'src/images/svg/validation-success.svg';
import eyeOn from 'src/images/svg/eye-show.svg';
import eyeOff from 'src/images/svg/eye-off.svg';

// import { validationRegisterRules } from '../validationRules';

import {
  FormLabelSpan,
  InputContainer,
  InputField,
  ErrorMessage,
  TextCorrect,
  SvgValidate,
  SvgEye
} from './PasswordInput.styled';

export default function PasswordInput({
  formik,
  label,
  name,
  placeholder,
  validateAfterSubmit,
  setValidateAfterSubmit
}) {
  const [passwordShown, setPasswordShown] = useState(false);

  const { t } = useTranslation();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  {
    const { errors, submitCount } = formik;
    console.log({ errors });

    const validateInput = (input) => {
      console.log(errors[{ input }]);
      if ((validateAfterSubmit || submitCount > 0) && errors[input]) {
        setValidateAfterSubmit(true);
        return 'input-error';
      } else if (submitCount > 0 && !errors[input]) {
        return 'input-correct';
      }
      return '';
    };

    return (
      <div htmlFor={name} className={validateInput(name)}>
        <FormLabelSpan>{label}</FormLabelSpan>
        <InputContainer>
          {' '}
          <InputField
            type={passwordShown ? 'text' : 'password'}
            name={name}
            placeholder={placeholder}
            className={validateInput(name)}
          />
          <button type="button" onClick={togglePassword}>
            <SvgEye
              src={passwordShown ? eyeOff : eyeOn}
              alt="Success Icon"
              className={validateInput({ name }) !== '' ? 'right' : 'left'}
            />
          </button>
          {validateInput(name) === 'input-correct' && (
            <SvgValidate src={iconSuccess} alt="Success Icon" />
          )}
          {validateInput(name) === 'input-error' && (
            <SvgValidate src={iconError} alt="Error Icon" />
          )}
        </InputContainer>

        {validateInput(name) === 'input-correct' && (
          <TextCorrect>{t('Correct password')}</TextCorrect>
        )}
        <ErrorMessage name={name} component="p" />
      </div>
    );
  }
}

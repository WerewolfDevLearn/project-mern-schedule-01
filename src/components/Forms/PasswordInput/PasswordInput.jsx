import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Formik } from 'formik';
import PropTypes from 'prop-types';
// import icon from 'src/images/svg/login.svg';
import iconError from 'src/images/svg/validation-error.svg';
import iconSuccess from 'src/images/svg/validation-success.svg';
import eyeOn from 'src/images/svg/eye-show.svg';
import eyeOff from 'src/images/svg/eye-off.svg';

// import { validationRegisterRules } from '../validationRules';

import {
  FormLabelSpan,
  InputContainer,
  InputField,
  ErrorText,
  TextCorrect,
  SvgValidate,
  SvgEye
} from './PasswordInput.styled';

export default function PasswordInput({ formik, label, type, name, placeholder }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { t } = useTranslation();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const pass = passwordShown ? 'text' : 'password';

  {
    const { errors, handleSubmit, submitCount } = formik;

    const validateInput = (input) => {
      if ((validateAfterSubmit || submitCount > 0) && errors[input]) {
        setValidateAfterSubmit(true);
        return 'input-error';
      } else if (submitCount > 0 && !errors[input]) {
        return 'input-correct';
      }
      return '';
    };

    return (
      <div htmlFor="password" className={validateInput('password')}>
        <FormLabelSpan>{label}</FormLabelSpan>
        <InputContainer>
          {' '}
          <InputField
            type={type}
            name={name}
            placeholder={placeholder}
            // id="signup_password"
            className={validateInput({ type })}
          />
          <button type="button" onClick={togglePassword}>
            <SvgEye
              src={passwordShown ? eyeOff : eyeOn}
              alt="Success Icon"
              className={validateInput('password') !== '' ? 'right' : 'left'}
            />
          </button>
          {validateInput('password') === 'input-correct' && (
            <SvgValidate src={iconSuccess} alt="Success Icon" />
          )}
          {validateInput('password') === 'input-error' && (
            <SvgValidate src={iconError} alt="Error Icon" />
          )}
        </InputContainer>

        {validateInput('password') === 'input-correct' && (
          <TextCorrect>{t('Correct password')}</TextCorrect>
        )}
        <ErrorText name="password" component="p" />
      </div>
    );
  }
}

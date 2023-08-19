import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import iconError from 'src/images/svg/validation-error.svg';
import iconSuccess from 'src/images/svg/validation-success.svg';

import {
  InputContainer,
  Subtitle,
  Input,
  ErrorText,
  TextCorrect,
  SvgValidate
} from './AuthInput.styled';

export default function AuthInput({
  name,
  title,
  type,
  placeholder,
  id,
  submitCount,
  errors,
  setValidateAfterSubmit,
  values
}) {
  const [status, setStatus] = useState('');

  const { t } = useTranslation();

  const validStatus = (input) => {
    if (errors[input]) {
      return 'input-error';
    } else if (!errors[input]) {
      return 'input-correct';
    }
    return 'input-correct';
  };

  useEffect(() => {
    if (submitCount > 0) {
      setValidateAfterSubmit(true);
      const newStatus = validStatus(name);
      setStatus(newStatus);
    }
  }, [values, errors[name], submitCount]);

  return (
    <Subtitle htmlFor={name} className={status}>
      {t(title)}
      <InputContainer>
        <Input type={type} name={name} placeholder={t(placeholder)} id={id} className={status} />
        {status === 'input-correct' && <SvgValidate src={iconSuccess} alt="Success Icon" />}
        {status === 'input-error' && <SvgValidate src={iconError} alt="Error Icon" />}
      </InputContainer>
      {status === 'input-correct' && <TextCorrect>{t('Correct name')}</TextCorrect>}
      <ErrorText name={name} component="p" />
    </Subtitle>
  );
}

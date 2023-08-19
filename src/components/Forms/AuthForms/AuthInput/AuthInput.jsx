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
  validateAfterSubmit,
  submitCount,
  errors,
  setValidateAfterSubmit
}) {
  const { t } = useTranslation();

  if (submitCount > 0) {
    setValidateAfterSubmit(true);
  }

  const validStatus = (input) => {
    if ((validateAfterSubmit || submitCount > 0) && errors[input]) {
      return 'input-error';
    } else if (submitCount > 0 && !errors[input]) {
      return 'input-correct';
    }
    return '';
  };

  return (
    <Subtitle htmlFor={name} className={validStatus()}>
      {t(title)}
      <InputContainer>
        <Input
          type={type}
          name={name}
          placeholder={t(placeholder)}
          id={id}
          className={validStatus()}
        />
        {validStatus(name) === 'input-correct' && (
          <SvgValidate src={iconSuccess} alt="Success Icon" />
        )}
        {validStatus(name) === 'input-error' && <SvgValidate src={iconError} alt="Error Icon" />}
      </InputContainer>
      {validStatus(name) === 'input-correct' && <TextCorrect>{t('Correct name')}</TextCorrect>}
      <ErrorText name={name} component="p" />
    </Subtitle>
  );
}

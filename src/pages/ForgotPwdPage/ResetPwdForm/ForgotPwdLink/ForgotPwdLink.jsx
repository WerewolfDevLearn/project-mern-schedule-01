// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RouteLink } from './ForgotPwdLink.syled';

const ForgotPwdLink = () => {
  const { t } = useTranslation();

  return <RouteLink to={'/forgot'}>{t('Forgot Password')}?</RouteLink>;
};

export default ForgotPwdLink;

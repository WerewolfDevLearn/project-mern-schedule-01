import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SvgGoogle from 'src/components/shared/Icons/Google';

import { LinkBtn } from './AuthGoogleBtn.styled';

const baseURL = 'https://project-mern-schedule-03.onrender.com/api';
// const baseURL = 'http://localhost:3001/api';

const AuthGoogleBtn = ({ title }) => {
  const { t } = useTranslation();

  return (
    <LinkBtn href={`${baseURL}/users/google`}>
      <SvgGoogle width="24px" height="24px" />
      {t(title)}
    </LinkBtn>
  );
};

AuthGoogleBtn.propTypes = {
  title: PropTypes.string
};

export default AuthGoogleBtn;

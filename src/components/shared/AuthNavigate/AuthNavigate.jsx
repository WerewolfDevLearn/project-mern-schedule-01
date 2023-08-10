import routes from 'src/routes';
import PropTypes from 'prop-types';

import { NavigateLink } from './AuthNavigate.styled';

export default function AuthNavigate({ formType }) {
  const filanRout = formType === 'register' ? routes.loginPage : routes.registerPage;
  const filanContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <div>
      <NavigateLink to={filanRout}>{filanContent}</NavigateLink>
    </div>
  );
}

AuthNavigate.propTypes = {
  formType: PropTypes.string.isRequired
};

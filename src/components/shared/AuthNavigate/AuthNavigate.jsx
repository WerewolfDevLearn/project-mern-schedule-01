import { NavLink } from 'react-router-dom';
import routes from 'src/routes';
import PropTypes from 'prop-types';

export default function AuthNavigate({ formType }) {
  const filanRout = formType === 'register' ? routes.loginPage : routes.registerPage;
  const filanContent = formType === 'register' ? 'Log In' : 'Sign up';

  return (
    <div>
      <NavLink to={filanRout}>{filanContent}</NavLink>
    </div>
  );
}

AuthNavigate.propTypes = {
  formType: PropTypes.string.isRequired
};

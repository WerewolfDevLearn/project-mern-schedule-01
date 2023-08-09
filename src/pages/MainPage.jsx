import { NavLink } from 'react-router-dom';

import routes from '../routes';

export default function MainPage() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>Please Register or Login</p>
      <ul>
        <li key="Register">
          <NavLink to={routes.registerPage}>Sign up</NavLink>
        </li>
        <li key="LogIn">
          <NavLink to={routes.loginPage}>Log in</NavLink>
        </li>
      </ul>
    </>
  );
}

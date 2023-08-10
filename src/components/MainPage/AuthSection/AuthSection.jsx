import { NavLink } from 'react-router-dom';
import routes from 'src/routes';

export default function AuthSection() {
  return (
    <ul>
      <li key="Register">
        <NavLink to={routes.registerPage}>Sign up</NavLink>
      </li>
      <li key="LogIn">
        <NavLink to={routes.loginPage}>Log in</NavLink>
      </li>
    </ul>
  );
}

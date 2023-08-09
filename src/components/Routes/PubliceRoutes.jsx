import { Outlet, Navigate } from 'react-router-dom';

import usePHBState from '../../redux/selectors';
import routes from '../../routes';

export default function PubliceRoutes() {
  const { user } = usePHBState();
  return user.verifiedEmail ? <Navigate to={routes.items} /> : <Outlet />;
}

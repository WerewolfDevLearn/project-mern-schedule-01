import { Outlet, Navigate } from 'react-router-dom';
import getCurrentDate from 'src/utils/currentDate';

import { useToken } from 'src/redux/selectors';
import routes from 'src/routes';

export default function PubliceRoutes() {
  const token = useToken();
  return token ? <Navigate to={`${routes.navFromLogIn}/${getCurrentDate()}`} /> : <Outlet />;
}

import { Outlet, Navigate } from 'react-router-dom';

import { useToken } from 'src/redux/selectors';

import routes from 'src/routes';
export default function PrivateRoutes() {
  const token = useToken();
  return token ? <Outlet /> : <Navigate to={routes.mainPage} />;
}

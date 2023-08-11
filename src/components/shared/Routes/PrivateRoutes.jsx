import { Outlet, Navigate } from 'react-router-dom';

import { useVerifiedEmail } from '../../../redux/selectors';

import routes from '../../../routes';
export default function PrivateRoutes() {
  const verifiedEmail = useVerifiedEmail();
  return verifiedEmail ? <Outlet /> : <Navigate to={routes.loginPage} />;
}

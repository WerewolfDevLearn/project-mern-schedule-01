import { Outlet, Navigate } from 'react-router-dom';
import getCurrentDate from 'src/utils/currentDate';

import { useVerifiedEmail } from '../../../redux/selectors';
import routes from '../../../routes';

export default function PubliceRoutes() {
  const verifiedEmail = useVerifiedEmail();
  return verifiedEmail ? (
    <Navigate to={`${routes.navFromLogIn}/${getCurrentDate()}`} />
  ) : (
    <Outlet />
  );
}

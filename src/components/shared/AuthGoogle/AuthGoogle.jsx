import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authGoogle } from 'src/redux/auth/authOps';
import Loader from 'src/components/shared/Loader/Loader';

const AuthGoogle = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const token = searchParams.get('token');
  const refreshToken = searchParams.get('refreshToken');

  dispatch(authGoogle({ token, refreshToken }));
  return <h2>Loading</h2>;
};

export default AuthGoogle;

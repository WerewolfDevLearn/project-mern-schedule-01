import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authenticate } from 'src/redux/auth/authOps';

const AuthGoogle = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const token = searchParams.get('token');
  const refreshToken = searchParams.get('refreshToken');

  dispatch(authenticate({ token, refreshToken }));
  return <h2>Loading...</h2>;
};

export default AuthGoogle;

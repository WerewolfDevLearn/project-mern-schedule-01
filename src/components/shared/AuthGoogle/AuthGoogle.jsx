import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom/dist';

import { authGoogle } from 'src/redux/auth/authOps';

const AuthGoogle = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const verifiedEmail = searchParams.get('verifiedEmail');
  const avatarUrl = searchParams.get('avatarUrl');
  const token = searchParams.get('token');
  const refreshToken = searchParams.get('refreshToken');

  dispatch(authGoogle({ user: { name, email, verifiedEmail }, token, refreshToken }));
  return <h2>Loading...</h2>;
};

export default AuthGoogle;

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import routes from '../routes';

import { userlogin } from '../redux/auth/authOps';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import AuthNavigate from '../components/shared/AuthNavigate/AuthNavigate';
import usePHBState from '../redux/selectors';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    error,
    isLoading,
    user: { token }
  } = usePHBState();
  const callBack = (data) => dispatch(userlogin(data));
  if (!error && !isLoading && token) {
    navigate(routes.calendarDay);
  }

  return (
    <>
      <LoginForm onSubmitForm={callBack} />
      <AuthNavigate formType="login" />
    </>
  );
}

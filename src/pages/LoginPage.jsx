import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import routes from '../routes';

import { userlogin } from '../redux/auth/authOps';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
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
      <RegisterForm option="login" title="User login" buttonName="LogIn" onSubmitForm={callBack} />
      <AuthNavigate formType="login" />
    </>
  );
}

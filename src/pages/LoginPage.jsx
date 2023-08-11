import { useDispatch } from 'react-redux';

import { userlogin } from '../redux/auth/authOps';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import AuthNavigate from '../components/shared/AuthNavigate/AuthNavigate';

export default function LoginPage() {
  const dispatch = useDispatch();

  const callBack = (data) => {
    dispatch(userlogin(data));
  };

  return (
    <>
      <LoginForm onSubmitForm={callBack} />
      <AuthNavigate formType="login" />
    </>
  );
}

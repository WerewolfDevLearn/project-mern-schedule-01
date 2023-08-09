import { useDispatch } from 'react-redux';

import { userlogin } from '../redux/auth/authOps';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';

export default function LoginPage() {
  const dispatch = useDispatch();
  const callBack = (data) => dispatch(userlogin(data));
  return (
    <>
      <RegisterForm option="login" title="User login" buttonName="LogIn" onSubmitForm={callBack} />
    </>
  );
}

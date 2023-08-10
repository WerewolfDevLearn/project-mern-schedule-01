import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import routes from 'src/routes';

import { register } from '../redux/auth/authOps';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import AuthNavigate from '../components/shared/AuthNavigate/AuthNavigate';
import usePHBState from '../redux/selectors';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailSend, setEmailSend] = useState(false);
  const { error, isLoading } = usePHBState();

  const callBack = (data) => {
    dispatch(register(data));
    setEmailSend(true);
  };

  if (!error && !isLoading && emailSend) {
    navigate(routes.verify);
  }

  return (
    <>
      <RegisterForm
        option="register"
        title="User register"
        buttonName="Register"
        onSubmitForm={callBack}
      />
      <AuthNavigate formType="register" />
    </>
  );
}

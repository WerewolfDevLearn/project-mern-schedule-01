import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { register } from '../redux/auth/authOps';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import AuthNavigate from '../components/shared/AuthNavigate/AuthNavigate';
import { useError, useisLoading } from '../redux/selectors';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDay = new Date();
  const [emailSend, setEmailSend] = useState(false);
  const error = useError();
  const isLoading = useisLoading();

  const callBack = (data) => {
    dispatch(register(data));
    setEmailSend(true);
  };

  if (!error && !isLoading && emailSend) {
    navigate(`/calendar/month/${currentDay}`);
  }

  return (
    <>
      <RegisterForm onSubmitForm={callBack} />
      <AuthNavigate formType="register" />
    </>
  );
}

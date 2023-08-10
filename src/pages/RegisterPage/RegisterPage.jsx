import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import routes from 'src/routes';

import { register } from '../../redux/auth/authOps';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import AuthNavigate from '../../components/shared/AuthNavigate/AuthNavigate';
import usePHBState from '../../redux/selectors';

import { Container, Wrap } from './RegisterPage.styled';

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
    navigate(routes.calendarDay);
  }

  return (
    <Container>
      <Wrap>
        <RegisterForm onSubmitForm={callBack} />
        <AuthNavigate formType="register" />
      </Wrap>
    </Container>
  );
}

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { register } from '../../redux/auth/authOps';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import AuthNavigate from '../../components/shared/AuthNavigate/AuthNavigate';
import { useError, useisLoading } from '../../redux/selectors';

import logo from '/images/others/desktop/goose-quote1x.png';
import logo2x from '/images/others/desktop/goose-quote2x.png';
import logo3x from '/images/others/desktop/goose-quote3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './RegisterPage.styled';

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
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>

        <Wrap>
          <RegisterForm onSubmitForm={callBack} />
          <AuthNavigate formType="register" />
        </Wrap>
      </ContentWrap>
    </Container>
  );
}

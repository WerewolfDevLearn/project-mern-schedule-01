import { useDispatch } from 'react-redux';

import { useState } from 'react';
import logo from 'src/images/others/desktop/goose-quote1x.png';
import logo2x from 'src/images/others/desktop/goose-quote2x.png';
import logo3x from 'src/images/others/desktop/goose-quote3x.png';

import { register } from 'src/redux/auth/authOps';
import RegisterForm from 'src/components/Forms/RegisterForm/RegisterForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import { useError, useisLoading } from 'src/redux/selectors';

import { Container, ContentWrap, Wrap, StyledImg } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const callBack = (data) => {
    dispatch(register(data));
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>

        <Wrap>
          <RegisterForm callBack={callBack} />
          <AuthNavigate formType="register" />
        </Wrap>
      </ContentWrap>
    </Container>
  );
}

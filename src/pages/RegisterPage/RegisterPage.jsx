import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useisLoading } from 'src/redux/selectors';
import logo from 'src/images/others/desktop/goose-quote1x.png';
import logo2x from 'src/images/others/desktop/goose-quote2x.png';
import logo3x from 'src/images/others/desktop/goose-quote3x.png';

import { register, verify } from 'src/redux/auth/authOps';
import RegisterForm from 'src/components/Forms/RegisterForm/RegisterForm';
import VerifyForm from 'src/components/Forms/VerifyForm/VerifyForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import Modal from 'src/components/shared/Modal/Modal';

import { Container, ContentWrap, Wrap, StyledImg } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const [openModal, setOpenModal] = useState(false);
  const callBack = (data) => {
    dispatch(register(data));
    // if (isLoading) setOpenModal(true);
  };
  const modalCallback = () => {};
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
      {isLoading && (
        <Modal>
          <VerifyForm />
        </Modal>
      )}
    </Container>
  );
}

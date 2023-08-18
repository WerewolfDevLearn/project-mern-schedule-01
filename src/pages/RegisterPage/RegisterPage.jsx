import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useisLoading, useError } from 'src/redux/selectors';
import logo from 'src/images/others/desktop/goose-quote1x.png';
import logo2x from 'src/images/others/desktop/goose-quote2x.png';
import logo3x from 'src/images/others/desktop/goose-quote3x.png';

import { register, verify } from 'src/redux/auth/authOps';
import RegisterForm from 'src/components/Forms/RegisterForm/RegisterForm';
import VerifyForm from 'src/components/Forms/VerifyForm/VerifyForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import Modal from 'src/components/shared/Modal/Modal';
import Loader from 'src/components/shared/Loader/Loader';
import { modalBackdropcolors } from 'src/styles/variables/themes';

import { Container, ContentWrap, Wrap, StyledImg } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const registerError = useError();

  const [openModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(false);
  };
  const callBack = (data) => {
    dispatch(register(data));
    setOpenModal(true);
  };
  const onSubmitVerifyForm = (data) => {
    dispatch(verify(data));
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
      {openModal && (
        <Modal onClose={onClose} color={modalBackdropcolors.black}>
          {isLoading ? <Loader /> : <VerifyForm onSubmitForm={onSubmitVerifyForm} />}
          {registerError && onClose()}
        </Modal>
      )}
    </Container>
  );
}

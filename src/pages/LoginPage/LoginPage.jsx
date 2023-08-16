import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userlogin, verify } from 'src/redux/auth/authOps';
import { useisLoading } from 'src/redux/selectors';
import LoginForm from 'src/components/Forms/LoginForm/LoginForm';
import VerifyForm from 'src/components/Forms/VerifyForm/VerifyForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import Modal from 'src/components/shared/Modal/Modal';
import Loader from 'src/components/shared/Loader/Loader';
import { modalBackdropcolors } from 'src/styles/variables/themes';
import logo from 'src/images/others/desktop/rocket1x.png';
import logo2x from 'src/images/others/desktop/rocket2x.png';
import logo3x from 'src/images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const [openModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(false);
  };
  const callBack = (data) => {
    dispatch(userlogin(data));
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
          <LoginForm onSubmitForm={callBack} />
          <AuthNavigate formType="login" />
        </Wrap>
      </ContentWrap>
      {openModal && (
        <Modal onClose={onClose} color={modalBackdropcolors.black}>
          {isLoading ? <Loader /> : <VerifyForm onSubmitForm={onSubmitVerifyForm} />}
        </Modal>
      )}
    </Container>
  );
}

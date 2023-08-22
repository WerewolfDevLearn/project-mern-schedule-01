import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgot } from 'src/redux/auth/authOps';
import { useisLoading } from 'src/redux/selectors';
import ForgotPwdForm from 'src/components/Forms/AuthForms/ForgotPwdForm/ForgotPwdForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import Modal from 'src/components/shared/Modal/Modal';
import Loader from 'src/components/shared/Loader/Loader';
import { modalBackdropcolors } from 'src/styles/variables/themes';
import logo from 'src/images/others/desktop/rocket1x.png';
import logo2x from 'src/images/others/desktop/rocket2x.png';
import logo3x from 'src/images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './ForgotPwdPage.styled';

function ForgotPwdPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();

  const callBack = (data) => {
    dispatch(forgot(data));
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>
        <Wrap>
          <ForgotPwdForm onSubmitForm={callBack} />
          <AuthNavigate formType="register" />
        </Wrap>
      </ContentWrap>
      {isLoading && (
        <Modal color={modalBackdropcolors.black}>
          <Loader />
        </Modal>
      )}
    </Container>
  );
}

export default ForgotPwdPage;

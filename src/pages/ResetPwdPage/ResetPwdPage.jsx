import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { reset } from 'src/redux/auth/authOps';
import { useisLoading } from 'src/redux/selectors';
import ResetPwdForm from 'src/components/Forms/AuthForms/ResetPwdForm/ResetPwdForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';
import Modal from 'src/components/shared/Modal/Modal';
import Loader from 'src/components/shared/Loader/Loader';
import { modalBackdropcolors } from 'src/styles/variables/themes';
import logo from 'src/images/others/desktop/rocket1x.png';
import logo2x from 'src/images/others/desktop/rocket2x.png';
import logo3x from 'src/images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './ResetPwdPage.styled';

function ResetPwdPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const pwdToken = searchParams.get('pwd_token');

  const callBack = (data) => {
    dispatch(reset({ ...data, id, pwdToken }));
    navigate('/login', { replace: true });
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>
        <Wrap>
          <ResetPwdForm onSubmitForm={callBack} />
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

export default ResetPwdPage;

import { useDispatch } from 'react-redux';

import { userlogin } from 'src/redux/auth/authOps';
import LoginForm from 'src/components/Forms/LoginForm/LoginForm';
import AuthNavigate from 'src/components/shared/AuthNavigate/AuthNavigate';

import logo from 'src/images/others/desktop/rocket1x.png';
import logo2x from 'src/images/others/desktop/rocket2x.png';
import logo3x from 'src/images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();

  const callBack = (data) => {
    dispatch(userlogin(data));
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
    </Container>
  );
}

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { logOut } from 'src/redux/auth/authOps';
import Logout from 'src/components/shared/Icons/Logout';

import { LogOutBtn, IconDiv } from './LogoutBtn.styled';

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const callBack = () => dispatch(logOut());
  const { t } = useTranslation();

  return (
    <>
      <LogOutBtn type="button" onClick={callBack}>
        {t('Log Out')}
        <IconDiv>
          <Logout />
        </IconDiv>
      </LogOutBtn>
    </>
  );
}

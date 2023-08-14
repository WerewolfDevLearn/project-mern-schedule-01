import { useDispatch } from 'react-redux';

import { logOut } from 'src/redux/auth/authOps';
import Logout from 'src/components/shared/Icons/Logout';

import { LogOutBtn, IconDiv } from './LogoutBtn.styled';

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const callBack = () => dispatch(logOut());
  return (
    <>
      <LogOutBtn type="button" onClick={callBack}>
        Log out
        <IconDiv>
          <Logout />
        </IconDiv>
      </LogOutBtn>
    </>
  );
}

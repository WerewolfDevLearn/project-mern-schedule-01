import { useDispatch } from 'react-redux';

import { logOut } from '../../../../redux/auth/authOps';

import { LogOutBtn } from './LogoutBtn.styled';

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const callBack = () => dispatch(logOut());
  return (
    <>
      <LogOutBtn type="button" onClick={callBack}>
        Log out
      </LogOutBtn>
    </>
  );
}

import { useDispatch } from 'react-redux';
import { updUser, changeEM, changePW, delUser } from 'src/redux/auth/authOps';

import UserForm from '../Forms/AccountForm/UserForm/UserForm';

import { AccountPageWrap } from './AccountPage.styled';

export default function AccountPage() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    dispatch(updUser(data));
  };
  const callbackEmail = (data) => {
    dispatch(changeEM(data));
  };
  const callbackPassword = (data) => {
    dispatch(changePW(data));
  };
  const callbackDeleteUser = (data) => {
    dispatch(delUser(data));
  };

  return (
    <AccountPageWrap>
      <UserForm
        callBack={callBack}
        callbackEmail={callbackEmail}
        callbackPassword={callbackPassword}
        callbackDeleteUser={callbackDeleteUser}
      />
    </AccountPageWrap>
  );
}

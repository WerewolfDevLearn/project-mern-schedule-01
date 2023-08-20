import { useDispatch } from 'react-redux';
import { updUser } from 'src/redux/auth/authOps';

import UserForm from '../Forms/AccountForm/UserForm/UserForm';

import { AccountPageWrap } from './AccountPage.styled';

export default function AccountPage() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    dispatch(updUser(data));
  };
  return (
    <AccountPageWrap>
      <UserForm callBack={callBack} />
    </AccountPageWrap>
  );
}

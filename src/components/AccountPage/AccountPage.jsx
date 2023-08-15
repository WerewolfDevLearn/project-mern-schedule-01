import { useDispatch } from 'react-redux';
import { updUser } from 'src/redux/auth/authOps';

import UserForm from '../Forms/UserForm/UserForm';

export default function AccountPage() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    dispatch(updUser(data));
  };
  return (
    <>
      <UserForm callBack={callBack} />
    </>
  );
}

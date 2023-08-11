import { useDispatch } from 'react-redux';

import { logOut } from '../../../../redux/auth/authOps';

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const callBack = () => dispatch(logOut());
  return (
    <>
      <button type="button" onClick={callBack}>
        Log out
      </button>
    </>
  );
}

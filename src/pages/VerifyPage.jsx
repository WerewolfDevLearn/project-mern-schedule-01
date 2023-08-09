import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import routes from 'src/routes';
import { verify, sendEmail } from 'src/redux/auth/authOps';

import usePHBState from '../redux/selectors';

export default function VerifyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    error,
    isLoading,
    user: { verifiedEmail, email }
  } = usePHBState();

  const sendVerifyCode = (event) => {
    event.preventDefault();
    const verifycode = event.target.code.value;
    dispatch(verify(verifycode));
  };
  const SendVerifyEmail = () => {
    dispatch(sendEmail(email));
  };

  if (!error && !isLoading && verifiedEmail) {
    navigate(routes.items);
  }

  return (
    <>
      <form id="verifyCode" onSubmit={sendVerifyCode}>
        <label htmlFor="code">Enter verifycation code</label>
        <input type="text" autoComplete="off" id="code" name="code" />
        <button type="submit">Press to verify your email</button>
      </form>
      <p>If you did not resive email, we can send you another one. </p>
      <button type="button" onClick={SendVerifyEmail}>
        Send verification Email
      </button>
    </>
  );
}

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
// import { usePHBState } from '../../../redux/selectors';
import UserInfo from '../UserInfo/UserInfo';

function AppHeader() {
  return (
    <header>
      <h2>User Profile</h2>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </header>
  );
}

export default AppHeader;

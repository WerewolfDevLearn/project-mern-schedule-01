import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useLocationContext } from '../LocationContext.js';
import UserInfo from '../UserInfo/UserInfo';

function AppHeader() {
  const activeAdress = useLocationContext();

  const headerTitle = {
    account: 'User Profile',
    statistics: 'Statistics',
    calendar: 'Calendar'
  };
  return (
    <header>
      <h2>{headerTitle[activeAdress]}</h2>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </header>
  );
}

export default AppHeader;

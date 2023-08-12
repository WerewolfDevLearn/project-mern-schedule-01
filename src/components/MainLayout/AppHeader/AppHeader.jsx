import { useLocation } from 'react-router-dom';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import UserInfo from '../UserInfo/UserInfo';

function AppHeader() {
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const headerTitle = {
    account: 'User Profile',
    statistics: 'Statistics',
    calendar: 'Calendar'
  };
  return (
    <header>
      <h2>{headerTitle[activePage]}</h2>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </header>
  );
}

export default AppHeader;

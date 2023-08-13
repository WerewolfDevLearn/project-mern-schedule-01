import { useLocation } from 'react-router-dom';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN';

import { Header, LoactionSign } from './Header.styled';

function AppHeader() {
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const headerTitle = {
    account: 'User Profile',
    statistics: 'Statistics',
    calendar: 'Calendar'
  };
  return (
    <Header>
      <UserMenuBTN stroke="#000000" />
      <LoactionSign>{headerTitle[activePage]}</LoactionSign>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </Header>
  );
}

export default AppHeader;

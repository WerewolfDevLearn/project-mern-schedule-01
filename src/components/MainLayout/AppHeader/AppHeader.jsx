import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';

import { Header, LoactionSign } from './Header.styled';

export default function AppHeader({ callBack, onGiveFeedBack }) {
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const headerTitle = {
    account: 'User Profile',
    statistics: 'Statistics',
    calendar: 'Calendar'
  };
  return (
    <Header>
      <UserMenuBTN callBack={callBack} />
      <LoactionSign>{headerTitle[activePage]}</LoactionSign>
      <AddFeedbackBtn onGiveFeedBack={onGiveFeedBack} />
      <ThemeToggler />
      <UserInfo />
    </Header>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired,
  onGiveFeedBack: PropTypes.func.isRequired
};

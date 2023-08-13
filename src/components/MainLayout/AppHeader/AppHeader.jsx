import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { Modal } from '../../shared/Modal/Modal';

import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';

import { Header, LoactionSign } from './Header.styled';
import { useState } from 'react';

export default function AppHeader({ callBack }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const headerTitle = {
    account: 'User Profile',
    statistics: 'Statistics',
    calendar: 'Calendar'
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Header>
      <UserMenuBTN callBack={callBack} />
      <LoactionSign>{headerTitle[activePage]}</LoactionSign>
      <AddFeedbackBtn openModal={openModal} />
      <ThemeToggler />
      <UserInfo />
      {modalIsOpen && <Modal onClose={closeModal}>TEXT</Modal>}
    </Header>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired
};

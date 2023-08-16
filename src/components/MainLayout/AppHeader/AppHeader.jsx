import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetReviewOwnQuery } from 'src/redux/reviews/reviewsApi';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Modal from '../../shared/Modal/Modal';
import FeedbackForm from '../../Forms/FeedbackForm/FeedbackForm';

import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';

import { Header, LoactionSign } from './Header.styled';

export default function AppHeader({ callBack }) {
  let action = 'add';
  const { data: reviews, isFetching, isLoading } = useGetReviewOwnQuery();
  if (!isLoading && reviews.length) {
    action = 'view';
  }

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
      {modalIsOpen && (
        <Modal onClose={closeModal}>
          <FeedbackForm onClose={closeModal} action={action} reviewToEdit={reviews[0]} />
        </Modal>
      )}
    </Header>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired,
  onGiveFeedBack: PropTypes.func.isRequired
};

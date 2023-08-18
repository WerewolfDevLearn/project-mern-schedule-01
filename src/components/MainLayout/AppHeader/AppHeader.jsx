import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetReviewOwnQuery } from 'src/redux/reviews/reviewsApi';
import Modal from 'src/components/shared/Modal/Modal';
import FeedbackForm from 'src/components/Forms/FeedbackForm/FeedbackForm';
import { modalBackdropcolors } from 'src/styles/variables/themes';
import LangToggler from 'src/components/shared/LangToggler/LangToggler';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';
import { Header, LoactionSign, WrapTogglers } from './Header.styled';
import { AnimatePresence } from 'framer-motion';

export default function AppHeader({ callBack, isHomePage }) {
  let action = 'add';
  const { data: reviews, isFetching, isLoading } = useGetReviewOwnQuery();
  if (!isLoading && reviews) {
    if (reviews.length) {
      action = 'view';
    }
  }

  const { t } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const headerTitle = {
    account: t('User Profile'),
    statistics: t('Statistics'),
    calendar: t('Calendar')
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
      <WrapTogglers>
        <LangToggler isHomePage={isHomePage} />
        <ThemeToggler />
      </WrapTogglers>

      <UserInfo />
      <AnimatePresence>
        {modalIsOpen && (
          <Modal onClose={closeModal} color={modalBackdropcolors.grey}>
            <FeedbackForm onClose={closeModal} action={action} reviewToEdit={reviews[0]} />
          </Modal>
        )}
      </AnimatePresence>
    </Header>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired,
  onGiveFeedBack: PropTypes.func.isRequired,
  isHomePage: PropTypes.bool
};

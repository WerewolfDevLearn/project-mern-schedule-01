import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Modal from 'src/components/shared/Modal/Modal';
import FeedbackForm from 'src/components/Forms/FeedbackForm/FeedbackForm';
import FormWrapper from 'src/components/Forms/FeedbackForm/FormWrapper';
import { modalBackdropcolors } from 'src/styles/variables/themes';
import LangToggler from 'src/components/shared/LangToggler/LangToggler';

import goose1x from 'src/images/others/desktop/goose-calendar1x.png';
import goose2x from 'src/images/others/desktop/goose-calendar2x.png';
import goose3x from 'src/images/others/desktop/goose-calendar3x.png';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import UserMenuBTN from './UserMenuBTN/UserMenuBTN';
import { Header, LoactionSign, WrapTogglers, Go, Slogan } from './Header.styled';

export default function AppHeader({ callBack, isHomePage }) {
  // let action = 'add';
  // const { data: reviews, isFetching, isLoading } = useGetReviewOwnQuery();
  // if (!isLoading && reviews) {
  //   if (reviews.length) {
  //     action = 'view';
  //   }
  // }

  const { t } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const activePage = location.pathname.split('/')[1];
  const isCalendarDayPage = activePage === 'calendar' && location.pathname.includes('/day/');

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

  const [isDesktop1440, setIsDesktop1440] = useState(false);

  useEffect(() => {
    const checkIsDesktop1440 = () => {
      setIsDesktop1440(window.innerWidth >= 1440);
    };

    checkIsDesktop1440();

    window.addEventListener('resize', checkIsDesktop1440);

    return () => {
      window.removeEventListener('resize', checkIsDesktop1440);
    };
  }, []);

  return (
    <>
      {isCalendarDayPage && isDesktop1440 ? (
        <Header>
          <UserMenuBTN callBack={callBack} />
          <img
            srcSet={`${goose1x} 1x,
            ${goose2x} 2x,
            ${goose3x} 3x`}
            src={goose1x}
            alt="Goose"
            style={{ marginRight: '8px' }}
          />

          <LoactionSign>
            {headerTitle[activePage]}
            <Slogan>
              <Go>{t('Let go')}</Go> {t('of_the past and focus on the present!')}
            </Slogan>
          </LoactionSign>

          <AddFeedbackBtn openModal={openModal} />
          <WrapTogglers>
            <LangToggler isHomePage={isHomePage} />
            <ThemeToggler />
          </WrapTogglers>

          <UserInfo />
          <AnimatePresence>
            {modalIsOpen && (
              <Modal onClose={closeModal} color={modalBackdropcolors.grey} clickable>
                <FeedbackForm onClose={closeModal} />
              </Modal>
            )}
          </AnimatePresence>
        </Header>
      ) : (
        <Header>
          <UserMenuBTN callBack={callBack} />
          {isDesktop1440 && <LoactionSign>{headerTitle[activePage]}</LoactionSign>}

          <AddFeedbackBtn openModal={openModal} />
          <WrapTogglers>
            <LangToggler isHomePage={isHomePage} />
            <ThemeToggler />
          </WrapTogglers>

          <UserInfo />
          <AnimatePresence>
            {modalIsOpen && (
              <Modal onClose={closeModal} color={modalBackdropcolors.grey} clickable>
                <FormWrapper onClose={closeModal} action="view" />
              </Modal>
            )}
          </AnimatePresence>
        </Header>
      )}
    </>
  );
}

AppHeader.propTypes = {
  callBack: PropTypes.func.isRequired,
  onGiveFeedBack: PropTypes.func.isRequired,
  isHomePage: PropTypes.bool
};

import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Loader from 'src/components/shared/Loader/Loader';
import Modal from 'src/components/shared/Modal/Modal';
import FeedbackForm from 'src/components/Forms/FeedbackForm/FeedbackForm';

import { useToken, useisLoading, useisRefreshing } from 'src/redux/selectors';

import { getCurrent } from 'src/redux/auth/authOps';

import SideBar from './SideBar/SideBar';
import AppHeader from './AppHeader/AppHeader';
import 'react-toastify/dist/ReactToastify.css';
import {
  ChildrenContainer,
  MainLayOutContainer,
  MainLayOutSubContainer
} from './MainLayout.styled';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const isRefreshing = useisRefreshing();
  const token = useToken;
  const dispatch = useDispatch();
  const toggleModal = (openModal) => setOpenModal(!openModal);
  const callBack = () => setOpen(true);
  const callBackCls = () => setOpen(false);

  const theme = useThemeColors().theme;
  useEffect(() => {
    if (token) {
      dispatch(getCurrent());
    }
  }, [dispatch, token]);
  const isLoading = useisLoading();
  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <MainLayOutContainer>
        <SideBar open={open} callBackCls={callBackCls} />
        <MainLayOutSubContainer>
          <AppHeader callBack={callBack} onGiveFeedBack={toggleModal} />
          <ChildrenContainer>{isLoading ? <Loader /> : <Outlet />}</ChildrenContainer>
        </MainLayOutSubContainer>
        <ToastContainer />
      </MainLayOutContainer>
      {openModal && (
        <Modal onClose={toggleModal}>
          <FeedbackForm />
        </Modal>
      )}
    </ThemeProvider>
  );
};

export default Layout;

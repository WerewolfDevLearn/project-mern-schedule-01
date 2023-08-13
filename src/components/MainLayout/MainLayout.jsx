import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Loader from '../shared/Loader/Loader';
import { useisLoading, useisRefreshing } from '../../redux/selectors';

import { getCurrent } from '../../redux/auth/authOps';

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
  const isRefreshing = useisRefreshing();
  const dispatch = useDispatch();
  const callBack = () => setOpen(true);
  const callBackCls = () => setOpen(false);

  const theme = useThemeColors().theme;
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const isLoading = useisLoading();
  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <MainLayOutContainer>
        <SideBar open={open} callBackCls={callBackCls} />
        <MainLayOutSubContainer>
          <AppHeader callBack={callBack} />
          <ChildrenContainer>{isLoading ? <Loader /> : <Outlet />}</ChildrenContainer>
        </MainLayOutSubContainer>
        <ToastContainer />
      </MainLayOutContainer>
    </ThemeProvider>
  );
};

export default Layout;

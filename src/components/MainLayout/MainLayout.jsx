import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from '../shared/Loader/Loader';
import { useisLoading, useisRefreshing } from '../../redux/selectors';
import Container from '../shared/Container';
import { getCurrent } from '../../redux/auth/authOps';

import { LocationContext } from './LocationContext';
import SideBar from './SideBar/SideBar';
import AppHeader from './AppHeader/AppHeader';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const isRefreshing = useisRefreshing();
  const dispatch = useDispatch();
  const location = useLocation();

  const activePage = location.pathname.split('/')[1];

  const theme = useThemeColors().theme;
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  const isLoading = useisLoading();
  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Container>
        <LocationContext.Provider value={activePage}>
          <AppHeader />
          <SideBar />
        </LocationContext.Provider>
        {isLoading ? <Loader /> : <Outlet />}
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

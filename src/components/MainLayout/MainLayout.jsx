import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';
import { ThemeProvider } from 'styled-components';

import Loader from '../shared/Loader/Loader';
import { usePHBState } from '../../redux/selectors';
import Container from '../shared/Container';

import SideBar from './SideBar/SideBar';
import AppHeader from './AppHeader/AppHeader';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { isLoading } = usePHBState();
  const theme = useThemeColors().theme;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AppHeader />
        <SideBar />
        {isLoading ? <Loader /> : <Outlet />}
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

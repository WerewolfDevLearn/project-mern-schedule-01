import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from '../shared/Loader/Loader';
import usePHBState from '../../redux/selectors';
import Container from '../shared/Container';

import SideBar from './SideBar/SideBar';
import AppHeader from './AppHeader/AppHeader';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { isLoading } = usePHBState();

  return (
    <Container>
      <AppHeader />
      <SideBar />
      <Outlet />
      {isLoading ? <Loader /> : <Outlet />}
      <ToastContainer />
    </Container>
  );
};

export default Layout;

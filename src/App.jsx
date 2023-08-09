import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrent } from './redux/auth/authOps';

import usePHBState from './redux/selectors';

import PrivateRoutes from './components/Routes/PrivateRoutes';
import PubliceRourtes from './components/Routes/PubliceRoutes';
import MainLayout from './components/MainLayout/MainLayout';
import AccountPage from './components/AccountPage/AccountPage';
import CalendarPage from './components/CalendarPage/CalendarPage';
import SatisticsPage from './components/SatisticsPage/SatisticsPage';
import Loader from './components/Loader/Loader';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

import RegisterPage from './pages/RegisterPage';

import routes from './routes.js';

function App() {
  const {
    isRefreshing,
    user: { token }
  } = usePHBState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(getCurrent());
  }, [dispatch, token]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.mainPage} element={<PubliceRourtes />}>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.registerPage} element={<RegisterPage />} />
          <Route path={routes.loginPage} element={<LoginPage />} />
        </Route>
        <Route path={routes.mainPage} element={<PrivateRoutes />}>
          <Route path={routes.mainLayout} element={<MainLayout />}>
            <Route path={routes.accountPage} element={<AccountPage />} />
            <Route path={routes.calendarPage} element={<CalendarPage />} />
            {/* day Page */}
            <Route path={routes.statisticsPage} element={<SatisticsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

/* //   <Routes>
    //     <Route path={routes.home} element={<MainLayout />}>
    //       <Route element={<PubliceRourtes />}>
    //         <Route index element={<MainPage />} />
    //         <Route path={routes.register} element={<RegisterPage />} />
    //         <Route path={routes.login} element={<LoginPage />} />
    //         <Route path={routes.verify} element={<VerifyPage />} />
    //       </Route>
    //       <Route element={<PrivateRoutes />}>
    //     <Route path={routes.home} element={<MainLayout />}>
    //         <Route path={routes.items} element={<ItemsPage />} />
    //         <Route path={routes.items} element={<ItemsPage />} />
    //         <Route path={routes.items} element={<ItemsPage />} />
    //       </Route>
    //       <Route path="*" element={<ErrorPage />} />
    //     </Route>
    //   </Routes> */

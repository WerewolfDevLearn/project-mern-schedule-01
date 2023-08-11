import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrent } from './redux/auth/authOps';

import { useisRefreshing } from './redux/selectors';

import PrivateRoutes from './components/shared/Routes/PrivateRoutes';
import PubliceRourtes from './components/shared/Routes/PubliceRoutes';
import MainLayout from './components/MainLayout/MainLayout';
import AccountPage from './components/AccountPage/AccountPage';
import CalendarPage from './components/CalendarPage/CalendarPage';
import ChoosedMonth from './components/CalendarPage/ChoosedMonth/ChoosedMonth';
import ChoosedDay from './components/CalendarPage/ChoosedDay/ChoosedDay';
import SatisticsPage from './components/SatisticsPage/StatisticsPage';
import Loader from './components/shared/Loader/Loader';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

import RegisterPage from './pages/RegisterPage/RegisterPage';

import routes from './routes';

function App() {
  const isRefreshing = useisRefreshing();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PubliceRourtes />}>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.registerPage} element={<RegisterPage />} />
          <Route path={routes.loginPage} element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.mainLayout} element={<MainLayout />}>
            <Route path={routes.accountPage} element={<AccountPage />} />
            <Route path={routes.calendarPage} element={<CalendarPage />}>
              <Route path={routes.calendarMonth} element={<ChoosedMonth />} />
              <Route path={routes.calendarDay} element={<ChoosedDay />} />
            </Route>
            <Route path={routes.statisticsPage} element={<SatisticsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

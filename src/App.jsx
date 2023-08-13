import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';

import RegisterPage from './pages/RegisterPage/RegisterPage';

import routes from './routes';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PubliceRourtes />}>
          <Route path={routes.mainPage} element={<MainPage />} />
          <Route path={routes.registerPage} element={<RegisterPage />} />
          <Route path={routes.loginPage} element={<LoginPage />} />
          <Route path={routes.calendarPage} element={<CalendarPage />}>
            <Route path={routes.calendarMonth} element={<ChoosedMonth />} />
            <Route path={routes.calendarDay} element={<ChoosedDay />} />
          </Route>
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path={routes.mainLayout} element={<MainLayout />}>
            <Route path={routes.accountPage} element={<AccountPage />} />
            {/* Вот сюда потом вернешь роут CalendarPage */}
            <Route path={routes.statisticsPage} element={<SatisticsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

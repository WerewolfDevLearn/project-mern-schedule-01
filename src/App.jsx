import { Suspense, Lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useError } from 'src/redux/selectors';
import { ThemeProvider } from 'styled-components';

import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';

import PrivateRoutes from './components/shared/Routes/PrivateRoutes';
import PubliceRourtes from './components/shared/Routes/PubliceRoutes';
import MainLayout from './components/MainLayout/MainLayout';
import AccountPage from './components/AccountPage/AccountPage';
import CalendarPage from './components/CalendarPage/CalendarPage';
import ChoosedMonth from './components/CalendarPage/ChoosedMonth/ChoosedMonth';
import ChoosedDay from './components/CalendarPage/ChoosedDay/ChoosedDay';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';
import Loader from './components/shared/Loader/Loader';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LoginPage from './pages/LoginPage/LoginPage';
import AuthGoogle from './components/shared/AuthGoogle/AuthGoogle';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import { DivWrapperAPP } from './App.styled';

import routes from './routes';

function App() {
  const error = useError();
  const theme = useThemeColors().theme;
  if (error) {
    toast.error(error.message);
  }

  return (
    <ThemeProvider theme={theme}>
      <DivWrapperAPP>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<PubliceRourtes />}>
              <Route path={routes.mainPage} element={<MainPage isHomePage={true} />} />
              <Route path={routes.registerPage} element={<RegisterPage />} />
              <Route path={routes.loginPage} element={<LoginPage />} />
              <Route path={routes.authGoogle} element={<AuthGoogle />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path={routes.mainLayout} element={<MainLayout />}>
                <Route path={routes.accountPage} element={<AccountPage />} />
                <Route path={routes.calendarPage} element={<CalendarPage />}>
                  <Route path={routes.calendarMonth} element={<ChoosedMonth />} />
                  <Route path={routes.calendarDay} element={<ChoosedDay />} />
                </Route>
                <Route path={routes.statisticsPage} element={<StatisticsPage />} />
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <ToastContainer hideProgressBar closeOnClick theme={theme.toastify.theme} />
      </DivWrapperAPP>
    </ThemeProvider>
  );
}

export default App;

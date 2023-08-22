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
import ForgotPwdPage from './pages/ForgotPwdPage/ForgotPwdPage';
import ResetPwdPage from './pages/ResetPwdPage/ResetPwdPage';
import AuthGoogle from './components/shared/AuthGoogle/AuthGoogle';

import RegisterPage from './pages/RegisterPage/RegisterPage';
import { DivWrapperAPP, DivColorWrapperAPP } from './App.styled';

import routes from './routes';
import { GlobalStyle } from './styles/Basic/globalStyles.styled';

// const MainLayout = lazy(() => import('./components/MainLayout/MainLayout'));
// const AccountPage = lazy(() => import('./components/AccountPage/AccountPage'));
// // const CalendarPage = lazy(() => import('./components/CalendarPage/CalendarPage'));
// // const ChoosedMonth = lazy(() => import('./components/CalendarPage/ChoosedMonth/ChoosedMonth'));
// // const ChoosedDay = lazy(() => import('./components/CalendarPage/ChoosedDay/ChoosedDay'));
// // const StatisticsPage = lazy(() => import('./components/StatisticsPage/StatisticsPage'));
// const AuthGoogle = lazy(() => import('./components/shared/AuthGoogle/AuthGoogle'));
// const MainPage = lazy(() => import('./pages/MainPage'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

function App() {
  const error = useError();
  const theme = useThemeColors().theme;
  if (error) {
    toast.error(error.message);
  }

  return (
    <ThemeProvider theme={theme}>
      <DivColorWrapperAPP>
        <DivWrapperAPP>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<PubliceRourtes />}>
                <Route path={routes.mainPage} element={<MainPage isHomePage={true} />} />
                <Route path={routes.registerPage} element={<RegisterPage />} />
                <Route path={routes.loginPage} element={<LoginPage />} />
                <Route path={routes.authGoogle} element={<AuthGoogle />} />
                <Route path={routes.forgotPassword} element={<ForgotPwdPage />} />
                <Route path={routes.resetPassword} element={<ResetPwdPage />} />
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
      </DivColorWrapperAPP>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

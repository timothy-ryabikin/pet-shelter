import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import { HOME_ROUTE, LOGIN_ROUTE } from "./utils/const";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <LoginPage />,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: <MainPage />,
  },
];

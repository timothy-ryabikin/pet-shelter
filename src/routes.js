import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import { HOME_ROUTE, LOGIN_ROUTE } from "./utils/const"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login />
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    }
]
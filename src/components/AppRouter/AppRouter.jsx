import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";

function AppRouter() {
    const user = true;
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route path={path} element={Component} exact={true} key={path}></Route>
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        ) :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route path={path} element={Component} exact={true} key={path}></Route>
                )}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        )

}

export default AppRouter;

import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const Loader = lazy(() => import("./Loader/Loader"))
const MyContactsPage = lazy(() => import("../page/MyContactsPage/MyContactsPage"))
const NotFoundPage = lazy(() => import("../page/NotFoundPage/NotFoundPage"))
const RegisterPage = lazy(() => import("../page/RegisterPage/RegisterPage"))

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>loader...</p>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    {/* <Route path="/login" element={<LoginPage />} /> */}
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<MyContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;
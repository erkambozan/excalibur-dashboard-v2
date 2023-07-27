import {Navigate, Route, Routes} from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import DashboardAppPage from "./pages/DashboardAppPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {authSlice} from "./core/auth/authSlice";
import EmployeePage from "./pages/EmployeePage";

// ----------------------------------------------------------------------

export default function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authSlice.actions.isAuth());
  }, []);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const ProtectedRouteWrapper = (props) => (
    <ProtectedRoute authenticated={isAuthenticated} {...props} />
  );

  const routes = (
    <>
      <ProtectedRouteWrapper>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route element={<Navigate to="/dashboard/app" />} index />
            <Route path="app" element={<DashboardAppPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="employee" element={<EmployeePage />} />
          </Route>
          <Route element={<SimpleLayout />}>
            <Route element={<Navigate to="/dashboard/app" />} index />
            <Route path="404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </ProtectedRouteWrapper>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );

  return <React.Fragment>{routes}</React.Fragment>;
}

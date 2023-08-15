import { Navigate, Route, Routes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
//
import UserPage from "./pages/main-pages/UserPage";
import LoginPage from "./pages/main-pages/LoginPage";
import Page404 from "./pages/Page404";
import DashboardAppPage from "./pages/DashboardAppPage";
import { ProtectedRoute } from "./ProtectedRoute";
import React, { useEffect } from "react";
import EmployeePage from "./pages/main-pages/EmployeePage";
import HierarchyPage from "./pages/main-pages/HierarchyPage";
import { tokenValidation } from "./app/tokenValidation";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "./core/auth/authSlice";
import AnnualLeave from "./pages/main-pages/AnnualLeave";

// ----------------------------------------------------------------------

export default function Router() {
  const isAuthenticated = tokenValidation();
  const dispatch = useDispatch();
  const { isA } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isAuth());
    isAuthenticated
      ? console.log("Authenticated")
      : console.log("Not Authenticated");


  }, [isAuthenticated]);
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
            <Route path="hierarchy" element={<HierarchyPage />} />
            <Route path="annualleave" element={<AnnualLeave />} />
          </Route>
          <Route element={<Navigate to="/dashboard/app" />} index />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ProtectedRouteWrapper>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );

  return <React.Fragment>{routes}</React.Fragment>;
}

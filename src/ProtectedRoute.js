import { Navigate } from "react-router-dom";
import React from "react";

export const ProtectedRoute = ({ authenticated, children }) => {
  return authenticated ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/login" replace />
  );
};

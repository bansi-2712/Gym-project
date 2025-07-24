 // src/Router/ProtectedAdminRoute.jsx
import React from "react";
import { useAuth } from "./Authcontext";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Not logged in
  if (!user) return <Navigate to="/login" replace />;

  // Logged in but not admin
  if (user.role !== "admin") return <Navigate to="/" replace />;

  // Logged in and admin
  return children;
};

export default ProtectedAdminRoute;

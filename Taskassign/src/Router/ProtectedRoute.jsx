// src/Router/ProtectedRoute.jsx
import React from "react";
import { useAuth } from "./Authcontext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Show loading until auth check is done
  if (loading) return <div>Loading...</div>;

  // If not logged in, redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // If logged in, allow access
  return children;
};

export default ProtectedRoute;


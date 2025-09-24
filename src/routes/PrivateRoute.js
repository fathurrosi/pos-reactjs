import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthService from 'services/AuthService';


const authService = new AuthService();
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.isAuthenticated();
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;


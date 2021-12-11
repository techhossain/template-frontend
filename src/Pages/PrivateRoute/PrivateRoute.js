import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  let location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;


};

export default PrivateRoute;
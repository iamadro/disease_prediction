import React from 'react';
import { Route, Navigate , Outlet} from 'react-router-dom';
import { AccessProvider } from '../AcessProvider/AcessProvider';
import Disease from '../components/Disease';
import { useAccess } from '../AcessProvider/AcessProvider';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { hasAccess } = useAccess();
  
    return (
     
          hasAccess ? <Outlet/> :  <Navigate to="/" />
    
    );
  };
  
  export default ProtectedRoute;

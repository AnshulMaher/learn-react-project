import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
  const userLoggedIn = !!useSelector((state) => state.auth.access_token);
  if (!userLoggedIn) return <Navigate to="/sign-in" />;
  return <Outlet />;
}

export default RequireAuth;
